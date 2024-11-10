import PaginaConResumenes from "@/components/resumen/PaginaResumenes";

const page = () => {
  return (
    <PaginaConResumenes
      encabezadoParaLaGaleria={"Información que te puede interesar"}
      carpetaConContenido={"manuales"}
      rutaBaseParaEnlaces={"/tratamiento-de-residuos"}
    />
  );
};

export default page;
