'use client';

import React, { useState, useEffect } from 'react';

/**
 * 画像のURLをコピーするフック
 */
export default function useImageUrlCopyButton() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopyButtonClick = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        event.preventDefault();
        const imageUrlFromDataProps = event.currentTarget.getAttribute('data-image-url');

        if (imageUrlFromDataProps === null || imageUrlFromDataProps === '') {
            return;
        }

        try {
            await navigator.clipboard.writeText(window.location.origin + imageUrlFromDataProps);

            setCopied(true);
        } catch (e) {
            console.error(e);
        }
    };

    return {
        handleCopyButtonClick,
        copied,
    };
}
