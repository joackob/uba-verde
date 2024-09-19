import { ReactNode } from "react";
import { Typography, Stack } from "@mui/material";

const GaleriaResumenes = ({ children }: { children: ReactNode }) => {
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
        Ultimas Noticias
      </Typography>
      {children}
    </Stack>
  );
};

export default GaleriaResumenes;
