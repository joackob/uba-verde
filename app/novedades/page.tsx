import PaginaConResumenes from "@/components/resumen/PaginaResumenes";

const page = () => {
  return (
    <PaginaConResumenes
      encabezadoParaLaGaleria="Últimas novedades"
      carpetaConContenido={"content"}
      seccionAAnexarLosArticulos={"/novedades"}
    />
  );
};

export default page;
