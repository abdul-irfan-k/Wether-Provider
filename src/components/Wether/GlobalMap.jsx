'use client'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'

const GlobalMap = () => {
    return (
        <div className="w-3/4 h-full pr-8" >
            <div className="flex items-center justify-between">
                <span className="text-xl font-medium text-stone-950 dark:text-stone-50">Next 7 days</span>
                <div className="px-4  py-2 rounded-full  ml-2 dark:text-slate-300 text-slate-600">View wide</div>
            </div>
            <div className="block   mt-5 w-full h-full bg-slate-100" style={{ aspectRatio: '5/2.5' }}>
                <VectorMap map={worldMill} containerStyle={{ width: '600px', height: '300px' }} />
            </div>
        </div>  
    )
}

export default GlobalMap