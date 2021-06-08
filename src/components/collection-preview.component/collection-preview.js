import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collectionItem.component/CollectionItem';

import * as FaIcons from 'react-icons/fa';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
  CollectionViewAllContainer,
  ViewAllContainer
} from './collection-preview.styles';



const CollectionPreview = ({ collection, history, match }) => {
  const { title, items, routeName } = collection;
return (
  <CollectionPreviewContainer>
    <CollectionViewAllContainer>
    <TitleContainer>
      {title.toUpperCase()}
      </TitleContainer>
    <ViewAllContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      See all<FaIcons.FaAngleRight />
    </ViewAllContainer>
    </CollectionViewAllContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 5)
          .map(item => (
         <CollectionItem key={item.id} item={item} />
          ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
  );
}

export default withRouter(CollectionPreview);