import nextConfig from '../../../next.config';

const BASE_PATH = nextConfig.basePath || '';
const IMAGE_PATH_ROOT = '/images';

/**
 * Get the static image path.
 * @param src - The image source.
 * @returns The static image path.
 */
export default function getStaticImagePath(src: string) {
    return `${BASE_PATH}${IMAGE_PATH_ROOT}${src}`;
}
