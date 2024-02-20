import { Box } from '@mui/material'
import { type PropsWithChildren } from 'react'

interface ImageBackdropProps {
    left?: string
}

const ImageBackdrop = ({ left = '28%', children }: PropsWithChildren<ImageBackdropProps>) => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                zIndex: -1,
                transition: '1s',
                left: { xs: '0%', md: left },
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
        >
            {children}
        </Box>
    )
}

export default ImageBackdrop
