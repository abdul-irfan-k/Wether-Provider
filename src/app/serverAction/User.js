'use server'
import axios from "axios"

export const getUserData = async () => {
    const { data } = await axios.get('http://localhost:3000/api/getwether')
    return { wetherDetails: data.wetherDetails }
}

export const getPlaceWether = async (place, lat, lng) => {
    const { data } = await axios.post('http://localhost:3000/api/getplacewether', {
        place: 'uppinangady',
        lat, lng
    })
    return { wetherDetails: data.wetherDetails }
}


export const getPlace = async (placeName) => {
    const { data } = await axios.post('http://localhost:3000/api/getplacedetail', {
        placeName
    })
    return { data }
}