import { Stack } from "@mui/material";
import Botones from "./iconos/Botones";

const Navegador = () => {
  return (
    <Stack
      direction={"row"}
      component="footer"
      position="absolute"
      bottom={16}
      left={0}
      right={0}
      justifyContent={"center"}
    >
      <Stack
        spacing={"24px"}
        direction="row"
        bgcolor={"#91A661"}
        sx={{
          borderRadius: "32px",
          boxShadow: "0px 4px 4px 0px #0007",
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
        <Botones />
      </Stack>
    </Stack>
  );
};

export default Navegador;
