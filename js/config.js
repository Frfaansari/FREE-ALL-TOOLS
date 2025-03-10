const CONFIG = {
    categories: [
        {
            id: 'image-tools',
            name: 'Image Tools',
            icon: 'fas fa-image',
            description: 'Tools for image processing, conversion, and manipulation'
        },
        {
            id: 'seo-tools',
            name: 'SEO Tools',
            icon: 'fas fa-search',
            description: 'Tools for search engine optimization and website analysis'
        },
        {
            id: 'text-tools',
            name: 'Text Tools',
            icon: 'fas fa-font',
            description: 'Tools for text processing, formatting, and analysis'
        },
        {
            id: 'developer-tools',
            name: 'Developer Tools',
            icon: 'fas fa-code',
            description: 'Tools for developers and programmers'
        },
        {
            id: 'calculators',
            name: 'Calculators',
            icon: 'fas fa-calculator',
            description: 'Various calculators for different purposes'
        },
        {
            id: 'converters',
            name: 'Converters',
            icon: 'fas fa-exchange-alt',
            description: 'Tools for converting between different formats and units'
        }
    ],
    tools: [
        // Image Tools
        {
            id: 'image-to-png',
            name: 'Image to PNG Converter',
            category: 'image-tools',
            icon: 'fas fa-file-image',
            description: 'Convert images to PNG format with customizable settings',
            url: 'tools/image-to-png.html',
            featured: true
        },
        {
            id: 'image-to-jpg',
            name: 'Image to JPG Converter',
            category: 'image-tools',
            icon: 'fas fa-file-image',
            description: 'Convert images to JPG format with quality control',
            url: 'tools/image-to-jpg.html',
            featured: true
        },
        // Add more tools here...
    ],
    featuredTools: [
        'image-to-png',
        'image-to-jpg',
        // Add more featured tool IDs here...
    ],
    adSpaces: {
        header: {
            enabled: true,
            position: 'top'
        },
        sidebar: {
            enabled: true,
            position: 'right'
        },
        footer: {
            enabled: true,
            position: 'bottom'
        }
    }
}; 