import matter from "gray-matter";
import path from "path";
import fs from "fs";
import z from "zod";

export const obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta = (
  carpetaConArticulosATratar: string
): MetadatosDeUnArticulo[] => {
  const datosEnCrudoDeCadaArticulo = obtenerDatosDeCadaArticulo(
    carpetaConArticulosATratar
  );
  const metadatosDeCadaArticulo = parsearMetadatosDeCadaArticulo(
    datosEnCrudoDeCadaArticulo
  );
  return metadatosDeCadaArticulo;
};

const EsquemaParaLosMetadatosDeUnArticulo = z.object({
  titulo: z.string(),
  descripcion: z.string(),
  portada: z.string(),
  archivo: z.string(),
});

export type MetadatosDeUnArticulo = z.infer<
  typeof EsquemaParaLosMetadatosDeUnArticulo
>;

const obtenerDatosDeCadaArticulo = (
  carpetaConArticulosATratar: string
): any[] => {
  const direccionCompletaDeLaCarpetaContenedora = path.join(
    process.cwd(),
    carpetaConArticulosATratar
  );
  const nombresDeCadaUnoDeLosArchivosEncontrados = fs
    .readdirSync(direccionCompletaDeLaCarpetaContenedora)
    .filter((nombre) => nombre.includes(".mdx"));

  return nombresDeCadaUnoDeLosArchivosEncontrados.map((nombreDeUnArticulo) => {
    const direccionCompletaDelArticulo = path.join(
      direccionCompletaDeLaCarpetaContenedora,
      nombreDeUnArticulo
    );
    const contenido = fs.readFileSync(direccionCompletaDelArticulo, "utf8");
    const { data } = matter(contenido);
    return { ...data, archivo: nombreDeUnArticulo.replace(/\.mdx$/, "") };
  });
};

const parsearMetadatosDeCadaArticulo = (
  metadatosEnCrudo: any[]
): MetadatosDeUnArticulo[] => {
  return metadatosEnCrudo.filter((matadatosAParsearDeUnArticulo) => {
    const { success: metadatosCorrectamenteFormados } =
      EsquemaParaLosMetadatosDeUnArticulo.safeParse(
        matadatosAParsearDeUnArticulo
      );
    return metadatosCorrectamenteFormados;
  });
};

export default {
  obtenerMetadatos: obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta,
};
