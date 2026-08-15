import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Order Online | Tito's Diner",
  description: "Order classic American diner favorites for pickup or delivery from Tito's Diner in Fredericksburg, Virginia.",
  icons: { icon: "/titos-logo.png" },
  openGraph: {
    title: "Come Hungry | Tito's Diner",
    description: "Build your Tito's order with breakfast, diner classics, Mediterranean favorites, and custom sides.",
    type: "website",
    images: ["https://lengkongandreuw.github.io/titos-diner-ordering/og.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Come Hungry | Tito's Diner",
    description: "Order Tito's Diner favorites online.",
    images: ["https://lengkongandreuw.github.io/titos-diner-ordering/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
