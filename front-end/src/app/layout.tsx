"use client";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductsProvider } from "@/context/products-context";
import { UserProvider } from "@/context/user-context";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <ProductsProvider>
            <Header />
            {children}
            <Footer />
          </ProductsProvider>
        </UserProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
