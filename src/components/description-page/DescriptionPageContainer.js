import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionLoaded } from "../../redux-store/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner";
import DescriptionPage from "./description-page";




const mapStateToProps = createStructuredSelector({
	isLoading: state => !selectCollectionLoaded(state)
});

const DescriptionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(DescriptionPage)

export default DescriptionPageContainer;