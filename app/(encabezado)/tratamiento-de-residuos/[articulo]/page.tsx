export const dynamicParams = false;

import { MDXRemote } from "next-mdx-remote/rsc";
import { customComponents } from "@/mdx-components";
import { obtenerContenidosDeTodosLosArticulosEnUnaCarpeta } from "@/utils/obtener-contenido-de-todos-los-articulos-en-una-carpeta";
import { obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta } from "@/utils/obtener-metadatos-de-todos-los-articulos-en-una-carpeta";

const contenidoDeTodosLosArticulos =
  obtenerContenidosDeTodosLosArticulosEnUnaCarpeta("manuales");

const metadataDeTodosLosArticulos =
  obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta("manuales");

const Page = ({ params }: { params: { articulo: string } }) => {
  const { articulo } = params;
  const contenido = encontrarArticuloVinculado(articulo)?.contenido;
  const metadata = encontrarMetadatosVinculados(articulo);
  return <MDXRemote source={contenido!} components={customComponents} />;
};

const encontrarArticuloVinculado = (articulo: string) => {
  return contenidoDeTodosLosArticulos.find(
    (contenidoDeUnArticulo) => contenidoDeUnArticulo.articulo === articulo
  );
};

const encontrarMetadatosVinculados = (articulo: string) => {
  return metadataDeTodosLosArticulos.find(
    (metadataDeUnArticulo) => metadataDeUnArticulo.archivo === articulo
  );
};

export const generateStaticParams = () => {
  return contenidoDeTodosLosArticulos.map((contenido) => ({
    articulo: contenido.articulo,
  }));
};

export const generateMetadata = ({
  params,
}: {
  params: { articulo: string };
}) => {
  const articulo = encontrarMetadatosVinculados(params.articulo);
  return {
    titulo: articulo?.titulo,
  };
};

export default Page;
