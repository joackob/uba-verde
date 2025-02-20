import { Box, Typography } from "@mui/material";

const EtecPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5", // Fondo gris claro
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Hecho con Amor ❤️
      </Typography>
      <Typography variant="h6">
        Gracias por visitar nuestra página. ¡Esperamos que te guste!
      </Typography>
    </Box>
  );
};

export default EtecPage;
