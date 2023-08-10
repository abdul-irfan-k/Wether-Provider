import ThemesProvider from '../ThemeProvider'
import '.././globals.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import { WetherProvider } from '../WetherProvider';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Whether App',
  description: 'Whether Information App',
}

export default function RootLayout({ children,searchParams }) {

  console.log('search pararms',searchParams)
  return (
    <html lang="en">

      <body suppressHydrationWarning={true}>
        <WetherProvider>
          <ThemesProvider>
            <div className={`${inter.className} bg-stone-50 dark:bg-stone-950`} style={{ minHeight: '100vh' }}>
              <div className='p-5'>

                {children}
              </div>
            </div>
          </ThemesProvider>
        </WetherProvider>
      </body>
    </html >
  )
}
