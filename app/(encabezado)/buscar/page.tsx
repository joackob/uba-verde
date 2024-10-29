"use client";
import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import TarjetaResumen from "@/components/resumen/TarjetaResumen";
import { Resumen } from "@/utils/resumenes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const resultados: Resumen[] = [];

const page = () => {
  const params = useSearchParams();
  const consulta = params.get("consulta") || "";
  // const [resultados, setResultados] = useState<Resumen>([]);
  //
  useEffect(() => {
    (async () => {
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

      // @ts-expect-error pagefind is not defined
      if (window.pagefind) {
        console.log(consulta);
        // @ts-expect-error pagefind is not defined
        const search = await window.pagefind.search(consulta);
        console.log(search);
        // setResults(search.results);
      }
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
            slug={`/${articulo.slug}`}
            key={articulo.slug}
          />
        ))}
      </GaleriaResumenes>
    </ContenedorResumenes>
  );
};

export default page;
