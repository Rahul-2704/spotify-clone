import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsById'
import Player from '@/components/Player'
const font = Figtree({ subsets: ['latin'] })
import Error from 'next/error'
export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Explore the Music',
}
export const revalidate=0;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mySongs=await getSongsByUserId();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <Sidebar songs={mySongs}>{children}</Sidebar>
            <Player/>
          </UserProvider>

        </SupabaseProvider>
      </body>
    </html>
  )
}
