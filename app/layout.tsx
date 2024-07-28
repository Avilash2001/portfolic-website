import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

const font = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avilash Ghosh",
  description: "Personal website of Avilash Ghosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex h-screen w-screen">
          <Sidebar />
          <div className="flex flex-col w-full h-full">
            <Header />
            <div className="w-[calc(100%-80px)] h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
