import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <main className='flex w-full flex-col items-center justify-between gap-6'>
            <div id='about' className='flex w-full flex-col gap-4'>
                <p className='text-secondary text-sm'>{'/ˈtʃɑɹli ˈdeɪvɪs/'}</p>
            </div>
        </main>
    )
}

export default Home
