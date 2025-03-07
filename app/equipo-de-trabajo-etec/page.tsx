import { Box, Typography, Stack } from "@mui/material";

const integrantes = [
  { nombre: "Nicolas Ferreiros", email: "nferreiros@etec.uba.ar" },
  { nombre: "Agostina Acuña", email: "aacunamarichal@etec.uba.ar" },
  { nombre: "Facundo Caballi", email: "facundocaballi@gmail.com" },
  { nombre: "Tiago Nuñez", email: "tnunez17@gmail.com" },
];

const lideres = [
  { nombre: "Joaquin Blanco", email: "jblanco@etec.uba.ar" },
  { nombre: "Federico Villace", email: "fvillace@etec.uba.ar" },
];

const EspacioNosotros = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "16px",
        pb: "80px", // Espacio extra abajo
      }}
    >
      {/* H1 Personalizable */}
      <Typography
        component="h1"
        sx={{ fontSize: "32px", fontWeight: "bold", mb: 2 }}
      >
        📌 Equipo de trabajo
      </Typography>

      {/* Sección de Integrantes */}
      <Typography variant="h4" fontWeight="bold" gutterBottom color=" #729e66 ">
        Integrantes
      </Typography>
      <Stack spacing={2} sx={{ width: "100%", maxWidth: "400px" }}>
        {integrantes.map((integrante, index) => (
          <Box key={index} textAlign="center">
            <Typography variant="h6">{integrante.nombre}</Typography>
            <Typography variant="body2" color="text.secondary">
              {integrante.email}
            </Typography>
          </Box>
        ))}
      </Stack>

      {}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        mt={4}
        color=" #729e66 "
      >
        Líderes de Equipo
      </Typography>
      <Stack spacing={2} sx={{ width: "100%", maxWidth: "400px", mb: 6 }}>
        {lideres.map((lider, index) => (
          <Box key={index} textAlign="center">
            <Typography variant="h6">{lider.nombre}</Typography>
            <Typography variant="body2" color="text.secondary">
              {lider.email}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default EspacioNosotros;
