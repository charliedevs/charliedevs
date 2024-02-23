'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const backgroundColor = 'rgb(40, 30, 55)'
export const backgroundColor2 = 'rgb(18, 12, 30)'

export const darkMagenta = '#5B1263'
export const darkIndigo = '#2F1263'

export const darkPurple = '#3B1263'
export const purple = '#7023BE'
export const palePurple = '#AD75E6'

export const darkOrange = '#AC2E20'
export const orange = '#DC4D3D'
export const paleOrange = '#E37164'

export const darkPink = '#9E1A51'
export const pink = '#E2508D'
export const palePink = '#F4BBD3'

export const darkTeal = '#3A777E'
export const teal = '#65B1B8'
export const paleTeal = '#A0CFD3'

export const darkYellow = '#D7BE33'
export const yellow = '#E3D26F'
export const paleYellow = '#EEE4AA'

export const darkBlue = '#086788'
export const blue = '#0B93C1'
export const paleBlue = '#65D2F6'

export const darkGreen = '#47855F'
export const green = '#79B791'
export const paleGreen = '#88BF9D'

export const warmGrey = '#F1E4F3'
export const coolGrey = '#8D94BA'

export const lightGrey = '#CAB1BD'
export const grey = '#D6D2D2'

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: orange,
            light: paleOrange,
            dark: darkOrange,
        },
        secondary: {
            main: teal,
            light: paleTeal,
            dark: darkTeal,
        },
        error: {
            main: darkPink,
            light: palePink,
            dark: pink,
        },
        warning: {
            main: yellow,
            light: paleYellow,
            dark: darkYellow,
        },
        info: {
            main: blue,
            light: paleBlue,
            dark: darkBlue,
        },
        success: {
            main: green,
            light: paleGreen,
            dark: darkGreen,
        },
    },
})

export default theme
