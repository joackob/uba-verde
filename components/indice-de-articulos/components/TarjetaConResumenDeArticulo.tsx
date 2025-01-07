import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { MetadatosDeUnArticulo } from "@/utils/obtener-metadatos-de-todos-los-articulos-en-una-carpeta";

const TarjetaConResumenDeArticulo = ({
  titulo,
  descripcion,
  portada,
  archivo: slug,
}: MetadatosDeUnArticulo) => {
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
          {descripcion.split(" ").slice(0, 16).join(" ")}...
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TarjetaConResumenDeArticulo;
