import {
    IconBrandYoutubeFilled,
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileMusic,
} from '@tabler/icons-react'
import Link from 'next/link'

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
        icon: <IconBrandGithub size='1.1rem' />,
    },
    {
        id: 1,
        title: "Charlie's MuseScore Profile",
        href: 'https://musescore.com/user/33694405',
        icon: <IconFileMusic size='1.1rem' />,
    },
    {
        id: 2,
        title: "Charlie's LinkedIn",
        href: 'https://www.linkedin.com/in/charlie-davis-54762a18b/',
        icon: <IconBrandLinkedin size='1.1rem' />,
    },
    {
        id: 3,
        title: "Charlie's YouTube",
        href: 'https://www.youtube.com/@charliecarrot',
        icon: <IconBrandYoutubeFilled size='1.1rem' />,
    },
]

export const Footer = () => {
    return (
        <footer className='relative mb-10 mt-12 h-fit w-full bg-purple transition-all md:mt-20 md:bg-none'>
            <div className='mx-auto w-full max-w-3xl'>
                <hr className='border-secondary my-4 h-1' />
                <div className='flex justify-between align-middle text-sm text-secondary'>
                    <p className='tracking-wide'>Charlie Davis</p>
                    <div
                        id='iconLinks'
                        className='ml-10 mr-4 mt-[0.15em] flex gap-10 transition-all ease-in md:mr-0 md:gap-4'
                    >
                        {footerLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                title={link.title}
                                target='_blank'
                                className='transition-transform ease-in hover:scale-110 hover:text-primary'
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
