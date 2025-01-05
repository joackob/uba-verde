import PaginaConResumenes from "@/components/resumen/PaginaResumenes";

const page = () => {
  return (
    <PaginaConResumenes
      encabezadoParaLaGaleria={"Información que te puede interesar"}
      carpetaConContenido={"manuales"}
      rutaBaseParaEnlaces={
        "/manuales-tutoriales-y-otros-materiales-de-consulta"
      }
    />
  );
};

export default page;
