import { cyanariaGallery, moonlitManorGallery } from '../gallery/gallery.constants';
import { World } from './world.types';

export const worldList: World[] = [
    {
        slug: 'cyanaria',
        name: 'Cyanaria World',
        titleJa: 'シアナリアワールド',
        coverImage: '/images/cyanaria/1f-board-a.webp',
        gallery: cyanariaGallery,
    },
    {
        slug: 'moonlit-manor',
        name: 'Moonlit Manor',
        titleJa: 'ムーンリットマナー',
        coverImage: '/images/moonlit-manor/h-living-bar-1.webp',
        gallery: moonlitManorGallery,
    },
];
