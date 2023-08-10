'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import axios from 'axios'
import { getPlace } from '@/app/serverAction/User'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const SearchPlace = () => {
    const navigate = useRouter()
    const [placeName, setPlaceName] = useState('')
    const [placeDetail, setPlaceDetail] = useState(null)

    const isSearchContainText = placeName.length > 0

    const searchInputHandler = async () => {
        const { data } = await axios.post('http://localhost:3000/api/getplacedetail', {
            placeName
        })
        console.log('data', typeof data, data.results)
        setPlaceDetail([...data.results])
    }

    return (
        <>
            <div className='flex-col relative mx-auto w-1/3 z-20'>
                <div className='relative  '>
                    <div className='flex bg-slate-200 dark:bg-stone-800   rounded-full mx-auto'>
                        <div className={`flex  justify-center py-3 rounded-l-full pl-6 pr-3 ${isSearchContainText ? ' bg-sky-500' : ''}`} onClick={searchInputHandler}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-sm ' />
                        </div>
                        <input type="text" placeholder='search city' onChange={(e) => setPlaceName(e.target.value)} className='ml-1 bg-inherit border-none  hover:border-none focus:outline-none' />
                    </div>

                </div>
                {placeDetail != null && placeDetail?.map((elm, index) => {
                    { console.log(elm[0]) }
                    return <div key={index} className='absolute bg-red-500   w-full ' style={{ top: 'calc(100% + 1rem)' }}>
                        <div className='px-3 py-3' onClick={() => {
                            navigate.push(`/placewether?place=${elm.name}&lat=${elm.location.lat}&lng=${elm.location.lng}`)
                            setPlaceDetail(null)
                        }} >
                            {elm.name}
                        </div>
                    </div>
                })
                }
            </div>

            {placeDetail != null && <div className='z-10 fixed top-0 left-0 w-screen h-screen backdrop-blur-sm '></div>}
        </>
    )
}

export default SearchPlace