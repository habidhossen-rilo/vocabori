import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactHotToast from "@/components/shared/Toaster";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import AuthProvider from "@/context/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocabori | Language Learning Platform",
  description: "Vocabori is a language learning platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-brandBg antialiased`}
      >
        <AuthProvider session={session}>
          <div className="container-layout">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
        <ReactHotToast />
      </body>
    </html>
  );
}
