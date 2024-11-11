"use client";
import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";
import TarjetaParaElResultadoDeUnaBusqueda from "./components/TarjetaParaElResultadoDeUnaBusqueda";

const page = () => {
  const params = useSearchParams();
  const consulta = params.get("consulta") || "";
  const [resultados, setResultados] = useState<ResultadosEnCrudoDeUnaBusqueda>(
    [],
  );

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
      const { data, success } = EsquemaParaLosResultadosEnCrudo.safeParse(
        await Promise.all(
          search.results.map(async (result: any) => {
            const data = await result.data();
            console.log(data);
            return {
              titulo: data.meta.title,
              descripcion: data.excerpt,
              url: data.url,
            };
          }),
        ),
      );

      if (success) {
        setResultados(data);
      }
    })();
  }, [consulta]);

  return (
    <ContenedorResumenes>
      <GaleriaResumenes
        encabezado={`Se encontraron ${resultados.length} resultados para la consulta: ${consulta}`}
      >
        {resultados.map((resultado) => (
          <TarjetaParaElResultadoDeUnaBusqueda
            key={resultado.titulo}
            titulo={resultado.titulo}
            descripcion={resultado.descripcion}
            url={resultado.url}
          />
        ))}
      </GaleriaResumenes>
    </ContenedorResumenes>
  );
};

const EsquemaParaLosResultadosEnCrudo = z.array(
  z.object({
    titulo: z.string(),
    descripcion: z.string(),
    url: z.string(),
  }),
);

type ResultadosEnCrudoDeUnaBusqueda = z.infer<
  typeof EsquemaParaLosResultadosEnCrudo
>;

export default page;
