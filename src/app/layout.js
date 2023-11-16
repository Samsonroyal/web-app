import './globals.css'

export const metadata = {
  title: 'Synchro - talent acquisition platform',
  description: 'By businesses, for businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
