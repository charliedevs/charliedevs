import type { NextPage } from 'next'

export const NotFound: NextPage = () => {
    return (
        <main className='flex min-h-[78vh] items-center justify-center'>
            <h1 className='text-lg'>
                <b>404</b> | This page could not be found.
            </h1>
        </main>
    )
}

export default NotFound
