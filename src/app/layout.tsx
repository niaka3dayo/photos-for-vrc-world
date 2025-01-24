import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VRChat World Photos",
  description: "VRChatワールドの写真ギャラリー",
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ja">
      <body className="font-sans bg-gray-50 text-gray-800 min-h-screen">
        {children}
      </body>
    </html>
  )
}

export default RootLayout
