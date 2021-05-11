import * as types from "../constants";
const DEFAULT_STATE = {
    humans: [
        {
            id: 1, name: "Huy", score: 9, age: 18, status: "hoạt động", startdate: "20/09/2020", outdate: "20/09/2020", nameproject: "ECS(20/09/2020 - 20/022021)",
            topproject: "CảnhLV", manage: "LượngKAM", customer: "FabbiJSC", position: "Developer"
        },
        {
            id: 2, name: "Quang", score: 6, age: 20, status: "hoạt động", startdate: "20/09/2020", outdate: "20/09/2020", nameproject: "ECS(20/09/2020 - 20/022021)",
            topproject: "CảnhLV", manage: "LượngKAM", customer: "FabbiJSC", position: "Developer"
        },
    ],
    activePage: 1,
    totalPage: 10,
    // listItem: [],
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_HUMAN_REQUEST:
            return {
                ...state,
            }
        case types.GET_HUMAN_SUCCESS:
            return {
                ...state,

                activePage: action.payload.activePage,
                totalPage: action.payload.totalPage,
                humans: action.payload.res,
            }
        case types.GET_HUMAN_FAILURE:
            return {
                ...state,

            }
        case types.ADD_HUMAN_SUCCESS:

            return {
                ...state,
                humans: action.payload.res
            }
        case types.EDIT_HUMAN_SUCCESS:
            return {
                ...state,
                humans: state.humans.map(s => s.id === action.payload.id ? action.payload : s)
            }
        case types.DELETE_HUMAN_SUCCESS:
            return {
                ...state,
                humans: state.humans.filter(human => human.id !== action.payload)
            }
        default:
            return state;
    }
};
