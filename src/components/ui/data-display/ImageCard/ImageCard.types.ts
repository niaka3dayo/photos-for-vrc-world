import { WorldImage } from '@/domains/world/world.types';

export interface ImageSize {
    width: number;
    height: number;
}

export interface ImageCardProps {
    image: WorldImage;
    onImageClick: (image: WorldImage) => void;
}

export type ImageShape = '正方形' | '長方形（横長）' | '長方形（縦長）';

export interface ImageInfoProps {
    imageSize: ImageSize;
}

export interface CopyButtonProps {
    imagePath: string;
    copied: boolean;
    onCopyClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
