import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Global Techno',
  description: 'Custom software, mobile apps, web development & IT consulting. Bandung, Indonesia.',
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin:0,padding:0}}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}