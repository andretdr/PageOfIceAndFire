import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        
        
        {children}

      </body>
    </html>
  );
}
