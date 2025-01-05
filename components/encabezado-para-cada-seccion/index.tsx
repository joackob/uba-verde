"use client";
import { Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const EncabezadoParaCadaSeccionDelSitio = ({
  children,
}: {
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const encabezados = new Map<string, string>();
  encabezados.set(
    "consultas-en-articulos-y-noticias",
    "Consultas y sus resultados"
  );
  encabezados.set(
    "manuales-tutoriales-y-otros-materiales-de-consulta",
    "Manuales, tutoriales y otros materiales"
  );
  encabezados.set(
    "portal-de-noticias-con-sus-enlaces-a-redes-sociales",
    "Portal de noticias"
  );
  encabezados.set("mapa-de-las-sedes-uba-verde", "Mapa de las sedes UBA Verde");
  return (
    <Stack spacing={"16px"} mt={"32px"} mb={"16px"}>
      <Typography
        style={{
          color: "#313237",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "28px",
          textAlign: "left",
        }}
      >
        {encabezados.get(pathname.split("/")[1])}
      </Typography>
      {children}
    </Stack>
  );
};

export default EncabezadoParaCadaSeccionDelSitio;
