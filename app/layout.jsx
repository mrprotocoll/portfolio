import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'Mrprotocoll Portfolio',
  description: 'This is my personal portfolio, where I showcase my skills, projects, and journey. Join me as I explore the world of technology and share my creative endeavors',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <main>
          {children}
        </main>
        
      </body>
    </html>
  )
}
