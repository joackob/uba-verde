import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const UbaVerdeGrid = () => {
  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {/* Primera fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#ffffff" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#dcde9f" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />

      {/* Segunda fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#dcde9f" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#91a661" }} />

      {/* Tercera fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#91a661" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#ffffff" }} />

      {/* Cuarta fila: Logo y texto */}
      <Grid item xs={12}>
        <Box
          style={{ padding: "2vh" }}
          alignItems="center"
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            align="center"
            style={{ color: "#333333", fontWeight: 1000, fontSize: "64px" }}
          >
            .UBA
            <span
              style={{ color: "#8AAA3F", fontWeight: 400, fontSize: "64px" }}
            >
              VERDE
            </span>
          </Typography>
          <Typography
            align="center"
            style={{ color: "#666666", fontWeight: 600 }}
          >
            Gestión y educación ambiental en la UBA
          </Typography>
        </Box>
      </Grid>

      {/* Quinta fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#ffffff" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#A8B575" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />

      {/* Sexta fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#91a661" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#dcde9f" }} />

      {/* Séptima fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#dcde9f" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#ffffff" }} />
    </Grid>
  );
};

export default UbaVerdeGrid;
