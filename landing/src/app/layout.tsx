import './globals.css'

export const metadata = {
  title: 'Test Landing Page',
  description: 'Test Landiong Page',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  )
}
