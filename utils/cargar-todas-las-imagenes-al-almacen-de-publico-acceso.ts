import path from "node:path";
import fs from "node:fs";

export const cargarImagenesAlAlmacen = ({
  carpetaConImagenesATratar,
  carpetaDestino,
}: {
  carpetaConImagenesATratar: string;
  carpetaDestino: string;
}) => {
  console.table({
    carpetaConImagenesATratar,
    carpetaDestino,
  });
  const direccionAbsolutaDeLaCarpataContenedora = path.join(
    process.cwd(),
    carpetaConImagenesATratar,
  );

  const imagenesEncontradas = fs
    .readdirSync(direccionAbsolutaDeLaCarpataContenedora)
    .filter((nombre) => nombre.includes(".png"))
    .map((nombreDeUnaImagenEncontrada) => {
      return {
        direccion: path.join(
          direccionAbsolutaDeLaCarpataContenedora,
          nombreDeUnaImagenEncontrada,
        ),
        nombre: nombreDeUnaImagenEncontrada,
      };
    });

  imagenesEncontradas.forEach((imagen) => {
    fs.mkdirSync(path.join(process.cwd(), carpetaDestino));
    fs.copyFileSync(
      imagen.direccion,
      path.join(process.cwd(), carpetaDestino, imagen.nombre),
    );
  });
};

cargarImagenesAlAlmacen({
  carpetaConImagenesATratar: "manuales/assets",
  carpetaDestino: "app/content/tratamiento-de-residuos",
});

cargarImagenesAlAlmacen({
  carpetaConImagenesATratar: "novedades/assets",
  carpetaDestino: "app/content/novedades",
});
