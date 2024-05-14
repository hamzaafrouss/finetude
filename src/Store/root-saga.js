import { all } from "redux-saga/effects"
import formationSaga from "./Formations/saga"
import centerSaga from "./Centers/saga"
import reservationSaga from "./Reservation/saga"

export default function* rootSaga(getState) {
    yield all([formationSaga(),centerSaga(),reservationSaga()])
}
