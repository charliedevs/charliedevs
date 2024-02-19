import { Box } from '@mui/material'
import Image from 'next/image'
import selfImage from '../../../public/selfImage.jpg'
import ImageBackdrop from './ImageBackdrop'

const SelfImage = () => {
    return (
        <ImageBackdrop>
            <Box
                borderRadius='50%'
                sx={{ overflow: 'hidden', opacity: 0.9, outline: '3px solid #88888850' }}
            >
                <Image
                    src={selfImage}
                    alt='Picture of the author'
                    width={250}
                    height={250}
                    placeholder='blur'
                />
            </Box>
        </ImageBackdrop>
    )
}

export default SelfImage
