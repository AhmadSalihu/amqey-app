import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { compose } from 'redux';
import CollectionDisplayItem from './CollectionDisplayItem';
import { selectCollectionLoaded } from '../../redux-store/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
isLoading: state => !selectCollectionLoaded(state)
})

const CollectionDisplayItemContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionDisplayItem);


export default CollectionDisplayItemContainer;