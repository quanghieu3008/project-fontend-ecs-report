import { put, takeEvery } from 'redux-saga/effects'
import getHumanAPI from '../fetchAPIs/getHuman'
import addHumanAPI from '../fetchAPIs/addHuman'
import updateHumanAPI from '../fetchAPIs/updateHuman'
import deleteHumanAPI from '../fetchAPIs/deleteHuman'
import searchHumanAPI from '../fetchAPIs/searchHuman'
import getPaginationHumanAPI from "../fetchAPIs/getPaginationHuman";
import * as types from '../constants'
function* getHumans(action) {
    try {

        let response = yield getHumanAPI();
        let totalPage = response.length;
        const res = yield getPaginationHumanAPI(action.payload)
        yield put({
            type: types.GET_HUMAN_SUCCESS,
            payload: { res, activePage: action.payload.activePage, totalPage: totalPage },

        })
    } catch {
        yield put({
            type: types.GET_HUMAN_FAILURE,
        })
    }
}

function* addHumans(action) {
    try {
        yield addHumanAPI(action.payload)
        yield put({
            type: types.GET_HUMAN_REQUEST,
        })
    } catch {
        yield put({
            type: types.ADD_HUMAN_FAILURE
        })
    }
}

function* updateHumans(data) {
    try {
        const response = yield updateHumanAPI(data.payload);
        yield put({
            type: types.EDIT_HUMAN_SUCCESS,
            payload: response
        })
    } catch {
        yield put({
            type: types.EDIT_HUMAN_FAILURE,
        })
    }
}

function* deleteHuman(data) {
    try {
        yield deleteHumanAPI(data.payload);
        yield put({
            type: types.DELETE_HUMAN_SUCCESS,
            payload: data.payload
        })
    } catch {
        yield put({
            type: types.DELETE_HUMAN_FAILURE
        })
    }
}
function* searchHuman(data) {
    try {
        yield searchHumanAPI(data.payload);
        yield put({
            type: types.SEARCH_HUMAN_SUCCESS,
            payload: data.payload
        })
    } catch {
        yield put({
            type: types.SEARCH_HUMAN_FAILURE
        })
    }
}

const HumanSaga = [
    takeEvery(types.GET_HUMAN_REQUEST, getHumans),
    takeEvery(types.ADD_HUMAN_REQUEST, addHumans),
    takeEvery(types.EDIT_HUMAN_REQUEST, updateHumans),
    takeEvery(types.DELETE_HUMAN_REQUEST, deleteHuman),
    takeEvery(types.SEARCH_HUMAN_REQUEST, searchHuman),
];
export default HumanSaga;
