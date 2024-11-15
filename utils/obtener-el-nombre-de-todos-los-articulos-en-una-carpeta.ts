import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const obtenerElNombreDeTodosLosArticulosEnUnaCarpeta = (
  carpetaConArticulosATratar: string
) => {
  const direccionAbsolutaDeLaCarpateContenedora = path.join(
    process.cwd(),
    carpetaConArticulosATratar
  );
  const nombresDeCadaUnoDeLosArticulosEncontrados = fs
    .readdirSync(direccionAbsolutaDeLaCarpateContenedora)
    .filter((nombre) => nombre.includes(".mdx"));

  const articulosConSuNombre = nombresDeCadaUnoDeLosArticulosEncontrados.map(
    (nombreDeUnArticuloEncontrado) => {
      return {
        articulo: nombreDeUnArticuloEncontrado.replace(/\.mdx$/, ""),
      };
    }
  );

  return articulosConSuNombre;
};

export type NombreDeUnArticulo = ReturnType<
  typeof obtenerElNombreDeTodosLosArticulosEnUnaCarpeta
>[0];
