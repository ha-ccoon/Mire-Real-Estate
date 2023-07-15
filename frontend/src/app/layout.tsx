import './globals.css'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export const metadata = {
  title: 'Mirae real estate',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-custoem">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
