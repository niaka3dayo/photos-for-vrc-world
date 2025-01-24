import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
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

    return (
        <main>
            <div className="relative bg-gradient-to-r from-gray-800 to-blue-600 text-white p-8 mb-8 shadow-md">
                <Link
                    href="/"
                    className="absolute left-5 top-5 bg-white/90 text-gray-800 px-4 py-2 rounded hover:bg-white transition-colors duration-300 hover:-translate-x-1 transform"
                >
                    ← 戻る
                </Link>
                <h1 className="text-3xl font-bold text-center mt-8">{world.titleJa}</h1>
            </div>

            <Gallery images={world.gallery.images} />
        </main>
    );
}
