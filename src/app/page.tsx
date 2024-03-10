import type { NextPage } from 'next'
import Link from 'next/link'
import { projects } from './_projects'

const Home: NextPage = () => {
    return (
        <main className='flex w-full flex-col items-center justify-between gap-14'>
            <div
                id='blurb'
                className='flex w-full flex-col gap-6 text-sm leading-7 md:text-base'
            >
                <h1 className='-mb-4 text-xs tracking-wide text-secondary'>
                    {'/ˈtʃɑɹ.li.dɛvz/'}
                </h1>
                <p>
                    Hi! I&apos;m <strong>Charlie</strong>, a developer/web
                    designer. I build cool software incorporating some of my
                    passions: <strong>music</strong>, <strong>language</strong>,{' '}
                    <strong>technology</strong>, and <strong>art</strong>.
                </p>
                <p>
                    Right now, I&apos;m working on a tool to{' '}
                    <strong>visualize sentence structure</strong> to help people
                    understand some of the complexities of English grammar.
                </p>
            </div>
            <div id='projects' className='flex w-full flex-col gap-5'>
                <h2 className='text-xl font-semibold'>Projects</h2>
                <div
                    id='project-links'
                    className='mb-32 grid h-fit gap-4 text-left transition-all sm:grid-cols-2  md:-ml-2 md:mb-0 md:w-full md:max-w-3xl md:grid-cols-3'
                >
                    {projects.map((p) => (
                        <div
                            key={p.title}
                            id={p.title.replace(' ', '-') + '-link'}
                            className=' from-violet-700/20 to-fuchsia-600/10 group h-fit rounded-lg px-2 py-3 outline-none transition-all ease-in hover:bg-gradient-to-br md:hover:outline-1'
                        >
                            <Link href={p.href} target='_blank'>
                                <h3 className='group-hover:text-gray-100 text-sm font-medium tracking-wide underline underline-offset-4 transition-all group-hover:underline-offset-2'>
                                    {p.title}
                                </h3>
                                <p className='text-gray-100 mt-2 max-w-[40ch] text-sm opacity-80 transition-all group-hover:opacity-90 md:group-hover:mt-3'>
                                    {p.description}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Home
