"use client";

import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const UbaVerdeGrid = () => {
  const theme = useTheme();
  const isTabletOrBigger = useMediaQuery(theme.breakpoints.up("sm")); // Detecta tablet o más grande
  const isMobile = useMediaQuery(theme.breakpoints.down("xs")); // Detecta dispositivos móviles

  return (
    <Grid container spacing={0} style={{ height: "100vh" }}>
      {/* Primera fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#ffffff" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#dcde9f" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />
      {isTabletOrBigger && (
        <Grid item sm={1} style={{ backgroundColor: "#91a661" }} />
      )}

      {/* Segunda fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#dcde9f" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#91a661" }} />
      {isTabletOrBigger && (
        <Grid item sm={1} style={{ backgroundColor: "#D9D4A6" }} />
      )}

      {/* Tercera fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#91a661" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#ffffff" }} />
      {isTabletOrBigger && (
        <Grid item sm={1} style={{ backgroundColor: "#ffffff" }} />
      )}

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
            variant={isMobile ? "h4" : "h3"}
            align="center"
            style={{ color: "#333333", fontWeight: "1000" }}
          >
            .UBA
            <span style={{ color: "#8AAA3F", fontWeight: "400" }}>VERDE</span>
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            align="center"
            style={{ color: "#666666" }}
          >
            Gestión y educación ambiental en la UBA
          </Typography>
        </Box>
      </Grid>

      {/* Quinta fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#ffffff" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#A8B575" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />
      {isTabletOrBigger && (
        <Grid item sm={1} style={{ backgroundColor: "#dcde9f" }} />
      )}

      {/* Sexta fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#91a661" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#dcde9f" }} />
      {isTabletOrBigger && (
        <Grid item sm={1} style={{ backgroundColor: "#A8B575" }} />
      )}

      {/* Séptima fila */}
      <Grid item xs={4} sm={3} style={{ backgroundColor: "#446129" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#dcde9f" }} />
      <Grid item xs={4} sm={4} style={{ backgroundColor: "#ffffff" }} />
      {isTabletOrBigger && (
        <Grid item sm={1} style={{ backgroundColor: "#ffffff" }} />
      )}
    </Grid>
  );
};

export default UbaVerdeGrid;
