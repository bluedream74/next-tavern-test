import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Footer from "./components/Footer";
import Container from "./components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tavern",
  description: "Tavern Next Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        <div
          className="
            pt-28
            md:h-full
            md:pb-64
            pb-4
            md:overflow-y-auto
          "
        >
          <Container>
            {children}
          </Container>
        </div>
        <Footer />
      </body>
    </html>
  );
}
