import PaginaConResumenes from "@/components/resumen/PaginaResumenes";

const page = () => {
  return (
    <PaginaConResumenes
      encabezadoParaLaGaleria="Últimas novedades"
      carpetaConContenido={"novedades"}
      rutaBaseParaEnlaces={"/novedades"}
    />
  );
};

export default page;
