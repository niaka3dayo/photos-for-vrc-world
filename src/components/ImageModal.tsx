'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { WorldImage } from '@/domains/world/world.types';

interface ImageModalProps {
    image: WorldImage;
    onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.origin + image.src);
            alert('URLをコピーしました');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg p-5"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl shadow-md hover:bg-gray-100 transition-colors"
                >
                    ×
                </button>

                <div className="relative">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={1000}
                        height={800}
                        className="max-w-[min(90vw,1000px)] max-h-[min(80vh,800px)] w-auto h-auto object-contain rounded"
                    />
                </div>

                <button
                    onClick={handleCopy}
                    className="w-full mt-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    URLをコピー
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
