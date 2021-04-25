import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { selectCollectionLoaded } from "../../redux-store/shop/shop.selectors";
import CollectionPage from "./collectionPage";






const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectCollectionLoaded(state)
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionPage)

export default CollectionPageContainer;