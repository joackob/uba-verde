import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BarraDeNavegacion from "@/components/barra-de-navegacion";
import { Container } from "@mui/material";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "UBA Verde",
  description: "Gestión y educación ambiental en la UBA",
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
      href: "/favicon.ico",
      type: "image/ico",
    },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LayoutParaTodoElSitio>
      {children}
      <BarraDeNavegacion />
    </LayoutParaTodoElSitio>
  );
}

const LayoutParaTodoElSitio = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="es">
      <body data-pagefind-body>
        <Container maxWidth={"sm"} component={"main"}>
          {children}
        </Container>
      </body>
    </html>
  );
};
