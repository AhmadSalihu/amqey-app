import productSliderActionType from "./product-slider.type";
import PRODUCT_SLIDER from './productData'

const INITIAL_STATE = {
	products: PRODUCT_SLIDER,
	isFetching: false,
	errorMessage: undefined
};

const productSliderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case productSliderActionType.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true
			}
		case  productSliderActionType.FETCH_COLLECTION_SUCCESS: 
			return {
				...state, 
				isFetching: false,
				products: action.payload
			}
		case  productSliderActionType.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		default:
			return state;
		}
}
	

export default productSliderReducer;
















