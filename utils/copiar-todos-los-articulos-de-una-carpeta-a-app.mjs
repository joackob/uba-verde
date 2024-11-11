import path from "path";
import fs from "fs";
import matter from "gray-matter";

export const copiarTodosLosArticulosDeUnaCarpetaAApp = (
  carpetaConArticulosATratar,
  carpetaDestino
) => {
  const direccionAbsolutaDeLaCarpataContenedora = path.join(
    process.cwd(),
    carpetaConArticulosATratar
  );

  const nombresDeCadaUnoDeLosArticulosEncontrados = fs.readdirSync(
    direccionAbsolutaDeLaCarpataContenedora
  );

  nombresDeCadaUnoDeLosArticulosEncontrados.forEach(
    (nombreDeUnArticuloEncontrado) => {
      const direccionAbsolutaDelArticuloATratar = path.join(
        direccionAbsolutaDeLaCarpataContenedora,
        nombreDeUnArticuloEncontrado
      );
      fs.mkdirSync(
        path.join(
          process.cwd(),
          carpetaDestino,
          nombreDeUnArticuloEncontrado.replace(".mdx", "")
        ),
        { recursive: true }
      );
      fs.copyFileSync(
        direccionAbsolutaDelArticuloATratar,
        path.join(
          process.cwd(),
          carpetaDestino,
          nombreDeUnArticuloEncontrado.replace(".mdx", ""),
          "/page.mdx"
        )
      );
    }
  );
};

copiarTodosLosArticulosDeUnaCarpetaAApp(
  "manuales",
  "app/content/tratamiento-de-residuos"
);

copiarTodosLosArticulosDeUnaCarpetaAApp("novedades", "app/content/novedades");
