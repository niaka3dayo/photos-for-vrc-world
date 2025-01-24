'use client';

import { CopyButtonProps } from './ImageCard.types';

export const CopyButton = ({ imagePath, copied, onCopyClick }: CopyButtonProps) => {
    return (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
                onClick={onCopyClick}
                data-image-url={imagePath}
                className="w-full py-2 bg-white/90 text-gray-800 rounded text-sm font-medium hover:bg-white transition-colors relative"
                disabled={copied}
            >
                {copied ? 'コピー完了！' : 'URLをコピー'}
            </button>
            <div className={`absolute left-0 right-0 text-center ${copied ? 'block' : 'hidden'}`}>
                <div className="inline-block mt-2 px-3 py-1 bg-green-500 text-white text-xs rounded-full shadow-lg animate-fade-in-out">
                    ✓ クリップボードにコピーしました
                </div>
            </div>
        </div>
    );
};

export default CopyButton;
