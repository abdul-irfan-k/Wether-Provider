import { getUserData } from "../serverAction/User"
import Navbar from "@/components/Navbar"
import WeekWether from "@/components/Wether/WeekWether"
import RainDetail from "@/components/Wether/RainDetail"
import GlobalMap from "@/components/Wether/GlobalMap"
import CitiesWether from "@/components/Wether/CitiesWether"


const Homepage = async () => {
    const { wetherDetails } = await getUserData()

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

export default Homepage
