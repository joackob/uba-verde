import Search from "@/components/busqueda/search";
import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <Search />
      {children}
      <Box component={"footer"} style={{ margin: "4vh 0px 8vh 0px" }}>
        <Typography
          textAlign={"center"}
          sx={{
            color: "#313237",
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            marginBottom: "16px",
          }}
        >
          Hecho con 💕 por ETEC-UBA
        </Typography>
      </Box>
    </Suspense>
  );
}
