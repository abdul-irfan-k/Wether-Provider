'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <div className='flex w-12 md:w-14 rounded-full bg-sky-200 items-center justify-center  aspect-square' onClick={() => setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')}>
            <FontAwesomeIcon icon={faMoon} className='text-xl md:text-2xl text-slate-950' />
        </div>
    )
}

export default ThemeSwitch