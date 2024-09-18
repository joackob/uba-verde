"use client";
import Search from "@/components/busqueda/search";
import Theme from "@/app/theme";
import "@/styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [inHome, setInHome] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setInHome(pathname === "/");
  }, [pathname]);

  return (
    <Theme>
      <html lang="es">
        <body>
          {inHome ? (
            children
          ) : (
            <Container maxWidth={"sm"}>
              <Search />
              {children}
            </Container>
          )}
        </body>
      </html>
    </Theme>
  );
}
