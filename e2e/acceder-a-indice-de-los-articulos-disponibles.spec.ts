import { test, expect } from "@playwright/test";

test.describe("Como usuario, deseo un indice de todos los articulos disponibles en el sitio, permitiendome navegar entre ellos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  [
    "Reciclaje en nuestra Universidad: Cómo Contribuir al Cuidado del Medio Ambiente",
    "Protocolo para el Tratamiento de Residuos Orgánicos en la UBA",
    "Protocolo para la Separación de Residuos en la Universidad de Buenos Aires",
  ].forEach((articulo) => {
    test(`Debe aparecer el resumen del articulo "${articulo}"`, async ({
      page,
    }) => {
      await page.getByLabel("Tratamiento de residuos").click();
      await expect(page.getByRole("main")).toContainText(articulo);
    });
  });
});
