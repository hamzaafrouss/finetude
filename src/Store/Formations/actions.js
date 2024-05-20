import { CREATE_FORMATION, CREATE_FORMATION_FAILED, CREATE_FORMATION_SUCCESS, GET_ALL_FORMATIONS, GET_ALL_FORMATIONS_FAILED, GET_ALL_FORMATIONS_SUCCESS , SET_FORMATION_ARCHIVED, SET_ARCHIVED_FAILED, SET_ARCHIVED_SUCCESS} from "./actions-definitions";

export const createFormation = (data) => {
    console.log('action', data)
    return ({
    type: CREATE_FORMATION,
    payload: { data }
})}

export const createFormationSuccess = (formations) => ({
    type: CREATE_FORMATION_SUCCESS,
    payload: formations
})

export const createFormationFailed = (error) => ({
    type: CREATE_FORMATION_FAILED,
    payload: error
})


export const getAllFormations = () => ({
    type: GET_ALL_FORMATIONS,
    payload: null
})

export const getAllFormationsSuccess = ({ formations }) => {
    return ({
        type: GET_ALL_FORMATIONS_SUCCESS,
        payload: formations
    })
}

export const getAllFormationsFailed = (error) => ({
    type: GET_ALL_FORMATIONS_FAILED,
    payload: error
})
export const archiveFormation = (formationId) => {
    return ({
    type: SET_FORMATION_ARCHIVED,
    payload: formationId
    })
};
export const archivedFormationsFailed = (error) => ({
    type: SET_ARCHIVED_FAILED,
    payload: error
})
export const archivedFormationsSuccess = () => {
    return ({
        type: SET_ARCHIVED_SUCCESS,
        payload: true
    })
}
