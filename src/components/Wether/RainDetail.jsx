
import BarChart from './BarChart'
const RainDetail = () => {
    return (
        <div className="flex flex-col w-1/4 ">
            <span className="text-slate-950 dark:text-white py-2 ">Chance of Rain</span>
            <BarChart />
        </div>
    )
}

export default RainDetail