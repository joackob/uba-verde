"use client";
import Search from "@/components/busqueda/search";
import Theme from "@/app/theme";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navegador from "@/components/navegador";
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const inHome = pathname === "/";

  return (
    <Theme>
      <html lang="es">
        <head>{/* Aquí puedes incluir elementos <meta>, <link>, etc. */}</head>
        <body>
          <Container maxWidth={"sm"}>
            {!inHome && <Search />}
            {children}
            <Navegador />
          </Container>
        </body>
      </html>
    </Theme>
  );
}
