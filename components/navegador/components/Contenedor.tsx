import { Stack } from "@mui/material";
import { ReactNode } from "react";

const Contenedor = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      direction={"row"}
      component="footer"
      bottom={"24px"}
      left={0}
      right={0}
      justifyContent={"center"}
      style={{
        position: "fixed",
      }}
    >
      <Stack
        spacing={"24px"}
        direction="row"
        bgcolor={"#91A661"}
        sx={{
          border: "none",
          borderRadius: "32px",
          boxShadow: "0px 4px 4px 0px #0006",
          padding: "16px 24px",
          justifyContent: "center",
          "& button": {
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
            },
          },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default Contenedor;
