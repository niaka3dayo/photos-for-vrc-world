import { World } from '@/domains/world/world.types';
import Link from 'next/link';

interface Props {
    worlds: World[];
}

const CommonHeader = ({ worlds }: Props) => {
    return (
        <header className="bg-white shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-900">
                        VRChat World Photos
                    </Link>
                    <div className="space-x-6">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            ホーム
                        </Link>
                        {worlds.map((world) => (
                            <Link
                                key={world.slug}
                                href={`/world/${world.slug}`}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {world.titleJa}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default CommonHeader;
