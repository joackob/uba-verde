import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const obtenerContenidosDeTodosLosArticulosEnUnaCarpeta = (
  carpetaConArticulosATratar: string
) => {
  const direccionAbsolutaDeLaCarpateContenedora = path.join(
    process.cwd(),
    carpetaConArticulosATratar
  );
  const nombresDeCadaUnoDeLosArticulosEncontrados = fs
    .readdirSync(direccionAbsolutaDeLaCarpateContenedora)
    .filter((nombre) => nombre.includes(".mdx"));

  const articulosConSuContenido = nombresDeCadaUnoDeLosArticulosEncontrados.map(
    (nombreDeUnArticuloEncontrado) => {
      const direccionAbsolutaDelArticuloATratar = path.join(
        direccionAbsolutaDeLaCarpateContenedora,
        nombreDeUnArticuloEncontrado
      );
      const contenidoEnBruto = fs.readFileSync(
        direccionAbsolutaDelArticuloATratar,
        "utf-8"
      );
      const { content: contenido } = matter(contenidoEnBruto);
      return {
        articulo: nombreDeUnArticuloEncontrado.replace(/\.mdx$/, ""),
        contenido,
      };
    }
  );

  return articulosConSuContenido;
};

export type ContenidoDeUnArticulo = ReturnType<
  typeof obtenerContenidosDeTodosLosArticulosEnUnaCarpeta
>[0];
