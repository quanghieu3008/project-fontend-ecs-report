import * as types from "../constants.js"
function getHumansAction(activePage, totalPage) {
    return {
        type: types.GET_HUMAN_REQUEST,
        payload: { activePage: activePage, totalPage: totalPage }
    }
}

function addHumansAction(data) {
    return {
        type: types.ADD_HUMAN_REQUEST,
        payload: data
    }
}

function editHumansAction(data) {
    return {
        type: types.EDIT_HUMAN_REQUEST,
        payload: data
    }
}

function chooseHumanAction(human) {
    return {
        type: types.CHOOSE_HUMAN,
        payload: human
    }
}

function deleteHumanAction(id) {
    return {
        type: types.DELETE_HUMAN_REQUEST,
        payload: id
    }
}
function searchHumanAction(data) {
    return {
        type: types.SEARCH_HUMAN_REQUEST,
        payload: data
    }
}

export {
    getHumansAction,
    addHumansAction,
    editHumansAction,
    chooseHumanAction,
    deleteHumanAction,
    searchHumanAction
}
