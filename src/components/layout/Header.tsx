'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
    const pathname = usePathname()
    const isLinkActive = (href: string) => pathname === href

    const activeClasses = 'text-primary'
    const inactiveClasses = 'text-secondary'
    return (
        <header className='mt-4 flex h-12 w-full items-start justify-between transition-all md:mt-8 md:h-20'>
            <Link href='/'>
                <p className='text-secondary'>charliedevs</p>
            </Link>
            <div className='ml-4 flex gap-4'>
                <Link href='/blog'>
                    <div
                        id='blogLink'
                        className={
                            isLinkActive('/blog')
                                ? activeClasses
                                : inactiveClasses
                        }
                    >
                        blog
                    </div>
                </Link>
                <Link href='/about'>
                    <div
                        id='aboutLink'
                        className={
                            isLinkActive('/about')
                                ? activeClasses
                                : inactiveClasses
                        }
                    >
                        about
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
