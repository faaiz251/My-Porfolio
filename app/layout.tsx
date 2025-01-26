import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elegant Portfolio",
  description: "Welcome to my professional and stylish portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-gray-200`}
      >
        <div className="backdrop-blur-sm bg-black/30">
          <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 p-4">
            <nav className="container mx-auto flex flex-wrap justify-between items-center">
              <h1 className="text-2xl font-bold text-white">My Portfolio</h1>
              <ul className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
                <li>
                  <a href="/" className="hover:text-pink-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-pink-300 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-pink-300 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-pink-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto mt-8 px-4 pb-16">{children}</main>
          <footer className="bg-black/20 backdrop-blur-md p-4 mt-8">
            <div className="container mx-auto text-center text-sm">© 2023 Elegant Portfolio. All rights reserved.</div>
          </footer>
        </div>
      </body>
    </html>
  )
}

