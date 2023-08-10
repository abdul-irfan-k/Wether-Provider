import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBorderAll, faBell, faLocationDot, faMagnifyingGlass, faGear, faMoon, faUser } from '@fortawesome/free-solid-svg-icons'
import ThemeSwitch from './ThemeSwitch'
import SearchPlace from './Wether/SearchPlace'


const Navbar = () => {
    return (
        <div className="flex items-center">
            <div className="flex rounded-full bg-slate-200 dark:bg-stone-800 items-center justify-center w-14 aspect-square" >
                <FontAwesomeIcon icon={faBorderAll} className='text-xl' />
            </div>
            <div className="flex rounded-full bg-slate-200 dark:bg-stone-800 items-center justify-center  w-14 aspect-square ml-5" >
                <FontAwesomeIcon icon={faBell} className='text-xl' />
            </div>

            <div className="flex ml-5 items-center">
                <span className='text-slate-950 dark:text-white'>
                    <FontAwesomeIcon icon={faLocationDot} className='text-sm' /> Mangalore,
                </span>
                <span className='text-slate-600 dark:text-slate-300'>India</span>
            </div>

         <SearchPlace />

            <div className='flex items-center gap-3'>
                <div>
                    <FontAwesomeIcon icon={faGear} className='text-xl' />
                </div>
                <ThemeSwitch />
                <div className='flex rounded-full bg-orange-200 items-center justify-center w-14 aspect-square'>
                    <FontAwesomeIcon icon={faUser} className='text-2xl text-slate-950' />
                </div>

            </div>
        </div >
    )
}

export default Navbar