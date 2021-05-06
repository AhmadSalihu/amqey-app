import React from 'react'
import { withRouter } from 'react-router-dom';
import CollectionDisplayItem from './CollectionDisplayItem';

import { CollectionPreviewContainer, CollectionViewAllContainer, PreviewContainer, ViewAllContainer } from '../../components/collection-preview.component/collection-preview.styles';


const CollectionDisplayMenuItem = ({ collection }) => {
  const { items, history, match, routeName } = collection;
  console.log(collection);
  console.log(items);

 return (
    <CollectionPreviewContainer>
      <CollectionViewAllContainer>
        
        <ViewAllContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
          See all &#10095;
    </ViewAllContainer>
      </CollectionViewAllContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
              <CollectionDisplayItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
	)
}

export default withRouter(CollectionDisplayMenuItem)
