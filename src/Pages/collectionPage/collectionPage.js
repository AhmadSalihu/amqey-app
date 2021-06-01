import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux-store/shop/shop.selectors';

import CollectionItem from '../../components/collectionItem.component/CollectionItem'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collectionPage.styles';
import './collectionPage.styles.jsx'


const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <>
            <CollectionItem key={item.id} item={item} collection={collection} />
          </>
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);