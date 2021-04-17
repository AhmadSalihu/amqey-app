import { convertCollectionSnapshotToMap, firestore } from "../../Firebase/firebase.utils";
import shopActionType from "./shop.types"



export const fetchCollectionStart = () => ({
	type: shopActionType.FETCH_COLLECTION_FAILURE,
});

export const fetchCollectionSuccess = (collectionMap) => ({
	type: shopActionType.FETCH_COLLECTION_SUCCESS,
	payload: collectionMap
});

export const fetchCollectionFailure = (errorMessage) => ({
	type: shopActionType.FETCH_COLLECTION_FAILURE,
	payload: errorMessage
});

export const fetchCollectionAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections')
		dispatch(fetchCollectionStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      dispatch(fetchCollectionSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionFailure(error.message)))  
	}
}