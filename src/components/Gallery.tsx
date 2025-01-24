'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { WorldImage } from '@/domains/world/world.types';

interface GalleryProps {
    images: WorldImage[];
}

const Gallery = ({ images }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<WorldImage | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:translate-y-[-3px] transition-transform duration-300"
                    >
                        <div
                            className="relative h-[240px] w-full cursor-pointer"
                            onClick={() => setSelectedImage(image)}
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
                ))}
            </div>

            {selectedImage && (
                <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </>
    );
};

export default Gallery;
