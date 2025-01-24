'use client';

import { ImageInfoProps } from './ImageCard.types';

export const ImageInfo = ({ imageSize }: ImageInfoProps) => {
    const { width, height } = imageSize;
    const shape =
        width === height ? '正方形' : width > height ? '長方形（横長）' : '長方形（縦長）';

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
            <div className="bg-black/60 px-3 py-1.5 rounded text-white text-sm">
                {width} × {height}
            </div>
            <div className="bg-black/60 px-3 py-1.5 rounded text-white text-sm">{shape}</div>
        </div>
    );
};

export default ImageInfo;
