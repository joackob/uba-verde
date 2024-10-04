import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import TarjetaResumenPrincipal from "@/components/resumen/TarjetaResumenPrincipal";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import TarjetaResumen from "@/components/resumen/TarjetaResumen";
import resumenes from "@/utils/resumenes";

type PaginaConResumenesProps = {
  carpetaConContenido: string;
  seccionAAnexarLosArticulos: string;
  encabezadoParaLaGaleria: string;
};

const PaginaConResumenes = ({
  encabezadoParaLaGaleria,
  carpetaConContenido: contentDir,
  seccionAAnexarLosArticulos: pathname,
}: PaginaConResumenesProps) => {
  const [principal, ...otros] = resumenes.obtenerMetadatos(contentDir);

  return (
    <ContenedorResumenes>
      <TarjetaResumenPrincipal
        {...principal}
        slug={`${pathname}/${principal.slug}`}
      />
      <GaleriaResumenes encabezado={encabezadoParaLaGaleria}>
        {otros.map((articulo) => (
          <TarjetaResumen
            {...articulo}
            slug={`${pathname}/${articulo.slug}`}
            key={articulo.slug}
          />
        ))}
      </GaleriaResumenes>
    </ContenedorResumenes>
  );
};

export default PaginaConResumenes;
