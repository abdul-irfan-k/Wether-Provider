'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <div className='flex rounded-full bg-sky-200 items-center justify-center w-14 aspect-square' onClick={() => setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')}>
            <FontAwesomeIcon icon={faMoon} className='text-2xl text-slate-950' />
        </div>
    )
}

export default ThemeSwitch