import "./globals.css";
import Navbar from "./components/Navbar";
import { NavbarProvider } from "./context/NavbarContext";

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