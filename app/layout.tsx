"use client";
import type { Metadata } from "next";
import Search from "@/components/busqueda/search";
import Theme from "@/app/theme";
import "@/styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [inHome, setInHome] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setInHome(router.pathname === "/");
  });

  return (
    <>
      {inHome && (
        <Theme>
          <html lang="es">
            <body>{children}</body>
          </html>
        </Theme>
      )}
      {!inHome && (
        <Theme>
          <html lang="es">
            <body>
              <Container maxWidth={"sm"}>
                <Search />
                {children}
              </Container>
            </body>
          </html>
        </Theme>
      )}
    </>
  );
}
