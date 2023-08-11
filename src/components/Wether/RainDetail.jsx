import BarChart from './BarChart'
const RainDetail = () => {
    return (
        <div className="flex flex-col xl:w-1/4 ">
            <span className="text-slate-950 dark:text-white py-2  xl:text-base xl:font-normal  text-xl font-medium">Chance of Rain</span>
            <BarChart />
        </div>
    )
}

export default RainDetail