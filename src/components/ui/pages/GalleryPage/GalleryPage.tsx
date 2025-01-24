'use client';

import { useState } from 'react';
import ImageModal from '../../../ImageModal';
import ImageCard from '../../../ImageCard';
import { WorldImage } from '@/domains/world/world.types';

interface GalleryProps {
    images: WorldImage[];
}

export default function GalleryPage({ images }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<WorldImage | null>(null);

    return (
        <main>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
                {images.map((image, index) => (
                    <ImageCard key={index} image={image} onImageClick={setSelectedImage} />
                ))}
            </div>

            {selectedImage && (
                <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </main>
    );
}
