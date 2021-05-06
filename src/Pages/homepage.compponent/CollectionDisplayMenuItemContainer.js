import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { isCollectionFetching } from '../../redux-store/shop/shop.selectors';

import CollectionDisplayMenuItem from './CollectionDisplayMenuItem';

const mapStateToProps = createStructuredSelector({
	isLoading: isCollectionFetching
})

const CollectionDisplayMenuItemContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionDisplayMenuItem);


export default CollectionDisplayMenuItemContainer;