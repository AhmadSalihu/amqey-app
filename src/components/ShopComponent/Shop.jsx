import React from 'react';
import CollectionPreview from '../collection-preview.component/collection-preview'
import SHOP_DATA from './Shop.data';
import './Shop.styles.scss'


class SHOP extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state; 
    return(
      <div className="shop-page">
        {
          collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} xs={12} sm={6} md={4} lg={3} />
          ))}
      </div>
    )
  }
}


export default SHOP; 