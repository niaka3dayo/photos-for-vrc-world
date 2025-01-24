'use client';

import WorldCard from '@/components/WorldCard';
import { worldList } from '@/domains/world/world.constants';

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-8">VRChatワールド写真ギャラリー</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {worldList.map((world) => (
                    <WorldCard key={world.slug} world={world} />
                ))}
            </div>
        </main>
    );
}
