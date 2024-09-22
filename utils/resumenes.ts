import matter from "gray-matter";
import path from "path";
import fs from "fs";
import z from "zod";

const ResumenParser = z.object({
  titulo: z.string(),
  descripcion: z.string(),
  portada: z.string(),
  slug: z.string(),
});

export type Resumen = z.infer<typeof ResumenParser>;

export const obtenerMetadatos = (dir: string): Resumen[] => {
  try {
    const contenido = obtenerContenidoDeCadaArticulo(dir);
    const metadatos = parsearMetadatos(contenido);
    return metadatos;
  } catch (error) {
    console.error("Error al obtener los resúmenes de los artículos", error);
    return [];
  }
};

const obtenerContenidoDeCadaArticulo = (dir: string) => {
  const directorioConArticulos = path.join(process.cwd(), dir);
  const nombresDeArticulos = fs.readdirSync(directorioConArticulos);
  return nombresDeArticulos.map((articulo) => {
    const direccionCompleta = path.join(directorioConArticulos, articulo);
    const contenido = fs.readFileSync(direccionCompleta, "utf8");
    const { data } = matter(contenido);
    return { ...data, slug: articulo.replace(/\.mdx$/, "") };
  });
};

const parsearMetadatos = (
  metadatos: ReturnType<typeof obtenerContenidoDeCadaArticulo>
): z.infer<typeof ResumenParser>[] => {
  return metadatos.map((metadato) => {
    const metadatoParseado = ResumenParser.parse(metadato);
    return metadatoParseado;
  });
};

export default { obtenerMetadatos };
