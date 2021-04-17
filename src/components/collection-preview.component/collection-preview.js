import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collectionItem.component/CollectionItem';



import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
  ViewAllContainer,
  CollectionViewAllDivContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
  <CollectionViewAllDivContainer>
    <TitleContainer>
      {title.toUpperCase()}
      </TitleContainer>
    <ViewAllContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      See all &#10095;
    </ViewAllContainer>
    </CollectionViewAllDivContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 8)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);