import { all, call, fork, put,  takeEvery } from "redux-saga/effects"
import { createFormationFailed, createFormationSuccess, getAllFormationsFailed, getAllFormationsSuccess, archivedFormationsFailed, archivedFormationsSuccess } from "./actions"
import { createFormationService, getAllFormationsService, setFormationArchived } from "./services"
import { CREATE_FORMATION, GET_ALL_FORMATIONS, SET_FORMATION_ARCHIVED } from "./actions-definitions"

function* createFormationSaga({ payload: { data } }) {
    console.log('saga', data)
    try {
        const response = yield call(createFormationService, { data })

        yield put(createFormationSuccess(response))
    } catch (error) {
        yield put(createFormationFailed(error))

    }
}
function* archivedFormationSaga({payload} ) {
    
    try {
        const response = yield call(setFormationArchived, { data:payload })

        yield put(archivedFormationsSuccess(response))
    } catch (error) {
        yield put(archivedFormationsFailed(error))

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
function* watchSetArchivedFormation() {
    yield takeEvery(SET_FORMATION_ARCHIVED, archivedFormationSaga)
}


function* formationSaga() {
    yield all([fork(watchCreateFormation), fork(watchGetAllFormations), fork(watchSetArchivedFormation)])
}

export default formationSaga