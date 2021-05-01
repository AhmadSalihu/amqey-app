import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collectionItem.component/CollectionItem';


import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
  CollectionViewAllContainer,
  ViewAllContainer
} from './collection-preview.styles';



const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <CollectionViewAllContainer>
    <TitleContainer>
      {title.toUpperCase().padEnd(10)}
      </TitleContainer>
    <ViewAllContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
       See all &#10095;
    </ViewAllContainer>
    </CollectionViewAllContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);