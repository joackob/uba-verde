import { test, expect } from "@playwright/test";

test.describe("Como usuario, deseo acceder a los manuales que se encuentren disponibles en el indice, para poder leer su contenido", () => {
  test("Debe redirigirnos al contenido del articulo, cuyo resumen se encuentra en el dice, mediante un click en la tarjeta", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/");
    await page.getByLabel("Tratamiento de residuos").click();
    await page
      .getByRole("link", { name: "barrendero Protocolo para el" })
      .click();

    await expect(page).toHaveURL(
      "http://localhost:3000/manuales-tutoriales-y-otros-materiales-de-consulta/protocolo-uba-para-residuos-organicos"
    );
  });
});
