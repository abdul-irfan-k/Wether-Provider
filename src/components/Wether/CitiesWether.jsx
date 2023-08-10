const CitiesWether = () => {
    const a = ['', '', '', '', '']
    return (
        <div className="absolute w-1/4 flex flex-col top-0 right-0 overflow-y-hidden h-full pl-6 ">
            <div className="flex justify-between py-2 items-center">
                <div className="text-xl font-medium text-stone-950 dark:text-stone-50" >Other large cities </div>
                <div className="text-base text-slate-600 dark:text-slate-300">Show all </div>
            </div>
            <div className="flex flex-col mt-5 gap-5 overflow-y-auto pr-3 wetherlist" >
                {a.map((elm, index) => {
                    return <div key={index} className="flex p-2 justify-between items-center px-5 py-3 rounded-3xl bg-slate-200 dark:bg-stone-800 text-neutral-950 dark:text-stone-50">
                        <div className="flex flex-col justify-between">
                            <span className="text-base text-slate-600 dark:text-slate-300">us</span>
                            <span className="text-xl font-medium text-stone-950 dark:text-stone-50">Californias</span>
                            <span className="text-base text-slate-600 dark:text-slate-100 font-normal">Cloudy</span>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="w-16 aspect-square">
                                <img src="Asset/cloud.png" alt="" className="w-100" />
                            </div>
                            <span className="text-xl font-medium text-stone-950 dark:text-stone-50">18<sup>o</sup></span>
                        </div>
                    </div>
                })
                }

            </div>
        </div>
    )
}

export default CitiesWether