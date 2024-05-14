import { CREATE_FORMATION, CREATE_FORMATION_FAILED, CREATE_FORMATION_SUCCESS, GET_ALL_FORMATIONS, GET_ALL_FORMATIONS_FAILED, GET_ALL_FORMATIONS_SUCCESS } from "./actions-definitions";

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
    // Perform asynchronous operation to archive formation (e.g., make API call)
    return async (dispatch, getState) => {
        try {
            // Here you can dispatch an action to archive the formation
            // For example, you can dispatch an action to update the formation status to archived
            // Dispatch your action here...
        } catch (error) {
            console.error('Error archiving formation:', error);
            // Handle error if needed
        }
    };
};
