import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import { createReservationFailed, createReservationSuccess, getAllReservationsFailed, getAllReservationSuccess } from "./actions"
import { createReservationService, deleteReservationService, editReservationService, getAllReservationsService } from "./services"
import { CREATE_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION, GET_ALL_RESERVATIONS, deleteReservationFailed, deleteReservationSuccess, editReservationFailed, editReservationSuccess } from "./actions-definitions"

function* createReservationSaga({ payload: { formData } }) {
    try {
        const response = yield call(createReservationService, { formData })

        yield put(createReservationSuccess(response))
    } catch (error) {
        yield put(createReservationFailed(error))

    }
}

function* editReservationSaga({ payload: { formData } }) {
    try {
        const response = yield call(editReservationService, { formData })

        yield put(editReservationSuccess(response))
    } catch (error) {
        yield put(editReservationFailed(error))

    }
}

function* deleteReservationSaga({ payload: { reservationId } }) {
    console.log("saga", reservationId)
    try {
        const response = yield call(deleteReservationService, { reservationId })

        console.log("res", response)
        yield put(deleteReservationSuccess(response.reservationId))
    } catch (error) {
        yield put(deleteReservationFailed(error))

    }
}

function* getAllReservationsSaga() {
    console.log("saga")
    try {
        const response = yield call(getAllReservationsService)
        console.log("response", response.reservations);

        yield put(getAllReservationSuccess(response.reservations))
    } catch (error) {
        yield put(getAllReservationsFailed(error))

    }
}

function* watchCreateReservation() {
    yield takeEvery(CREATE_RESERVATION, createReservationSaga)
}
function* watchEditReservation() {
    yield takeEvery(EDIT_RESERVATION, editReservationSaga)
}

function* watchDeleteReservation() {
    yield takeEvery(DELETE_RESERVATION, deleteReservationSaga)
}

function* watchGetAllReservations() {
    yield takeEvery(GET_ALL_RESERVATIONS, getAllReservationsSaga)
}

function* reservationSaga() {
    yield all([
        fork(watchCreateReservation),
        fork(watchGetAllReservations),
        fork(watchDeleteReservation),
        fork(watchEditReservation),
    ])
}

export default reservationSaga