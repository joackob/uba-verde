import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navegador from "@/components/navegador";
import { Container } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <Link rel="icon" href="/favicon.ico" type="image/png"/>
      </Head>
      <body>
        <Container maxWidth={"sm"}>
          {children}
          <Navegador />
        </Container>
      </body>
    </html>
  );
}
