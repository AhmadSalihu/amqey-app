// import { ListItemSecondaryAction } from '@material-ui/core';
import React from 'react'
import { CollectionPreviewContainer, CollectionViewAllContainer, PreviewContainer, TitleContainer } from '../collection-preview.component/collection-preview.styles'
import DescriptionPage from './description-page';

const ProductDescriptionPage = ({ item, collection, match }) => {
	const { title, items, routeName } = collection;
	console.log(collection)
	console.log(items)
	console.log(items)
	return (
		 <CollectionPreviewContainer>
    <CollectionViewAllContainer>
    <TitleContainer>
      {title.toUpperCase()}
      </TitleContainer>
    </CollectionViewAllContainer>
    <PreviewContainer>
      {items
          .map(item => (
        <>
							<DescriptionPage key={item.id} item={item} match={match} routeName={routeName} />
        </>
          ))};
    </PreviewContainer>
  </CollectionPreviewContainer>
	)
}

export default ProductDescriptionPage
