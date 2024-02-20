'use client'

import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import type { NextPage } from 'next'
import SelfImage from '@/components/Images/SelfImage'
import LinkWithDescription from '@/components/Links/LinkWithDescription'

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
            </Box>

            <SelfImage />

            <Grid
                container
                spacing={2}
                width={{ md: '100%' }}
                maxWidth={{ md: 1500 }}
                mt={2}
                mb={{ xs: 28, md: 0 }}
            >
                <Grid item xs={12} md={3}>
                    <LinkWithDescription
                        link='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        title='Docs'
                        description='Find in-depth information about Next.js features and API.'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <LinkWithDescription
                        link='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        title='Learn'
                        description='Learn about Next.js in an interactive course with quizzes!'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <LinkWithDescription
                        link='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        title='Templates'
                        description='Explore starter templates for Next.js.'
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <LinkWithDescription
                        link='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
                        title='Deploy'
                        description='Instantly deploy your Next.js site to a shareable URL with Vercel.'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Home
