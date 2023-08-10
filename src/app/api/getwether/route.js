import { NextResponse } from "next/server"
import { connectDB } from "../../../lib/mongoose.js"
import axios from 'axios'

export async function GET(req, res) {
    try {
        const { isError, error, dbCreated } = await connectDB()
        if (isError) return new Error(error)

        const { data } = await axios.get('https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast', {
            params: {
                'location': '12.912283909453993, 74.85378021362361',
                'timesteps': '1d',
                'units': 'metric'
            }
            ,
            headers: {
                'X-RapidAPI-Key': '6b1fbed52fmsh48fd7ec0809899ap1bfe1cjsn7507a7d3440f',
                'X-RapidAPI-Host': 'tomorrow-io1.p.rapidapi.com'
            }
        })

        // return NextResponse.json({ wetherDetails: data })
        return NextResponse.json({ wetherDetails: { location: data.location,currentData:data.timelines.daily.slice(0,1), featureData: data.timelines.daily.slice(1), timesteps: '1d' } })
    } catch (error) {
        // console.log(error)
        return NextResponse.json({ test: false, error: error.message })
    }
}