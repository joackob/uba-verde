import ContenedorManuales from "@/components/resumen/ContenedorResumenes";
import TarjetaManualPrincipal from "@/components/resumen/TarjetaResumenPrincipal";
import GaleriaManuales from "@/components/resumen/GaleriaResumenes";
import TarjetaManual from "@/components/resumen/TarjetaResumen";

const page = () => {
  return (
    <ContenedorManuales>
      <TarjetaManualPrincipal />
      <GaleriaManuales>
        <TarjetaManual />
      </GaleriaManuales>
    </ContenedorManuales>
  );
};

export default page;
