import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux-store/shop/shop.selectors';
import DescriptionPage from './description-page';

const DescriptionMapPage = ({ collections }) => {
	console.log(collections);
	return (
		<div>
				<div  className="description">
						{
					collections.map(collection => <DescriptionPage key={collection.id} item={collection} /> )
						}
						</div>
					</div>
	
	)
}

    const mapStatetoProps = createStructuredSelector({
      collections: selectCollectionForPreview 
});

export default connect(mapStatetoProps)(DescriptionMapPage)
