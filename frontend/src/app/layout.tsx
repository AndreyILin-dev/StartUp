import type { Metadata } from "next";
import { geistMono, geistSans } from "../config/fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Create Next ",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico"
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
