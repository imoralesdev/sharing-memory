import "./globals.css";
import { ReactNode } from "react";
import PageFadeInOut from "@/app/components/PageFadeInOut";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export const metadata = {
  title:
    "Sharing Memory | we understand the profound impact of losing someone dear",
  description:
    "Our mission is to provide holistic support—blending medical care, emotional guidance, and educational resources to help you navigate this challenging time. ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageFadeInOut backgroundColor="#444">
          {children}
          <Footer />
        </PageFadeInOut>
      </body>
    </html>
  );
}
