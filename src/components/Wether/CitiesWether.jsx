const CitiesWether = () => {
    const a = ['', '', '', '', '']
    
    console.log('testtt')
    return (
        <div className="absolute w-full top-full pb-2 xl:pb-0 xl:h-full xl:top-0 xl:right-0 xl:pl-6  xl:w-1/4 flex flex-col  overflow-y-hidden  ">
            <div className="flex justify-between py-2 items-center">
                <div className="text-xl font-medium text-stone-950 dark:text-stone-50" >Other large cities </div>
                <div className="text-base text-slate-600 dark:text-slate-300">Show all </div>
            </div>
            <div className="px-2 xl:pl-0  xl:overflow-y-auto  xl:pr-3 flex flex-col mt-5 gap-5   wetherlist" >
                {a.map((elm, index) => {
                    return <div key={index} className=" flex p-2 justify-between items-center px-5 py-3 rounded-3xl  bg-slate-200 dark:bg-stone-800   text-neutral-950 dark:text-stone-50">
                        <div className="flex flex-col justify-between">
                            <span className="text-base text-slate-600 dark:text-slate-300">us</span>
                            <span className="text-xl font-medium text-stone-950 dark:text-stone-50">Californias</span>
                            <span className="text-base text-slate-600 dark:text-slate-100 font-normal">Cloudy</span>
                        </div>
                        <div className="my-auto">
                            <span className="text-2xl font-medium text-stone-950 dark:text-stone-50">18<sup>o</sup></span>
                        </div>
                    </div>
                })
                }

            </div>
        </div>
    )
}

export default CitiesWether