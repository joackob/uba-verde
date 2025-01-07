import React, { ReactNode } from "react";
import { Stack } from "@mui/material";

const ContendorDeTarjetasConResumenDeArticulos = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Stack spacing={"16px"} my={"16px"}>
      {children}
    </Stack>
  );
};

export default ContendorDeTarjetasConResumenDeArticulos;
