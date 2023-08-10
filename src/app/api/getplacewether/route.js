import { NextResponse } from "next/server"
import { connectDB } from "../../../lib/mongoose.js"
import axios from 'axios'

export async function POST(req, res) {
    try {

        console.log("started===============================")
        const { isError, error, dbCreated } = await connectDB()
        if (isError) return new Error(error)


        const request = await req.json()
        const { place, lat, lng } = request

        const isContainLocationAddress = lat != undefined || lng != undefined
        if (!isContainLocationAddress) {

            const { data: placeDetail } = await axios.get('https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname', {
                params: {
                    name: place
                },
                headers: {
                    'X-RapidAPI-Key': '9df9acd8bbmsh77d81e33675620ap16353ajsnc15a0b8d666b',
                    'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
                }
            })
            console.log('called place wether ')
        }


        const location = isContainLocationAddress ? `${lat} ${lng}` : `${placeDetail.lat} ${placeDetail.lon}`
        const placeName = isContainLocationAddress ? place : placeDetail.name

        const { data } = await axios.get('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast', {
            params: {
                'location': location,
                'timesteps': '1d',
                'units': 'metric'
            }
            ,
            headers: {
                'X-RapidAPI-Key': '6b1fbed52fmsh48fd7ec0809899ap1bfe1cjsn7507a7d3440f',
                'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
            }
        })

        console.log('==================================================')

        // return NextResponse.json({ placeName, wetherDetails: data })
        return NextResponse.json({ wetherDetails: { location: data.location,currentData:data.timelines.daily.slice(0,1), featureData: data.timelines.daily.slice(1), timesteps: '1d' } })
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ test: false, error: error.message })
    }
}

