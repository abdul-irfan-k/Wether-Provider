import WeekWether from "@/components/Wether/WeekWether"
import RainDetail from "@/components/Wether/RainDetail"
import GlobalMap from "@/components/Wether/GlobalMap"
import CitiesWether from "@/components/Wether/CitiesWether"
import { getPlaceWether } from "@/app/serverAction/User"


const PlaceWetherPage = async ({ searchParams }) => {
    // const [wetherDetails, setWetherDetails] = useState(undefined)
    const { place, lat, lng } = searchParams


    // const getWetherHandler = async () => {
    //     const { wetherDetails: data } = await getPlaceWether(place, lat, lng)

    //     setWetherDetails(data)
    // }
    // useEffect(() => {
    //      getWetherHandler()
    // }, [place])

    const { wetherDetails } = await getPlaceWether(place, lat, lng)

    return (
        <div>
            <div className="flex justify-between gap-16 mt-10">
                <WeekWether wetherDetails={wetherDetails} />
                <RainDetail />
            </div>

            <div className="relative flex my-10">
                <GlobalMap />
                <CitiesWether />
            </div>
        </div>
    )

}

export default PlaceWetherPage
