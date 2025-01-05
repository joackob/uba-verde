import { Card, CardContent, Typography } from "@mui/material";

const TarjetaResumen = ({
  titulo,
  descripcion,
  url,
}: {
  titulo: string;
  descripcion: string;
  url: string;
}) => {
  return (
    <Card
      elevation={1}
      component={"a"}
      href={url
        .replace(/\.html$/, "")
        .replace(/\/server/, "")
        .replace(/\/app/, "")
        .replace(/\/content/, "")}
      sx={{ display: "flex", backgroundColor: "transparent" }}
    >
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
          dangerouslySetInnerHTML={{ __html: `${descripcion} ...` }}
        />
      </CardContent>
    </Card>
  );
};

export default TarjetaResumen;
