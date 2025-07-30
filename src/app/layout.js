// src/app/layout.js
import localFont from "next/font/local"; // Import localFont
import Header from "@/components/layout/Header";
import "./globals.css";

// Define Cinzel font with its variants
const cinzel = localFont({
  src: [
    {
      path: "../../public/fonts/Cinzel-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Cinzel-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cinzel", // CSS variable for Cinzel
  display: "swap",
});

// Define Cinzel Decorative font with its variants
const cinzelDecorative = localFont({
  src: [
    {
      path: "../../public/fonts/CinzelDecorative-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CinzelDecorative-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/CinzelDecorative-Black.woff",
      weight: "900", // Assuming 'Black' is the heaviest weight
      style: "normal",
    },
  ],
  variable: "--font-cinzel-decorative", // CSS variable for Cinzel Decorative
  display: "swap",
});

export const metadata = {
  title: "Musiliu Akinsanya Official Website", // Updated title
  description:
    "Official platform for Musiliu Akinsanya, President of NURTW, featuring news and developments.", // Updated description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
