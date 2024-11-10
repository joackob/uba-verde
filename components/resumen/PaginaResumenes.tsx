import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import TarjetaResumenPrincipal from "@/components/resumen/TarjetaResumenPrincipal";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import TarjetaResumen from "@/components/resumen/TarjetaResumen";
import { obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta } from "@/utils/obtener-metadatos-de-todos-los-articulos-en-una-carpeta";

type PaginaConResumenesProps = {
  carpetaConContenido: string;
  encabezadoParaLaGaleria: string;
  rutaBaseParaEnlaces: string;
};

const PaginaConResumenes = ({
  encabezadoParaLaGaleria,
  carpetaConContenido,
  rutaBaseParaEnlaces,
}: PaginaConResumenesProps) => {
  const [principal, ...otros] =
    obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta(carpetaConContenido);

  return (
    <ContenedorResumenes>
      <TarjetaResumenPrincipal
        {...principal}
        archivo={`${rutaBaseParaEnlaces}/${principal.archivo}`}
      />
      <GaleriaResumenes encabezado={encabezadoParaLaGaleria}>
        {otros.map((articulo) => (
          <TarjetaResumen
            {...articulo}
            archivo={`${rutaBaseParaEnlaces}/${articulo.archivo}`}
            key={articulo.archivo}
          />
        ))}
      </GaleriaResumenes>
    </ContenedorResumenes>
  );
};

export default PaginaConResumenes;
