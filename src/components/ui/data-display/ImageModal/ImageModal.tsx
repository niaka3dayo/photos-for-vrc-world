'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { WorldImage } from '@/domains/world/world.types';
import getStaticImagePath from '@/utils/getStaticImagePath/getStaticImagePath';
import useImageUrlCopyButton from '@/hooks/useImageUrlCopyButton/useImageUrlCopyButton';
interface ImageModalProps {
    image: WorldImage;
    onClose: () => void;
}

const ImageModal = ({ image, onClose }: ImageModalProps) => {
    const imagePath = getStaticImagePath(image.src);
    const { handleCopyButtonClick, copied } = useImageUrlCopyButton();

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

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
                        src={imagePath}
                        alt={image.alt}
                        width={1000}
                        height={800}
                        className="max-w-[min(90vw,1000px)] max-h-[min(80vh,800px)] w-auto h-auto object-contain rounded"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
                        {image.src.split('/').pop()}
                    </div>
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleCopyButtonClick}
                        data-image-url={imagePath}
                        className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors relative"
                        disabled={copied}
                    >
                        {copied ? 'コピー完了！' : 'URLをコピー'}
                    </button>
                    <div
                        className={`absolute left-0 right-0 text-center ${copied ? 'block' : 'hidden'}`}
                    >
                        <div className="inline-block mt-2 px-4 py-2 bg-green-500 text-white text-sm rounded-full shadow-lg animate-fade-in-out">
                            ✓ クリップボードにコピーしました
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
