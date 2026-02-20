export interface BlogArticle {
    id: string;
    title: string;
    dateLabel: string;
    dateISO: string;
    image: string;
    popularity: number;
    author?: string;
    authorImage?: string;
    excerpt?: string;
}

export interface BlogTag {
    name: string;
}

export const blogTags: BlogTag[] = [
    { name: 'Travel' },
    { name: 'Adventure' },
    { name: 'Culture' },
    { name: 'Beaches' },
    { name: 'Wildlife' },
    { name: 'Food' },
    { name: 'Nature' },
    { name: 'Photography' },
];

export const blogArticles: BlogArticle[] = [
    {
        id: 'article-1',
        title: 'Exploring the Ancient Cities of Sri Lanka',
        dateLabel: '3 days ago',
        dateISO: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1667617139130-1c161474b680?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 92,
        author: 'Sarah Johnson',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
        excerpt: 'Discover the rich history and cultural heritage of Sri Lanka\'s ancient cities. From Anuradhapura\'s archaeological wonders to Polonnaruwa\'s medieval splendor...',
    },
    {
        id: 'article-2',
        title: 'Hidden Gems of Sri Lanka',
        dateLabel: '2 days ago',
        dateISO: '2026-02-18',
        image: 'https://images.unsplash.com/photo-1714412953594-ce00b0d43467?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 98,
        author: 'Nimal Perera',
        authorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: 'article-3',
        title: 'Best Beaches in the South',
        dateLabel: '5 days ago',
        dateISO: '2026-02-15',
        image: 'https://plus.unsplash.com/premium_photo-1712093436790-08c0bd6cae40?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 88,
        author: 'Ayesha Fernando',
        authorImage: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: 'article-4',
        title: 'Cultural Heritage Sites',
        dateLabel: '1 week ago',
        dateISO: '2026-02-13',
        image: 'https://images.unsplash.com/photo-1743525700011-afac212694d7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 85,
        author: 'Ravi Silva',
        authorImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: 'article-5',
        title: 'Hidden Waterfalls Trek',
        dateLabel: '5 days ago',
        dateISO: '2026-02-20',
        image: 'https://plus.unsplash.com/premium_photo-1661813583584-bbb3ac4ade09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 74,
        author: 'Maya Wijesinghe',
        authorImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: 'article-6',
        title: 'Tea Plantation Visit',
        dateLabel: '1 week ago',
        dateISO: '2026-02-13',
        image: 'https://images.unsplash.com/photo-1679668645563-ffc90dc328ec?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 69,
        author: 'Kavindu Jayasuriya',
        authorImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: 'article-7',
        title: 'Wildlife Photography Tips',
        dateLabel: '2 weeks ago',
        dateISO: '2026-02-06',
        image: 'https://images.unsplash.com/photo-1720783963915-13129dccf433?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 77,
        author: 'Thilini Perera',
        authorImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop',
    },
    {
        id: 'article-8',
        title: 'Beach Hopping Guide',
        dateLabel: '3 weeks ago',
        dateISO: '2026-01-30',
        image: 'https://plus.unsplash.com/premium_photo-1661923086373-73176f7c004a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        popularity: 71,
        author: 'Ishan Rodrigo',
        authorImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=100&auto=format&fit=crop',
    },
];
