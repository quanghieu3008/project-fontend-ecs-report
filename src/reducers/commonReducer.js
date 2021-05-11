import {HIDE_ERROR_DIALOG, SHOW_ERROR_DIALOG} from "../constants";

const initialState = {
    errorMessage: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_ERROR_DIALOG:
            return { ...state, errorMessage: payload }
        case HIDE_ERROR_DIALOG:
            return { ...state, errorMessage: null }
        default:
            return state
    }
}
