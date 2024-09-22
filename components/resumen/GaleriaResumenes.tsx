import { ReactNode } from "react";
import { Typography, Stack } from "@mui/material";

const GaleriaResumenes = ({
  encabezado,
  children,
}: {
  encabezado: string;
  children: ReactNode;
}) => {
  return (
    <Stack spacing={"16px"}>
      <Typography
        style={{
          fontFamily: "Roboto",
          fontWeight: 700,
          fontSize: "24px",
          color: "#313237",
        }}
      >
        {encabezado}
      </Typography>
      {children}
    </Stack>
  );
};

export default GaleriaResumenes;
