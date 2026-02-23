import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SarkinMota | Elevated Automotive Experience",
  description: "Curated performance machines for those who move differently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("bg-background text-foreground antialiased selection:bg-accent selection:text-black")}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
