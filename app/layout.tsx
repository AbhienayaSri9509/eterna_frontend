import './globals.css'
import type { PropsWithChildren } from 'react'
import { Providers } from '../lib/providers'

export const metadata = {
  title: 'Axiom Token Table — Mock',
  description: 'Token discovery table demo'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
