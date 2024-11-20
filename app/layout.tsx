import type { Metadata } from "next"
import "./globals.css"
import AppHeader from "@/app/_components/layout/app-header"
import AppFooter from "@/app/_components/layout/app-footer"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="app">
        <header className="app-header">
          <AppHeader />
        </header>
        <main className="app-main">{children}</main>
        <footer className="app-footer">
          <AppFooter />
        </footer>
      </body>
    </html>
  )
}
