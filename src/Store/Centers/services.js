import axios from "axios"

export const createCenterService = async ({ data }) => {
    return axios.post(`${process.env.REACT_APP_API_BASE_LINK}/centers/create-center`, { ...data }).then(res => {
        return res.data
    })
}

export const getAllCentersService = async () => {
    return axios.get(`${process.env.REACT_APP_API_BASE_LINK}/centers`).then(res => res.data)
}