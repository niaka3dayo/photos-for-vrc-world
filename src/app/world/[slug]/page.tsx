import React from 'react';
import { notFound } from 'next/navigation';
import GalleryPage from '@/components/ui/pages/GalleryPage/GalleryPage';
import { worldList } from '@/domains/world/world.constants';

// 静的なパスを生成する
export async function generateStaticParams() {
    return worldList.map((world) => ({
        slug: world.slug,
    }));
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
