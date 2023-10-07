import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TodoContexts from './Contexts/TodoContexts'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'this is a todo list app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <TodoContexts>
      <body className={inter.className}>{children}</body>
      </TodoContexts>
    </html>
  )
}
