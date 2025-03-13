import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="min-h-screen">{children}</main>

          {/* Notifications */}
          <Toaster richColors />

          {/* Footer */}
          <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-10 shadow-md">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
              <p>Made with 💗 by Us</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
