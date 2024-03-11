import Link from 'next/link'

export const Header = () => {
    return (
        <header className='mt-4 flex h-12 w-full items-start justify-between transition-all md:mt-8 md:h-20'>
            <Link href='/'>
                <p className='text-secondary'>charliedevs</p>
            </Link>
            <div className='ml-4 flex gap-4'>
                <Link href='/blog'>
                    <div id='blogLink' className='text-secondary'>
                        blog
                    </div>
                </Link>
                <Link href='/about'>
                    <div id='aboutLink' className='text-secondary'>
                        about
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header
