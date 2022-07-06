import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* getMerch(action) {
    try {
        const items = yield axios.get('/api/merch', action.payload);
        yield put ({
            type: 'SET_MERCH',
            payload: items.data
        })
    }
    catch(err) {
        console.log('Error merch.saga GET', err)
    }
}

function* merchSaga() {
    yield takeLatest('FETCH_MERCH', getMerch)
}

export default merchSaga;