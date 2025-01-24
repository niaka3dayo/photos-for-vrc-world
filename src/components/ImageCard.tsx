'use client';

import Image from 'next/image';
import { WorldImage } from '@/domains/world/world.types';

interface ImageCardProps {
    image: WorldImage;
    onImageClick: (image: WorldImage) => void;
}

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:translate-y-[-3px] transition-transform duration-300">
            <div
                className="relative h-[240px] w-full cursor-pointer"
                onClick={() => onImageClick(image)}
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover hover:opacity-90 transition-opacity duration-300"
                />
            </div>
        </div>
    );
};

export default ImageCard;
