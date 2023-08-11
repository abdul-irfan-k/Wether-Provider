import ThemesProvider from '../ThemeProvider'
import '.././globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '@/components/Navbar';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whether App',
  description: 'Whether Information App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <ThemesProvider>
        <div className={`${inter.className} bg-stone-50 dark:bg-stone-950`} style={{ minHeight: '100vh' }}>
          <div className='p-1 md:p-5'>
            <Navbar />
            {children}
          </div>
        </div>
        </ThemesProvider>
      </body>
    </html >
  )
}
