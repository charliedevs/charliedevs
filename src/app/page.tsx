'use client'

import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <>
            <Box
                zIndex={10}
                maxWidth={850}
                width='100%'
                alignItems='center'
                justifyContent='space-between'
                display={{ xs: 'block', md: 'flex' }}
            >
                <Typography
                    paragraph
                    fontSize={13}
                    fontFamily='monospace'
                    position={{ xs: 'fixed', md: 'static' }}
                    left={0}
                    top={0}
                    display='flex'
                    width={{ xs: '100%', md: 'auto' }}
                    justifyContent='center'
                    borderRadius={{ xs: 0, md: 3 }}
                    sx={{
                        outline: { xs: 'none', md: `1px solid ${grey[500]}` },
                        backgroundColor: { xs: '#00000005', md: '#40404520' },
                        backdropFilter: 'blur(40px)',
                        pb: 3,
                        pt: 2.5,
                        p: { xs: undefined, md: 2 },
                    }}
                >
                    Get started by editing&nbsp;
                    <Typography component='code' fontWeight='bold'>
                        src/app/page.tsx
                    </Typography>
                </Typography>
                <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
                    <a
                        className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
                        href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        By{' '}
                        <Image
                            src='/vercel.svg'
                            alt='Vercel Logo'
                            className='dark:invert'
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    zIndex: -1,
                    transition: '1s',
                    left: '20%',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        height: { xs: '300px', sm: '320px', md: '340px', lg: '360px' },
                        width: { xs: '100vw', sm: '480px', md: '550px', lg: '680px' },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, #54126350, #3B126390)',
                        opacity: 0.1,
                        filter: 'blur(40px)',
                        zIndex: -1,
                        transition: '1s',
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        zIndex: -20,
                        height: { xs: '180px', sm: '180px', md: '190px', lg: '200px' },
                        width: { xs: '100px', sm: '240px', md: '290px', lg: '360px' },
                        right: '33%',
                        transform: 'translateX(33%)',
                        background: 'conic-gradient(from 0deg, #5B1263, #2F1263, #3B1263)',
                        opacity: 0.4,
                        filter: 'blur(40px)',
                        transition: '1s',
                    },
                }}
            ></Box>

            <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
                <a
                    href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Docs{' '}
                        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about Next.js features and API.
                    </p>
                </a>

                <a
                    href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
                    className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Learn{' '}
                        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Learn about Next.js in an interactive course with&nbsp;quizzes!
                    </p>
                </a>

                <a
                    href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Templates{' '}
                        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Explore starter templates for Next.js.
                    </p>
                </a>

                <a
                    href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                    className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Deploy{' '}
                        <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                </a>
            </div>
        </>
    )
}

export default Home
