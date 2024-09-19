import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Resumen } from "@/utils/resumenes";

const TarjetaResumen = ({ titulo, descripcion, portada, slug }: Resumen) => {
  return (
    <Card
      elevation={0}
      component={"a"}
      href={slug}
      sx={{ display: "flex", backgroundColor: "transparent" }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 120,
          height: 120,
          objectFit: "cover",
          borderRadius: "8px",
        }}
        image={portada}
        alt={"barrendero"}
      />
      <CardContent>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 500,
            fontSize: "14px",
            color: "#313237",
          }}
        >
          {titulo}
        </Typography>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "12px",
            color: "#313237",
          }}
        >
          {descripcion}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TarjetaResumen;
