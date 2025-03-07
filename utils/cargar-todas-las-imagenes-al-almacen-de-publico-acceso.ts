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
  const imagenesEncontradas = intentarObtenerTodasLasImagenesDeLaCarpeta(
    carpetaConImagenesATratar,
  );
  intentarCargarLasImagenes({
    imagenes: imagenesEncontradas,
    almacen: carpetaDestino,
  });
};

const intentarObtenerTodasLasImagenesDeLaCarpeta = (carpeta: string) => {
  try {
    const direccionAbsolutaDeLaCarpataContenedora = path.join(
      process.cwd(),
      carpeta,
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

    return imagenesEncontradas;
  } catch (error) {
    console.error(
      `Error al intentar obtener las imágenes de la carpeta ${carpeta}`,
    );
    return [];
  }
};

const intentarCargarLasImagenes = ({
  imagenes,
  almacen,
}: {
  imagenes: ReturnType<typeof intentarObtenerTodasLasImagenesDeLaCarpeta>;
  almacen: string;
}) => {
  try {
    // si no existe, crear la carpeta destino
    fs.mkdirSync(path.join(process.cwd(), almacen), { recursive: true });

    imagenes.forEach((imagen) => {
      fs.copyFileSync(
        imagen.direccion,
        path.join(process.cwd(), almacen, imagen.nombre),
      );
    });
  } catch (error) {
    console.error("Error al intentar cargar las imágenes");
  }
};

cargarImagenesAlAlmacen({
  carpetaConImagenesATratar: "manuales/assets",
  carpetaDestino: "public/assets",
});

cargarImagenesAlAlmacen({
  carpetaConImagenesATratar: "novedades/assets",
  carpetaDestino: "public/assets",
});
