'use client'

import { backgroundColor, lightGrey } from '@/style/theme'
import { Menu as MenuIcon } from '@mui/icons-material'
import {
    Box,
    Button,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

const drawerWidth = '50vw'

const navItems = [
    { text: 'Home', slug: '/home' },
    { text: 'About', slug: '/about' },
    { text: 'Contact', slug: '/contact' },
]

const NavBar = () => {
    const [isMobileDrawerOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const mobileDrawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: '#fffff5' }}>
            <Typography className='py-2 text-2xl font-semibold'>charliedevs</Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <Link href={item.slug}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Box display='flex'>
            <AppBar component='nav' sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component='div'
                        color={lightGrey}
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                    >
                        charliedevs
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Link key={item.text} href={item.slug}>
                                <Button
                                    sx={{
                                        color: lightGrey,
                                        '&:hover': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {item.text}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant='temporary'
                    open={isMobileDrawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor,
                        },
                    }}
                >
                    {mobileDrawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default NavBar
