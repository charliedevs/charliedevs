export const Header = () => {
    return (
        <header className='mt-4 flex w-full items-center justify-between md:mt-8'>
            <p className='text-secondary'>charliedevs</p>
            <div className='flex gap-4'>
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
