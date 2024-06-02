import type { NextPage } from 'next'
import Image from 'next/image'

const About: NextPage = () => {
    return (
        <div
            id='aboutPage'
            className='container mx-auto my-auto flex flex-col items-center gap-16'
        >
            <div className='grid grid-cols-1 items-center gap-24 md:grid-cols-2 md:gap-12'>
                <Image
                    src='/images/self.jpg'
                    alt='AI Portrait of Charlie'
                    height={400}
                    width={400}
                    className='justify-self-center rounded-3xl outline outline-1 outline-slate-400/50 transition-all ease-in hover:outline-2'
                />
                <div id='aboutMe'>
                    <h1 className='text-3xl font-bold'>Charlie Davis</h1>
                    <p className='mt-4 text-pretty text-lg'>
                        Currently residing in New Mexico. I play <b>🎹 piano</b>{' '}
                        and <b>𝄢 electric bass</b> in my local community band.
                        Check out my musescore profile in the footer for music
                        I&apos;ve arranged.
                    </p>
                    <p className='mt-4 text-pretty text-lg'>
                        I work at{' '}
                        <a
                            href='https://fenwaygroup.com/'
                            target='_blank'
                            className='text-blue-300/90 transition-all ease-in hover:underline'
                        >
                            Fenway Group
                        </a>{' '}
                        as a Software Engineer leading the development of a
                        full-stack web application for Murphy USA Fuel Supply.
                    </p>
                </div>
            </div>
            <div className='my-2 flex w-full max-w-sm flex-col items-start gap-4 rounded-lg border border-secondary/10 p-8 text-start'>
                <h2 className='text-2xl font-bold tracking-wide'>
                    What is
                    <span className='px-1 font-mono text-blue-300/90'>
                        charliedevs
                    </span>
                    ?
                </h2>
                <p className='text-pretty text-lg'>
                    It&apos;s a play on my full name as well as a description of
                    what I do—I develop.
                </p>
                <p className='text-pretty text-xs'>
                    (I also just needed a domain name)
                </p>
            </div>
        </div>
    )
}

export default About
