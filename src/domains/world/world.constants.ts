import { cyanariaGallery, moonlitManorGallery } from '../gallery/gallery.constants';
import { World } from './world.types';

export const worldList: World[] = [
    {
        slug: 'cyanaria',
        name: 'Cyanaria',
        titleJa: 'Cyanaria',
        coverImage: '/cyanaria/1f-board-a.webp',
        gallery: cyanariaGallery,
    },
    {
        slug: 'moonlit-manor',
        name: 'Moonlit Manor',
        titleJa: 'Moonlit Manor',
        coverImage: '/moonlit-manor/h-living-bar-1.webp',
        gallery: moonlitManorGallery,
    },
];
