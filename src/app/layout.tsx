import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/style/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

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
        <html lang='en' className={roboto.className}>
            <body className='mx-auto min-h-screen max-w-2xl bg-purple px-4 py-1 text-primary 2xl:max-w-3xl'>
                <Header />
                {props.children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
