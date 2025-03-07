import path from "node:path";
import fs from "node:fs";

export const copiarTodosLosArticulosDeUnaCarpetaAApp = ({
  carpetaConArticulosATratar,
  carpetaDestino,
}: {
  carpetaConArticulosATratar: string;
  carpetaDestino: string;
}) => {
  console.table({ carpetaConArticulosATratar, carpetaDestino });
  const direccionAbsolutaDeLaCarpataContenedora = path.join(
    process.cwd(),
    carpetaConArticulosATratar,
  );

  const nombresDeCadaUnoDeLosArticulosEncontrados = fs
    .readdirSync(direccionAbsolutaDeLaCarpataContenedora)
    .filter((nombre) => nombre.includes(".mdx"));

  nombresDeCadaUnoDeLosArticulosEncontrados.forEach(
    (nombreDeUnArticuloEncontrado) => {
      const direccionAbsolutaDelArticuloATratar = path.join(
        direccionAbsolutaDeLaCarpataContenedora,
        nombreDeUnArticuloEncontrado,
      );
      fs.mkdirSync(
        path.join(
          process.cwd(),
          carpetaDestino,
          nombreDeUnArticuloEncontrado.replace(".mdx", ""),
        ),
        { recursive: true },
      );
      fs.copyFileSync(
        direccionAbsolutaDelArticuloATratar,
        path.join(
          process.cwd(),
          carpetaDestino,
          nombreDeUnArticuloEncontrado.replace(".mdx", ""),
          "/page.mdx",
        ),
      );
    },
  );
};

copiarTodosLosArticulosDeUnaCarpetaAApp({
  carpetaConArticulosATratar: "manuales",
  carpetaDestino:
    "app/content/manuales-tutoriales-y-otros-materiales-de-consulta",
});

copiarTodosLosArticulosDeUnaCarpetaAApp({
  carpetaConArticulosATratar: "novedades",
  carpetaDestino: "app/content/portal-de-noticias-con-enlaces-a-redes-sociales",
});
