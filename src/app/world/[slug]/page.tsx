import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import GalleryPage from '@/components/ui/pages/GalleryPage/GalleryPage';
import { worldList } from '@/domains/world/world.constants';

// 静的なパスを生成する
export async function generateStaticParams() {
    return worldList.map((world) => ({
        slug: world.slug,
    }));
}

// 動的なmetadataを生成する
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const world = worldList.find((w) => w.slug === slug);

    if (!world) {
        return {};
    }

    const title = `${world.titleJa} - VRChat World Photos`;
    const description = `${world.titleJa}のフレームテクスチャ用写真ギャラリー`;
    const ogImage = world.coverImage;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `/world/${world.slug}`,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: world.titleJa,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

// ページコンポーネント
export default async function WorldPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const world = worldList.find((w) => w.slug === slug);

    if (!world) {
        notFound();
    }

    return <GalleryPage images={world.gallery.images} />;
}
