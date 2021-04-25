import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { isCollectionFetching } from '../../redux-store/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner'
import CollectionOverview from './collection-overview'
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
	isLoading: isCollectionFetching
})

const CollectionOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionOverview);


export default CollectionOverviewContainer;