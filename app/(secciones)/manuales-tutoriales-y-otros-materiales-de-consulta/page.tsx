import IndiceDeArticulos from "@/components/indice-de-articulos";

const page = () => {
  return (
    <IndiceDeArticulos
      encabezadoParaLaGaleria={"Información que te puede interesar"}
      carpetaConContenido={"manuales"}
      rutaBaseParaEnlaces={
        "/manuales-tutoriales-y-otros-materiales-de-consulta"
      }
    />
  );
};

export default page;
