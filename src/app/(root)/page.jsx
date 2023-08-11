'use client'

import { getUserData } from "../serverAction/User"
import WeekWether from "@/components/Wether/WeekWether"
import RainDetail from "@/components/Wether/RainDetail"
import GlobalMap from "@/components/Wether/GlobalMap"
import CitiesWether from "@/components/Wether/CitiesWether"
import { useEffect, useState } from "react"


const Homepage = () => {
    const [wetherDetails, setWetherDetailst] = useState(undefined)


    const getWetherHandler = async () => {
        const { wetherDetails: data } = await getUserData()
        setWetherDetailst(data)
    }
    useEffect( () => {
        getWetherHandler()
    }, [])

    return (
        <div>
            <div className="flex flex-col xl:flex-row justify-between gap-16 mt-10">
                <WeekWether wetherDetails={wetherDetails} />
                <RainDetail wetherDetails={wetherDetails} />
            </div>

            <div className="relative flex flex-col xl:flex-row  my-10 ">
                <GlobalMap />
                <CitiesWether />
            </div>
        </div>
    )

}

export default Homepage
