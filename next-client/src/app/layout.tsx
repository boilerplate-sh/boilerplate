import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface RootLayout {
  children: React.ReactNode;
}

export const metadata = {
  title: "Boilerplate - Nextjs Client",
  description: "A simple nextjs boilerplate",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="container h-[calc(100vh-60px)] bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
