// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AuthProviderWrapper } from "./AuthProviderWrapper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "รู้ทันยาเสพติด - สื่อการเรียนรู้",
  description: "แอปพลิเคชันสื่อการเรียนรู้เพื่อป้องกันและรู้ทันยาเสพติด",
  generator: "v0.app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900">
        <AuthProviderWrapper>
          <main className="min-h-screen flex flex-col container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </AuthProviderWrapper>
      </body>
    </html>
  );
}
