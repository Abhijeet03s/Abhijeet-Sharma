import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Abhijeet Sharma",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background">
        <div className="flex flex-col min-h-screen max-w-5xl mx-auto px-6 font-mono">
          <Header />
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
