import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import TarjetaResumenPrincipal from "@/components/resumen/TarjetaResumenPrincipal";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import TarjetaResumen from "@/components/resumen/TarjetaResumen";
import resumenes from "@/utils/resumenes";

type PaginaConResumenesProps = {
  contentDir: string;
  pathname: string;
};

const PaginaConResumenes = ({
  contentDir,
  pathname,
}: PaginaConResumenesProps) => {
  const [principal, ...otros] = resumenes.obtenerDesde(contentDir);

  return (
    <ContenedorResumenes>
      <TarjetaResumenPrincipal
        {...principal}
        slug={`${pathname}/${principal.slug}`}
      />
      <GaleriaResumenes>
        {otros.map((articulo) => (
          <TarjetaResumen
            {...articulo}
            slug={`${pathname}/${principal.slug}`}
            key={articulo.slug}
          />
        ))}
      </GaleriaResumenes>
    </ContenedorResumenes>
  );
};

export default PaginaConResumenes;
