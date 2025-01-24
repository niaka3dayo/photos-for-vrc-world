'use client';

import Image from 'next/image';

import { WorldImage } from '@/domains/world/world.types';
import getStaticImagePath from '@/utils/getStaticImagePath/getStaticImagePath';
import useImageUrlCopyButton from '@/hooks/useImageUrlCopyButton/useImageUrlCopyButton';

interface ImageCardProps {
    image: WorldImage;
    onImageClick: (image: WorldImage) => void;
}

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
    const imagePath = getStaticImagePath(image.src);
    const { handleCopyButtonClick, copied } = useImageUrlCopyButton();

    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:translate-y-[-3px] transition-transform duration-300">
            <div className="relative">
                <div
                    className="relative h-[240px] w-full cursor-pointer"
                    onClick={() => onImageClick(image)}
                >
                    <Image
                        src={imagePath}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={handleCopyButtonClick}
                        data-image-url={imagePath}
                        className="w-full py-2 bg-white/90 text-gray-800 rounded text-sm font-medium hover:bg-white transition-colors relative"
                        disabled={copied}
                    >
                        {copied ? 'コピー完了！' : 'URLをコピー'}
                    </button>
                    <div
                        className={`absolute left-0 right-0 text-center ${copied ? 'block' : 'hidden'}`}
                    >
                        <div className="inline-block mt-2 px-3 py-1 bg-green-500 text-white text-xs rounded-full shadow-lg animate-fade-in-out">
                            ✓ クリップボードにコピーしました
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
