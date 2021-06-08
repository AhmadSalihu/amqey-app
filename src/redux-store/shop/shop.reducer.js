import shopActionType from "./shop.types";
import SHOP_DATA from './Shop.data';
import  PRODUCT_DETAILS from './shop_Detetails_Page.data.'

const INITIAL_STATE = {
	collections: SHOP_DATA,
	items:  PRODUCT_DETAILS,
	isFetching: false,
	errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopActionType.FETCH_COLLECTION_START:
			return {
				...state,
				isFetching: true
			}
		case shopActionType.FETCH_COLLECTION_SUCCESS: 
			return {
				...state, 
				isFetching: false,
				collections: action.payload
			}
		case shopActionType.FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		default:
			return state;
		}
}
	

export default shopReducer;

