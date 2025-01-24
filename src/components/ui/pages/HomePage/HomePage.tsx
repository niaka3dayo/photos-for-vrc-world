'use client';

import WorldCard from '@/components/WorldCard';
import { worldList } from '@/domains/world/world.constants';

/**
 * ホームページ
 */
export default function HomePage() {
    return (
        <main className="max-w-7xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {worldList.map((world) => (
                    <WorldCard key={world.slug} world={world} />
                ))}
            </div>
        </main>
    );
}
