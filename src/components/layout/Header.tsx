export const Header = () => {
    return (
        <header className='mt-4 flex h-10 w-full items-start justify-between md:mt-8 md:h-20'>
            <p className='text-secondary'>charliedevs</p>
            <div className='ml-4 flex gap-4'>
                <div id='blogLink' className='text-secondary'>
                    blog
                </div>
                <div id='aboutLink' className='text-secondary'>
                    about
                </div>
            </div>
        </header>
    )
}

export default Header
