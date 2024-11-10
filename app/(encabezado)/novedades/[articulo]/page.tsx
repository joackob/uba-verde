export const dynamicParams = false;

import { MDXRemote } from "next-mdx-remote/rsc";
import { customComponents } from "@/mdx-components";
import { obtenerContenidosDeTodosLosArticulosEnUnaCarpeta } from "@/utils/obtener-contenido-de-todos-los-articulos-en-una-carpeta";

const contenidoDeTodosLosArticulos =
  obtenerContenidosDeTodosLosArticulosEnUnaCarpeta("novedades");

const Page = async ({ params }: { params: { articulo: string } }) => {
  const { articulo } = params;
  const contenido = contenidoDeTodosLosArticulos.find(
    (contenidoDeUnArticulo) => contenidoDeUnArticulo.articulo === articulo,
  )?.contenido;
  return <MDXRemote source={contenido!} components={customComponents} />;
};

export const generateStaticParams = () => {
  return contenidoDeTodosLosArticulos.map((contenido) => ({
    articulo: contenido.articulo,
  }));
};

export default Page;
