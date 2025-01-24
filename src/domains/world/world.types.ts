import { Gallery } from '../gallery/gallery.types';

/** ワールドの画像 */
export interface WorldImage {
    /** 画像のURL */
    src: string;
    /** 画像のalt */
    alt: string;
}

/** ワールド */
export interface World {
    /** スラッグ */
    slug: string;
    /** タイトル */
    name: string;
    /** サブタイトル */
    titleJa: string;
    /** サブタイトル */
    coverImage: string;
    /** ギャラリー */
    gallery: Gallery;
}
