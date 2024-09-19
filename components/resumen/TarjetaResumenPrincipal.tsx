import React from "react";
import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";

const TarjetaResumenPrincipal = () => {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={
          "https://t2.uc.ltmcdn.com/es/posts/4/2/5/salario_47524_2_orig.jpg"
        }
        alt="Imagen de la card"
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "white",
          textAlign: "start",
        }}
      >
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 800,
            fontSize: "22px",
          }}
        >
          titulo
        </Typography>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 800,
            fontSize: "16px",
          }}
        >
          Descripción
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TarjetaResumenPrincipal;
