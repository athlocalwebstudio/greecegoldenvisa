"use client";

import { usePathname } from "next/navigation";

import Navbar from "./components/Navbar";
import Footer from "./components/LandingPage/Footer/Footer";
import { NavbarProvider } from "./context/NavbarContext";
import { ConsultationProvider } from "./components/consultation/ConsultationProvider";
import ClientLayout from "./ClientLayout";

export default function SiteShell({ children }) {
const pathname = usePathname();

const isStudio = pathname.startsWith("/studio");

if (isStudio) {
return children;
}

return ( <ConsultationProvider> <ClientLayout> <NavbarProvider> <Navbar />

      {children}

      <Footer />
    </NavbarProvider>
  </ClientLayout>
</ConsultationProvider>


);
}
