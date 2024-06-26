import { IconExternalLink } from '@tabler/icons-react'
import type { NextPage } from 'next'
import { projects } from './_projects'

const Home: NextPage = () => {
    return (
        <main className='flex w-full flex-col items-center justify-between gap-24 transition-all md:gap-14'>
            <div id='blurb' className='flex w-full flex-col gap-4 leading-7'>
                <p
                    title='IPA phonemic transcription of charliedevs'
                    className='-mb-3 text-xs tracking-wide text-secondary'
                >
                    {'/ˈtʃɑɹ.li.dɛvz/'}
                </p>
                <p className='text-pretty'>
                    Hey there—I&apos;m <b>Charlie</b>! I&apos;m a software
                    developer and web designer. I build apps that combine my
                    love for <b>music</b>, <b>language</b>, and{' '}
                    <b>technology</b> with a focus on responsive, user-centered
                    design.
                </p>
                <p className='text-pretty'>
                    At the moment, I&apos;m working on a{' '}
                    <b>conlang dictionary</b> web app where you can construct
                    and manage your own language and easily share it with others
                    on any device.
                </p>
            </div>
            <div id='projects' className='min-h-44 w-full py-14'>
                <h2 className='mb-6 text-xl font-semibold md:mb-8'>Projects</h2>
                <div
                    id='project-links'
                    className='grid h-fit grid-cols-1 justify-between gap-3 text-left sm:grid-cols-2 md:w-full md:max-w-3xl md:grid-cols-3'
                >
                    {projects.map((p) => (
                        <a
                            key={p.title}
                            id={p.title.replace(' ', '-') + '-link'}
                            href={p.href}
                            target='_blank'
                            title='Open GitHub Page'
                        >
                            <div className='group -mt-3  h-fit min-h-24 rounded-lg from-fuchsia-500/15 to-fuchsia-400/10 px-2 py-3 outline-none transition-all ease-in hover:bg-gradient-to-br md:px-4 md:hover:min-h-[7.5rem]'>
                                <h3 className='mr-1 flex justify-between text-nowrap align-middle font-medium tracking-wide underline underline-offset-4 transition-all group-hover:text-gray-100 group-hover:underline-offset-2'>
                                    {p.title}
                                    <IconExternalLink
                                        size={16}
                                        className='mr-4 mt-0.5 opacity-0 transition-all ease-in group-hover:mr-0 group-hover:opacity-70'
                                    />
                                </h3>
                                <p className='mt-2 max-w-[40ch] text-sm text-gray-100 opacity-80 transition-all group-hover:opacity-90 md:group-hover:mt-3'>
                                    {p.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/* <div id='blog-posts' className='min-h-44 w-full'>
                <h2 className='mb-6 text-xl font-semibold md:mb-8'>Blog</h2>
                <div id='blog-links' className='grid flex-col gap-6'>
                    {[
                        { title: 'This is a Blog Post', date: '2024-03-10' },
                        {
                            title: 'This is Another Blog Post',
                            date: '2024-03-08',
                        },
                        {
                            title: 'Yet Another Blog Post',
                            date: '2024-02-27',
                        },
                    ].map((b) => (
                        <div key={b.title} className='flex justify-between'>
                            <Link href='/'>
                                <p className='underline hover:decoration-slate-400'>
                                    {b.title}
                                </p>
                            </Link>
                            <p className='ml-4'>
                                {dayjs(b.date).format('MMM D, YYYY')}
                            </p>
                        </div>
                    ))}
                    <div>
                        <Link href='/blog'>
                            <p className='underline hover:decoration-slate-400'>
                                More...
                            </p>
                        </Link>
                    </div>
                </div>
            </div> */}
        </main>
    )
}

export default Home
