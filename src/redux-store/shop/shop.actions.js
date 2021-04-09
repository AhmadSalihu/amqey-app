import shopActionType from "./shop.types"



 export const updateCollections = (collectionMap) => ({
	type: shopActionType.UPDATE_COLLECTION_TYPE,
	payload: collectionMap
})

