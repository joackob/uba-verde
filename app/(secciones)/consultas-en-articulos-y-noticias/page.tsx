"use client";
import ContenedorResumenes from "@/components/resumen/ContenedorResumenes";
import GaleriaResumenes from "@/components/resumen/GaleriaResumenes";
import TarjetaParaElResultadoDeUnaBusqueda from "./components/TarjetaParaElResultadoDeUnaBusqueda";
import { useBusquedaEnArticulos } from "./hooks";
import BarraDeProgresoParaUnaConsultaEnProceso from "./components/BarraDeProgresoParaUnaConsultaEnProceso";
import MensajeDeAlertaParaProblemasDuranteLaConsulta from "./components/MensajeDeAlertaParaProblemasDuranteLaConsulta";

const page = () => {
  const busqueda = useBusquedaEnArticulos();

  return (
    <ContenedorResumenes>
      <GaleriaResumenes
        encabezado={
          busqueda.cargando()
            ? `Buscando articulos para la consulta: ${busqueda.consulta()}`
            : `Se encontraron ${
                busqueda.resultados().length
              } resultados para la consulta: ${busqueda.consulta()}`
        }
      >
        {busqueda.cargando() && <BarraDeProgresoParaUnaConsultaEnProceso />}
        {busqueda.incompleta() && (
          <MensajeDeAlertaParaProblemasDuranteLaConsulta />
        )}
        {busqueda.completada() &&
          busqueda
            .resultados()
            .map((resultado) => (
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

export default page;
