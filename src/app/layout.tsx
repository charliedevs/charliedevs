import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import '../style/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '@/style/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

interface RootLayoutProps {
    children: React.ReactNode
}

const RootLayout: React.FC<Readonly<RootLayoutProps>> = (props: Readonly<RootLayoutProps>) => {
    return (
        <html lang='en'>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                <ThemeProvider theme={theme}>
                    <body className={inter.className}>{props.children}</body>
                </ThemeProvider>
            </AppRouterCacheProvider>
        </html>
    )
}

export default RootLayout