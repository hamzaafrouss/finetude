import axios from "axios"

export const createFormationService = async ({ data }) => {
    console.log('service', data)
    return axios.post(`${process.env.REACT_APP_API_BASE_LINK}/formations/create-formation`, { ...data }).then(res => {
        return res.data
    })
}

export const getAllFormationsService = async () => {
    return axios.get(`${process.env.REACT_APP_API_BASE_LINK}/formations`).then(res => res.data)
}