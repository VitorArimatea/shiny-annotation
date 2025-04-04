import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Shiny Annotation",
  description: "An productive AI APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body>
          <Header />
          <div className="h-screen flex">
            <Sidebar />
            <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
