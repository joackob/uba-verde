import ContenedorNovedades from "@/components/resumen/ContenedorResumenes";
import TarjetaNoticiaPrincipal from "@/components/resumen/TarjetaResumenPrincipal";
import GaleriaNoticias from "@/components/resumen/GaleriaResumenes";
import TarjetaNoticia from "@/components/resumen/TarjetaResumen";

const page = () => {
  return (
    <ContenedorNovedades>
      <TarjetaNoticiaPrincipal />
      <GaleriaNoticias>
        <TarjetaNoticia />
      </GaleriaNoticias>
    </ContenedorNovedades>
  );
};

export default page;
