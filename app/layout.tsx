import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
