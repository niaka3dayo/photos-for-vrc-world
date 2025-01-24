import type { Metadata } from 'next';
import './globals.css';
import CommonHeader from '@/components/ui/layouts/CommonHeader/CommonHeader';
import CommonFooter from '@/components/ui/layouts/CommonFooter/CommonFooter';
import { worldList } from '@/domains/world/world.constants';

export const metadata: Metadata = {
    title: 'VRChat World Photos',
    description: 'VRChatワールドの写真ギャラリー',
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
