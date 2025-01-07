import ContenedorResumenes from "@/components/indice-de-articulos/components/ContendorDeTarjetasConResumenDeArticulos";
import TarjetaDestacadaConResumenDeArticulo from "@/components/indice-de-articulos/components/TarjetaDestacadaConResumenDeArticulo";
import GaleriaParaLasTarjetasConResumenDeArticulos from "@/components/indice-de-articulos/components/GaleriaParaLasTarjetasConResumenDeArticulos";
import TarjetaConResumenDeArticulo from "@/components/indice-de-articulos/components/TarjetaConResumenDeArticulo";
import { obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta } from "@/utils/obtener-metadatos-de-todos-los-articulos-en-una-carpeta";

const IndiceDeArticulos = ({
  encabezadoParaLaGaleria,
  carpetaConContenido,
  rutaBaseParaEnlaces,
}: PropiedadesDelIndiceDeArticulos) => {
  const [principal, ...otros] =
    obtenerMetadatosDeTodosLosArticulosEnUnaCarpeta(carpetaConContenido);

  return (
    <ContenedorResumenes>
      <TarjetaDestacadaConResumenDeArticulo
        {...principal}
        archivo={`${rutaBaseParaEnlaces}/${principal.archivo}`}
      />
      <GaleriaParaLasTarjetasConResumenDeArticulos
        encabezado={encabezadoParaLaGaleria}
      >
        {otros.map((articulo) => (
          <TarjetaConResumenDeArticulo
            {...articulo}
            archivo={`${rutaBaseParaEnlaces}/${articulo.archivo}`}
            key={articulo.archivo}
          />
        ))}
      </GaleriaParaLasTarjetasConResumenDeArticulos>
    </ContenedorResumenes>
  );
};

type PropiedadesDelIndiceDeArticulos = {
  carpetaConContenido: string;
  encabezadoParaLaGaleria: string;
  rutaBaseParaEnlaces: string;
};

export default IndiceDeArticulos;
