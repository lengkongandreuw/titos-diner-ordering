import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Order Online | Tito's Diner",
  description: "Order classic American diner favorites for pickup or delivery from Tito's Diner in Fredericksburg, Virginia.",
  icons: { icon: "/titos-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
