import { Provider } from "@/context/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikram",
  description: "tour agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <Provider>
        <body className={inter.className}>
          <ToasterContext />
          <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
