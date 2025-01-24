import type { Metadata } from 'next';
import './globals.css';
import CommonHeader from '@/components/ui/layouts/CommonHeader/CommonHeader';
import CommonFooter from '@/components/ui/layouts/CommonFooter/CommonFooter';
import { worldList } from '@/domains/world/world.constants';
import nextConfig from '../../next.config';

const BASE_PATH = nextConfig.basePath || '';

export const metadata: Metadata = {
    metadataBase: new URL('https://niaka3dayo.github.io/photos-for-vrc-world'),
    title: 'VRChat World Photos',
    description: '自作VRChatワールド内で表示するための写真を簡単に確認できるフォトギャラリー',
    keywords: ['VRChat', 'VRChatワールド', '写真', 'ギャラリー', 'フレームテクスチャ'],
    authors: [{ name: 'VRChat World Photos' }],
    viewport: 'width=device-width, initial-scale=1',
    robots: 'noindex, nofollow',
    openGraph: {
        title: 'VRChat World Photos',
        description: '自作VRChatワールド内で表示するための写真を簡単に確認できるフォトギャラリー',
        url: 'https://niaka3dayo.github.io/photos-for-vrc-world',
        siteName: 'VRChat World Photos',
        locale: 'ja_JP',
        type: 'website',
        images: [
            {
                url: '/images/ogp/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VRChat World Photos',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VRChat World Photos',
        description: '自作VRChatワールド内で表示するための写真を簡単に確認できるフォトギャラリー',
        images: ['/images/og-image.png'],
    },
    icons: {
        icon: [{ url: `${BASE_PATH}/favicon.ico` }],
        apple: [{ url: `${BASE_PATH}/apple-touch-icon.png` }],
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja">
            <body className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col">
                <CommonHeader worlds={worldList} />
                <div className="flex-1">{children}</div>
                <CommonFooter />
            </body>
        </html>
    );
};

export default RootLayout;
