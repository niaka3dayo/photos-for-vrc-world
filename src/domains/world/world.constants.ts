import { cyanariaGallery, moonlitManorGallery } from '../gallery/gallery.constants';
import { World } from './world.types';

export const worldList: World[] = [
    {
        slug: 'moonlit-manor',
        name: 'Moonlit Manor -Luminous Update-',
        titleJa: 'Moonlit Manor',
        coverImage: '/moonlit-manor/_thumbnail.webp',
        gallery: moonlitManorGallery,
    },
    {
        slug: 'cyanaria',
        name: 'Cyanaria',
        titleJa: 'Cyanaria',
        coverImage: '/cyanaria/_thumbnail.webp',
        gallery: cyanariaGallery,
    },
];
