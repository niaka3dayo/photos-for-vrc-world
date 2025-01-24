'use client';

import Image from 'next/image';

import getStaticImagePath from '@/utils/getStaticImagePath/getStaticImagePath';
import useImageUrlCopyButton from '@/hooks/useImageUrlCopyButton/useImageUrlCopyButton';
import useImageSize from '@/hooks/useImageSize/useImageSize';
import { ImageCardProps } from './ImageCard.types';
import ImageInfo from './ImageInfo';
import CopyButton from './CopyButton';

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
    const imagePath = getStaticImagePath(image.src);
    const { handleCopyButtonClick, copied } = useImageUrlCopyButton();
    const { imageSize } = useImageSize(imagePath);

    return (
        <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:translate-y-[-3px] transition-transform duration-300">
            <div className="relative">
                <div
                    className="relative h-[240px] w-full cursor-pointer"
                    onClick={() => onImageClick(image)}
                >
                    {imageSize && <ImageInfo imageSize={imageSize} />}
                    <Image
                        src={imagePath}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                </div>
                <CopyButton
                    imagePath={imagePath}
                    copied={copied}
                    onCopyClick={handleCopyButtonClick}
                />
            </div>
        </div>
    );
};

export default ImageCard;
