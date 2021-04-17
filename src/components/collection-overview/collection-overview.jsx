import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux-store/shop/shop.selectors';
import CollectionPreview from '../collection-preview.component/collection-preview';
// import DescriptionPage from '../description-page/description-page';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
	console.log(selectCollectionForPreview)
	console.log(collections)
	return (
		<div className='collection-overview'>
			{
				collections.map(({ id, ...otherCollectionProps }) => (
				<>
					<CollectionPreview key={id} {...otherCollectionProps} />
					{/* <DescriptionPage key={id} {...otherCollectionProps} /> */}
				</>
				))}
		</div>
	)

}
    const mapStatetoProps = createStructuredSelector({
      collections: selectCollectionForPreview 
});

export default connect(mapStatetoProps)(CollectionOverview)
