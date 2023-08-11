'use client'
const WeekWether = ({ wetherDetails }) => {

    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuarday"]

    const a = ['', '', '', '', '']
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ')

    return (
        <div className=" xl:w-3/4">
            <div className="flex items-center  text-sm md:text-base">
                <span className="text-slate-600 dark:text-slate-300">Today</span>
                <span className="text-slate-600 dark:text-slate-300 ml-2 md:ml-5">Tomorrow</span>
                <span className="text-slate-950 dark:text-white ml-2 md:ml-5 ">Next 7 days</span>
                <div className="flex  rounded-full ml-auto bg-slate-200 dark:bg-stone-800 ">
                    <div className="px-1 text-center py-1 md:px-4  md:py-2 rounded-full  bg-sky-500 dark:text-slate-950  text-slate-50 ">Fore cast </div>
                    <div className="px-1 text-center py-1  md:px-4  ml-2 md:py-2 rounded-full   dark:text-slate-300 text-slate-600 ">Air quality</div>
                </div>
            </div>

            <div className="flex gap-3 flex-col md:gap-0 md:flex-row justify-between mt-5">
                {wetherDetails?.currentData?.map((elm, index) => {
                    return (
                        <div key={index} className="p-3 rounded-xl md:w-4/12 bg-sky-200 text-neutral-950 ">
                            <div className="flex justify-between">
                                <span className="font-medium">{week[new Date(elm.time).getDay()]}</span>
                                <span className="font-medium">{new Date(elm.time).toDateString()}</span>
                            </div>
                            <div className="flex mt-5 items-center justify-between">
                                <span className="text-slate-950 text-8xl font-semibold"> {Math.round(elm.values.temperatureMax)}<sup>o</sup></span>
                                <div><img src="/Asset/cloud1.png" alt="" className="w-24 aspect-square" /></div>
                            </div>
                            <div className="flex mt-5  items-end justify-between text-slate-700">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm ">Tmp Avg <span className="text-slate-950 font-medium">{Math.round(elm.values.temperatureAvg)}<sup>o</sup></span></span>
                                    <span className="text-sm ">Wind NE <span className="text-slate-950 font-medium">{Math.round(elm.values.windSpeedMax)} km/h</span></span>
                                    <span className="text-sm ">Pressure <span className="text-slate-950 font-medium">100MB</span></span>
                                    <span className="text-sm ">Humidity <span className="text-slate-950 font-medium">{Math.round(elm.values.humidityAvg)}%</span></span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm ">Sunrise <span className="text-slate-950 font-medium">{new Date(elm.values.sunriseTime).getHours()} {new Date(elm.values.sunriseTime).getMinutes()} AM</span></span>
                                    <span className="text-sm ">Sunset <span className="text-slate-950 font-medium">{new Date(elm.values.sunsetTime).getHours()} {new Date(elm.values.sunsetTime).getMinutes()} PM</span></span>
                                </div>
                            </div>
                        </div>)
                })}



                {wetherDetails?.featureData?.map((elm, index) => {
                    return (
                        <div key={index} className="flex py-1 text-lg md:flex-col md:py-3 md:text-2xl justify-between items-center px-5  rounded-3xl bg-slate-200 dark:bg-stone-800 text-neutral-950 dark:text-stone-50">
                            <span className=" text-center">{weekday[new Date(elm.time).getDay()]}</span>
                            <div className="w-16 aspect-square">
                                <img src="Asset/cloud.png" alt="" className="w-100" />
                            </div>
                            <span className=" font-medium">{Math.round(elm.values.temperatureMax)}<sup>o</sup></span>
                        </div>)
                })}

            </div>
        </div>
    )
}

export default WeekWether