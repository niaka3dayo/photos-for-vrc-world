'use client';

import { useState, useEffect } from 'react';
import { ImageSize } from '@/components/ui/data-display/ImageCard/ImageCard.types';

export const useImageSize = (imagePath: string) => {
    const [imageSize, setImageSize] = useState<ImageSize | null>(null);

    useEffect(() => {
        const img = new window.Image();
        img.src = imagePath;
        img.onload = () => {
            setImageSize({
                width: img.naturalWidth,
                height: img.naturalHeight,
            });
        };
    }, [imagePath]);

    const getImageShape = () => {
        if (!imageSize) return null;
        const { width, height } = imageSize;

        if (width === height) return '正方形';
        return width > height ? '長方形（横長）' : '長方形（縦長）';
    };

    return {
        imageSize,
        imageShape: getImageShape(),
    };
};

export default useImageSize;
