import { ArrowForwardRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

interface LinkWithDescriptionProps {
    link: string
    title: string
    description: string
}

const LinkWithDescription = ({ link, title, description }: LinkWithDescriptionProps) => {
    return (
        <Box
            id='linkWithDescription'
            maxWidth={{ md: 300 }}
            height={{ md: 190 }}
            p={2}
            sx={{
                outline: '1px solid #AAAAAA00',
                borderRadius: 2.5,
                transition: '0.2s',
                transitionProperty: 'background-color outline-color',
                '&:hover': {
                    outline: '1px solid #AAAAAA40',
                    bgcolor: '#33333330',
                    cursor: 'pointer',
                    '#arrow': {
                        transform: 'translateX(4px)',
                    },
                },
            }}
        >
            <Link href={link} target='_blank'>
                <Box
                    id='title'
                    display='flex'
                    justifyContent={{ xs: 'center', md: 'start' }}
                    mb={{ xs: 1, md: 3 }}
                >
                    <Typography fontSize={26} fontWeight='medium'>
                        {title}
                    </Typography>
                    <ArrowForwardRounded
                        id='arrow'
                        sx={{
                            transition: '0.2s',
                            fontSize: 27,
                            ml: 1,
                            mt: 0.7,
                        }}
                    />
                </Box>
                <Box id='description' display='flex' justifyContent={{ xs: 'center', md: 'start' }}>
                    <Typography fontSize={15} sx={{ opacity: 0.5 }}>
                        {description}
                    </Typography>
                </Box>
            </Link>
        </Box>
    )
}

export default LinkWithDescription
