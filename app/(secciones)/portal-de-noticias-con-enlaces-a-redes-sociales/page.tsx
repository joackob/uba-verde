import IndiceDeArticulos from "@/components/indice-de-articulos";

const page = () => {
  return (
    <IndiceDeArticulos
      encabezadoParaLaGaleria="Últimas novedades"
      carpetaConContenido={"novedades"}
      rutaBaseParaEnlaces={"/novedades"}
    />
  );
};

export default page;
