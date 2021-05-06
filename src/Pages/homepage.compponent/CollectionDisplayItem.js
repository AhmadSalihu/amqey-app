import React from 'react'
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer } from '../../components/collectionItem.component/collectiomItem.styles';

const CollectionDisplayItem = ({ item }) => {
  const { name, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
      </CollectionFooterContainer>
      <AddButton  inverted>
      Shop Now
      </AddButton>
    </CollectionItemContainer>
  );  
};

export default CollectionDisplayItem
