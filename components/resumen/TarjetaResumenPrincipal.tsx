import { Card, CardMedia, CardContent, Typography, Stack } from "@mui/material";
import { MetadatosDeUnArticulo } from "@/utils/obtener-metadatos-de-todos-los-articulos-en-una-carpeta";

const TarjetaResumenPrincipal = ({
  titulo,
  descripcion,
  portada,
  archivo: slug,
}: MetadatosDeUnArticulo) => {
  return (
    <Card
      component={"a"}
      href={slug}
      sx={{
        position: "relative",
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={portada}
        alt="Imagen de la tarjeta"
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          color: "white",
          textAlign: "start",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 800,
            fontSize: "22px",
          }}
        >
          {titulo}
        </Typography>
        <Typography
          style={{
            fontFamily: "Roboto",
            fontWeight: 800,
            fontSize: "16px",
          }}
        >
          {descripcion.split(" ").slice(0, 16).join(" ")}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TarjetaResumenPrincipal;
