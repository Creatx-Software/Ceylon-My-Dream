export const GALLERY_TABS = ['all', 'nature', 'adventure', 'culture', 'beaches'] as const;
export type GalleryTab = (typeof GALLERY_TABS)[number];
export type GalleryCategory = Exclude<GalleryTab, 'all'>;

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};

export const galleryData: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 1',
    category: 'nature',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1571406761758-9a3eed5338ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 2',
    category: 'beaches',
  },
  {
    id: '3',
    src: 'https://plus.unsplash.com/premium_photo-1726873378530-c2c34c33fc17?q=80&w=1164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 3',
    category: 'nature',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1707236606614-fbee3070f156?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 4',
    category: 'nature',
  },
  {
    id: '5',
    src: 'https://plus.unsplash.com/premium_photo-1723874462909-99abb7ff12d3?q=80&w=1157&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 5',
    category: 'adventure',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 6',
    category: 'adventure',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1728455470905-156f4278056a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 7',
    category: 'culture',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 8',
    category: 'culture',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1623595289196-007a22dd8560?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 9',
    category: 'beaches',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1653959699604-1eb000740b57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 10',
    category: 'beaches',
  },
  {
    id: '11',
    src: 'https://plus.unsplash.com/premium_photo-1689838026693-02c808d3c794?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 11',
    category: 'culture',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1586193804147-64d5c02ef9c1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 12',
    category: 'nature',
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1598955890270-d77cdb06d2bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 13',
    category: 'adventure',
  },
  {
    id: '14',
    src: 'https://images.unsplash.com/photo-1524726240783-939bfdd633e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 14',
    category: 'nature',
  },
  {
    id: '15',
    src: 'https://images.unsplash.com/photo-1559036212-2fd4158b2571?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 15',
    category: 'beaches',
  },
  {
    id: '16',
    src: 'https://images.unsplash.com/photo-1623595289196-007a22dd8560?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 16',
    category: 'culture',
  },
];

export const getGalleryImages = (tab: GalleryTab = 'all') =>
  tab === 'all' ? galleryData : galleryData.filter((img) => img.category === tab);