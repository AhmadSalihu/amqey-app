import React from 'react'
import CustomButton from '../custom-button.component/CustomButton';
import './collectionItem.styles.scss';
import { connect } from 'react-redux'
import { addItem } from '../../redux-store/cart/cart.actions';


function CollectionItem({ addItem, item }) {
  const { name, imageUrl, price, } = item;
  return (
    <div className="collection-item">
      <div className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">₦{price}</span>
        
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
