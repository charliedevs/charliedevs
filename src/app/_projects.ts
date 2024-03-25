import type { ReactNode } from 'react'

interface Project {
    title: string
    href: string
    description: string | ReactNode
}

export const projects: Project[] = [
    {
        title: 'musicalranges',
        href: 'https://github.com/charliedevs/musicalranges',
        description:
            'Webapp to visualize the playable ranges of different musical instruments.',
    },
    {
        title: 'charliedevs',
        href: 'https://github.com/charliedevs/charliedevs',
        description:
            'Personal website made with react, next.js, and tailwindcss.',
    },
    {
        title: 'grammar-analyzer',
        href: 'https://github.com/charliedevs/grammar-analyzer',
        description:
            'API that takes an English sentence and uses AI to parse the grammar.',
    },
]
