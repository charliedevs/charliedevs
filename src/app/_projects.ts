import type { ReactNode } from 'react'

interface Project {
    title: string
    href: string
    description: string | ReactNode
}

export const projects: Project[] = [
    {
        title: 'conlang-dictionary',
        href: 'https://github.com/charliedevs/conlang-dictionary',
        description: 'An online dictionary for your constructed languages.',
    },
    {
        title: 'musicalranges',
        href: 'https://github.com/charliedevs/musicalranges',
        description:
            'Webapp to visualize the playable ranges of different musical instruments.',
    },
    {
        title: 'grammar-analyzer',
        href: 'https://github.com/charliedevs/grammar-analyzer',
        description:
            'API that takes an English sentence and uses AI to parse the grammar.',
    },
]
