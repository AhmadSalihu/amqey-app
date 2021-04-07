import React from 'react'
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux-store/shop/shop.selectors';
import CollectionPreview from '../collection-preview.component/collection-preview';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => {
	return (
		<div className='collection-overview'>
			{
				collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
		</div>
	)

}
    const mapStatetoProps = createStructuredSelector({
      collections: selectCollectionForPreview 
});

export default connect(mapStatetoProps)(CollectionOverview)
