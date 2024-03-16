import type { ReactNode } from 'react'

interface Project {
    title: string
    href: string
    description: string | ReactNode
}

export const projects: Project[] = [
    {
        title: 'grammar-analyzer',
        href: 'https://github.com/charliedevs/grammar-analyzer',
        description:
            'API that takes an English sentence and uses AI to parse the grammar.',
    },
    {
        title: 'charliedevs',
        href: 'https://github.com/charliedevs/charliedevs',
        description:
            'Personal website made with react, next.js, and tailwindcss.',
    },
    {
        title: 'my dotfiles',
        href: 'https://github.com/charliedevs/dotfiles',
        description: 'Configuration files for zsh, vim, tmux, and others.',
    },
]
