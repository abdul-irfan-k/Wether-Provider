// 'use client'
import Navbar from "@/components/Navbar"
import WeekWether from "@/components/Wether/WeekWether"
import RainDetail from "@/components/Wether/RainDetail"
import GlobalMap from "@/components/Wether/GlobalMap"
import CitiesWether from "@/components/Wether/CitiesWether"
import { getPlaceWether } from "@/app/serverAction/User"
// import { useEffect, useState } from "react"


const PlaceWetherPage = async ({ searchParams }) => {
    // const [wetherDetails, setWetherDetails] = useState(undefined)
    // useEffect(async () => {
    //     const { place, lat, lng } = searchParams
    //     const res = await getPlaceWether(place, lat, lng)
    //     console.log(res)
    // }, [])

    const { place, lat, lng } = searchParams
    const { wetherDetails } = await getPlaceWether(place, lat, lng)

    
    return (
        <div>
            <Navbar />
            <div className="flex justify-between gap-16 mt-10">
                <WeekWether wetherDetails={wetherDetails} />
                <RainDetail wetherDetails={wetherDetails} />
            </div>

            <div className="relative flex my-10">
                <GlobalMap />
                <CitiesWether />
            </div>
        </div>
    )

}

export default PlaceWetherPage
