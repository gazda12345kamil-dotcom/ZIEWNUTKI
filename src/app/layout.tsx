import type { Metadata, Viewport } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin", "latin-ext"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ziewnutki - Najpiękniejsze kołysanki",
  description: "Ziewnutki - kanał z przepięknymi kołysankami i piosenkami dla dzieci. Uspokajająca muzyka dla najmłodszych, idealna do snu, pełna magii.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        {/* Inline script - ładuje się PRZED Reactem, blokuje gesty na dokumencie */}
        <script dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('gesturestart', function(e) { e.preventDefault(); });
          document.addEventListener('gesturechange', function(e) { e.preventDefault(); });
          document.addEventListener('gestureend', function(e) { e.preventDefault(); });
          document.addEventListener('touchstart', function(e) {
            if (e.touches.length > 1) { e.preventDefault(); }
          }, { passive: false });
          document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) { e.preventDefault(); }
          }, { passive: false });
        `}} />
      </head>
      <body
        className={`${nunito.variable} ${quicksand.variable} antialiased selection:bg-ziewPurple selection:text-white relative overflow-x-hidden`}
      >
        {/* Subtle glowing orb in background */}
        <div className="absolute top-[-10rem] left-[-10rem] w-96 h-96 bg-ziewPurple/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-[-10rem] right-[-10rem] w-96 h-96 bg-ziewMoon/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        {children}
      </body>
    </html>
  );
}
