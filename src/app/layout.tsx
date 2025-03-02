import "./globals.css";

import { ebGaramond, inter, condiment } from "@/core/fonts";

import { Navbar } from "@/core/components/navbar";
import { Footer } from "@/core/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${inter.variable} ${condiment.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
