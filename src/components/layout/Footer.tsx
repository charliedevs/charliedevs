import {
    IconBrandYoutubeFilled,
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileMusic,
} from '@tabler/icons-react'

interface FooterLink {
    id: number
    title: string
    href: string
    icon: JSX.Element
}

const footerLinks: FooterLink[] = [
    {
        id: 0,
        title: "Charlie's GitHub",
        href: 'https://github.com/charliedevs',
        icon: <IconBrandGithub size='20' />,
    },
    {
        id: 1,
        title: "Charlie's MuseScore Profile",
        href: 'https://musescore.com/user/33694405',
        icon: <IconFileMusic size='20' />,
    },
    {
        id: 2,
        title: "Charlie's LinkedIn",
        href: 'https://www.linkedin.com/in/charlie-davis-54762a18b/',
        icon: <IconBrandLinkedin size='20' />,
    },
    {
        id: 3,
        title: "Charlie's YouTube",
        href: 'https://www.youtube.com/@charliecarrot',
        icon: <IconBrandYoutubeFilled size='20' />,
    },
]

export const Footer = () => {
    return (
        <footer className='mb-10 mt-auto h-fit w-full bg-purple transition-all md:bg-none'>
            <div className='mx-auto w-full max-w-3xl 2xl:max-w-4xl'>
                <hr className='my-4 h-1 border-secondary' />
                <div className='flex justify-between align-middle text-sm text-secondary'>
                    <p className='tracking-wide'>© 2024 Charlie Davis</p>
                    <div
                        id='iconLinks'
                        className='ml-10 mr-4 mt-[0.15em] flex gap-10 transition-all ease-in md:mr-1 md:gap-6'
                    >
                        {footerLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                title={link.title}
                                target='_blank'
                                className='transition-transform ease-in hover:scale-110 hover:text-primary'
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
