import { combineReducers } from 'redux'
import commonReducer from './commonReducer';
import HumanReducer from "./HumanReducer";
const rootReducer = combineReducers({
    demo: HumanReducer,
    commonData: commonReducer,
});
export default rootReducer;
