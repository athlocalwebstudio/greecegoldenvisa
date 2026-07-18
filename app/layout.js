import "./globals.css";
import Navbar from "./components/Navbar";
import { NavbarProvider } from "./context/NavbarContext";
import { Playfair_Display, Inter } from "next/font/google";



const playfair = Playfair_Display({
  subsets:["latin"],
  variable:"--font-playfair",
  display:"swap",
});


const inter = Inter({
  subsets:["latin"],
  variable:"--font-inter",
  display:"swap",
});


export const metadata = {
  title: "Golden Visa Greece | Premium Consulting",
  description:
    "Discover the easiest path to obtaining the Greek Golden Visa with a modern, interactive experience.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>

        <NavbarProvider>

          <Navbar />

          {children}

        </NavbarProvider>

      </body>

    </html>
  );
}