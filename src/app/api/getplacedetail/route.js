import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const request = await req.json()
    const { placeName } = request

    const { data } = await axios.get('https://trueway-places.p.rapidapi.com/FindPlaceByText', {
        params: {
            text:placeName,
            language: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '9df9acd8bbmsh77d81e33675620ap16353ajsnc15a0b8d666b',
            'X-RapidAPI-Host': 'trueway-places.p.rapidapi.com'
        }
    })
    return NextResponse.json(data)
}