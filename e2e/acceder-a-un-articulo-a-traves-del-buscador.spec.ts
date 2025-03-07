import { test, expect } from "@playwright/test";

test.describe("Como usuario, deseo poder acceder a los articulos encontrados en la seccion de busqueda, para leer su contenido", () => {
  test("Debe redirigirnos al contenido correspondiente a un articulo encontrado, haciendo click en la tarjeta", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByLabel("Tratamiento de residuos").click();
    await page.getByPlaceholder("Buscar").click();
    await page.getByPlaceholder("Buscar").fill("protocolo");
    await page.getByPlaceholder("Buscar").press("Enter");
    await page
      .getByRole("link", { name: "PROTOCOLO PARA EL TRATAMIENTO" })
      .first()
      .click();

    await expect(page).toHaveURL(
      "http://localhost:3000/manuales-tutoriales-y-otros-materiales-de-consulta/protocolo-uba-para-residuos-organicos",
    );
  });
});
