import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "کسبیار | سکوی کسب و کار های محلی",
  description: "کسبیار، سکوی کسب و کار های محلی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
