import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'charliedevs',
    description: 'Personal Website for Charlie Davis',
}
interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<Readonly<RootLayoutProps>> = (
    props: Readonly<RootLayoutProps>
) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <main>{props.children}</main>
            </body>
        </html>
    )
}

export default RootLayout
