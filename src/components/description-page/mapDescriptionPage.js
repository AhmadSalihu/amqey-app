import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux-store/shop/shop.selectors';
import ProductDescriptionPage from './productDescriptionPage';

const MapDescriptionPage = ({ item, collections, match }) => {
	console.log(collections);
	return (
		<div>
			{
				collections.map((collection) => (
					<ProductDescriptionPage key={collection.id} collection={collection} item={item} match={match} />
				))
			}
			
		</div>
	)
}


    const mapStatetoProps = createStructuredSelector({
      collections: selectCollectionForPreview 
});

export default connect(mapStatetoProps)(MapDescriptionPage);
