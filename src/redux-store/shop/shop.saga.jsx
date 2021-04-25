import { call, put, takeLatest, all } from 'redux-saga/effects';
import { convertCollectionSnapshotToMap, firestore } from '../../Firebase/firebase.utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shop.actions';

import shopActionType from './shop.types'

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
		yield put(fetchCollectionSuccess(collectionMap));
	} catch (error) {
		yield put(fetchCollectionFailure(error.message))
	} 
}

export function* fetchCollectionsStart() {
	yield takeLatest(shopActionType.FETCH_COLLECTION_START, fetchCollectionsAsync);
};

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)])
};