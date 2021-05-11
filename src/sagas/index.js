import { all } from 'redux-saga/effects'
import HumanSaga from "./HumanSaga";
function* rootSaga() {
  yield all([
    ...HumanSaga
  ]);
}
export default rootSaga;
