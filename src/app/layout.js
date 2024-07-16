// app/layout.js
"use client";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ThemeProvider from "../components/ThemeProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Subadha</title>
        <meta name="description" content="Subadha" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
