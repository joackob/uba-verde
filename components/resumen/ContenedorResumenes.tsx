import React, { ReactNode } from "react";
import { Stack } from "@mui/material";

const ContendorResumenes = ({ children }: { children: ReactNode }) => {
  return (
    <Stack spacing={"16px"} my={"16px"}>
      {children}
    </Stack>
  );
};

export default ContendorResumenes;
