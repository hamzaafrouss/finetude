import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import { createCenterFailed, createCenterSuccess, getAllCentersFailed, getAllCentersSuccess } from "./actions"
import { createCenterService, getAllCentersService } from "./services"
import { CREATE_CENTER, GET_ALL_CENTERS } from "./actions-definitions"

function* createCenterSaga({ payload: { data } }) {
    console.log("===============",data)
    try {
        const response = yield call(createCenterService, { data })

        yield put(createCenterSuccess(response))
    } catch (error) {
        yield put(createCenterFailed(error))

    }
}

function* getAllCentersSaga() {
    console.log("saga")
    try {
        const response = yield call(getAllCentersService)
        console.log("response", response);

        yield put(getAllCentersSuccess(response))
    } catch (error) {
        yield put(getAllCentersFailed(error))

    }
}

function* watchCreateCenter() {
    yield takeEvery(CREATE_CENTER, createCenterSaga)
}

function* watchGetAllCenters() {
    yield takeEvery(GET_ALL_CENTERS, getAllCentersSaga)
}

function* centerSaga() {
    yield all([fork(watchCreateCenter), fork(watchGetAllCenters)])
}

export default centerSaga