import 'bootstrap/dist/css/bootstrap.css'
import '@styles/global.css'
import '@styles/aos.css'
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mrprotocoll Portfolio',
  description: 'This is my personal portfolio, where I showcase my skills, projects, and journey. Join me as I explore the world of technology and share my creative endeavors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="container">
          {children}
        </main>
        
      </body>
    </html>
  )
}
