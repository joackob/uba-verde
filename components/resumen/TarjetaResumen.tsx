import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const TarjetaResumen = () => {
  return (
    <Card
      elevation={0}
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
        image={
          "https://buenosaires.gob.ar/sites/default/files/inline-images/WhatsApp%20Image%202024-06-18%20at%2016.26.04.jpeg"
        }
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
          Titulo de noticia
        </Typography>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: "12px",
            color: "#313237",
          }}
        >
          dsadsadasd
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TarjetaResumen;
