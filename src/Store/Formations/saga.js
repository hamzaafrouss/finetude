import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import { createFormationFailed, createFormationSuccess, getAllFormationsFailed, getAllFormationsSuccess } from "./actions"
import { createFormationService, getAllFormationsService } from "./services"
import { CREATE_FORMATION, GET_ALL_FORMATIONS } from "./actions-definitions"

function* createFormationSaga({ payload: { data } }) {
    console.log('saga', data)
    try {
        const response = yield call(createFormationService, { data })

        yield put(createFormationSuccess(response))
    } catch (error) {
        yield put(createFormationFailed(error))

    }
}

function* getAllFormationsSaga() {
    

    try {
        const response = yield call(getAllFormationsService)
        console.log("response", response);

        yield put(getAllFormationsSuccess(response))
    } catch (error) {
        yield put(getAllFormationsFailed(error))

    }
}

function* watchCreateFormation() {
    yield takeEvery(CREATE_FORMATION, createFormationSaga)
}

function* watchGetAllFormations() {
    yield takeEvery(GET_ALL_FORMATIONS, getAllFormationsSaga)
}

function* formationSaga() {
    yield all([fork(watchCreateFormation), fork(watchGetAllFormations)])
}

export default formationSaga