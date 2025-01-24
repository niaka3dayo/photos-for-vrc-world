/** 共通フッター */
export default function CommonFooter() {
    const year = new Date().getFullYear();
    const copyRight = `© ${year} NiAka. All rights reserved.`;

    return (
        <footer className="text-center py-8">
            <p className="text-sm text-gray-500">{copyRight}</p>
        </footer>
    );
}
