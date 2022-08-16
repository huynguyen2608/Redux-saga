import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/handleGetUsers";

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
