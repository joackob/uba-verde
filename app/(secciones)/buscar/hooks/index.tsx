"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

export const useBusquedaEnArticulos = () => {
  const consulta = useSearchParams().get("consulta") || "";
  const [estadoDeLaConsulta, cambiarEstadoDeLaConsulta] = useState<
    "cargando" | "con problemas" | "finalizado"
  >("cargando");
  const [resultados, cargarResultados] =
    useState<ResultadosEnCrudoDeUnaBusqueda>([]);

  useEffect(() => {
    (async () => {
      try {
        const pagefind = await import(
          // @ts-expect-error pagefind.js generated after build
          /* webpackIgnore: true */ "/pagefind/pagefind.js"
        );
        const consultaEnProceso = await pagefind.search(consulta);
        const resultadosEnCrudo = await Promise.all(
          consultaEnProceso.results.map(async (resultado: any) => {
            const datos = await resultado.data();
            return {
              titulo: datos.meta.title,
              descripcion: datos.excerpt,
              url: datos.url,
            };
          })
        );
        const resultadosParseados =
          EsquemaParaLosResultadosEnCrudo.parse(resultadosEnCrudo);
        cambiarEstadoDeLaConsulta("finalizado");
        cargarResultados(resultadosParseados);
      } catch (error) {
        cambiarEstadoDeLaConsulta("con problemas");
      }
    })();
  }, [consulta]);
  return {
    completada: () => estadoDeLaConsulta === "finalizado",
    cargando: () => estadoDeLaConsulta === "cargando",
    incompleta: () => estadoDeLaConsulta === "con problemas",
    consulta: () => consulta,
    resultados: () => resultados,
  } as const;
};

const EsquemaParaLosResultadosEnCrudo = z.array(
  z.object({
    titulo: z.string(),
    descripcion: z.string(),
    url: z.string(),
  })
);

type ResultadosEnCrudoDeUnaBusqueda = z.infer<
  typeof EsquemaParaLosResultadosEnCrudo
>;
