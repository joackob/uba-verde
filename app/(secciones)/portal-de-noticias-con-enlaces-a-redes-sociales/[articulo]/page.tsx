export const dynamicParams = false;
import { obtenerElNombreDeTodosLosArticulosEnUnaCarpeta } from "@/utils/obtener-el-nombre-de-todos-los-articulos-en-una-carpeta";
import { lazy } from "react";

const Page = async ({ params }: { params: Promise<{ articulo: string }> }) => {
  const { articulo } = await params;
  const Contenido = lazy(() => import(`@/novedades/${articulo}.mdx`));
  return <Contenido />;
};

export const generateStaticParams = () => {
  return obtenerElNombreDeTodosLosArticulosEnUnaCarpeta("novedades").map(
    ({ articulo }) => ({
      slug: articulo,
    }),
  );
};

export default Page;
