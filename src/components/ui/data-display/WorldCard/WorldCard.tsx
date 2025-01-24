'use client';

import { World } from '@/domains/world/world.types';
import Image from 'next/image';
import Link from 'next/link';
import getStaticImagePath from '@/utils/getStaticImagePath/getStaticImagePath';

interface WorldCardProps {
    world: World;
}

const WorldCard = ({ world }: WorldCardProps) => {
    const imagePath = getStaticImagePath(world.coverImage);

    return (
        <Link
            href={`/world/${world.slug}`}
            className="bg-white rounded-xl overflow-hidden no-underline text-inherit transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg block"
        >
            <div className="relative h-[200px] w-full">
                <Image
                    src={imagePath}
                    alt={world.titleJa}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover border-b-[3px] border-blue-500"
                />
            </div>
            <h2 className="m-4 text-xl text-gray-700">{world.name}</h2>
        </Link>
    );
};

export default WorldCard;
