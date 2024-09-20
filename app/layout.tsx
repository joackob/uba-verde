import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navegador from "@/components/navegador";
import { Container } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>{/* Aquí puedes incluir elementos <meta>, <link>, etc. */}</head>
      <body>
        <Container maxWidth={"sm"}>
          {children}
          <Navegador />
        </Container>
      </body>
    </html>
  );
}
