import 'bootstrap/dist/css/bootstrap.css'
import '@styles/global.css'
import '@styles/aos.css'
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Mrprotocoll Portfolio',
    template: '%s | Mrprotocoll Portfolio'
  },
  description: 'This is my personal portfolio, where I showcase my skills, projects, and journey. Join me as I explore the world of technology and share my creative endeavors',
  keyword: []
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container wrapper">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
