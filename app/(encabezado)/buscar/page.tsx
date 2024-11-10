"use client";
import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import TarjetaResumen from "@/components/resumen/TarjetaResumen";
import { MetadatosDeUnArticulo } from "@/utils/obtener-metadatos-de-todos-los-articulos-en-una-carpeta";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const params = useSearchParams();
  const consulta = params.get("consulta") || "";
  const [resultados, setResultados] = useState<MetadatosDeUnArticulo[]>([]);
  //
  useEffect(() => {
    (async () => {
      // const pagefind = await import('@/public/pagefind/pagefind.js');
      // pagefind.search(consulta);

      // @ts-expect-error pagefind is not defined
      if (typeof window.pagefind === "undefined") {
        try {
          // @ts-expect-error pagefind is not defined
          window.pagefind = await import(
            // @ts-expect-error pagefind.js generated after build
            /* webpackIgnore: true */ "/pagefind/pagefind.js"
          );
        } catch (e) {
          // @ts-expect-error pagefind is not defined
          window.pagefind = {
            search: () => ({
              results: [
                {
                  titulo: "Error",
                  descripcion: "No se pudo cargar la búsqueda",
                  portada: "/img/404.png",
                  slug: "/404",
                },
              ],
            }),
          };
        }
      }
      console.log(consulta);
      // @ts-expect-error pagefind is not defined
      const search = await window.pagefind.search(consulta);
      console.log(search.results);
      // setResults(search.results);
    })();
  }, [consulta]);

  const cantidadDeResultados = resultados.length;

  return (
    <ContenedorResumenes>
      <GaleriaResumenes
        encabezado={`Se encontraron ${cantidadDeResultados} resultados para la consulta: ${consulta}`}
      >
        {resultados.map((articulo) => (
          <TarjetaResumen
            {...articulo}
            archivo={`/${articulo.archivo}`}
            key={articulo.archivo}
          />
        ))}
      </GaleriaResumenes>
    </ContenedorResumenes>
  );
};

export default page;
