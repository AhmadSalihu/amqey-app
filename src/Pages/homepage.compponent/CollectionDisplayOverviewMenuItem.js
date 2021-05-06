import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux-store/shop/shop.selectors';
import CollectionDisplayMenuItem from './CollectionDisplayMenuItem';

const CollectionDisplayOverviewMenuItem = ({ collections }) => {
	console.log(collections);
	return (
		<div>
				{
				collections.map((collection) => (
        <CollectionDisplayMenuItem key={collection.id} coolection={collection} />
				))}
		</div>
	)
}

const mapStatetoProps = createStructuredSelector({
  collections: selectCollectionForPreview 
});

export default connect(mapStatetoProps)(CollectionDisplayOverviewMenuItem)
