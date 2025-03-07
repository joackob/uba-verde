import { test, expect } from "@playwright/test";

test.describe("Como usuario, deseo encontrar articulos dentro del sitio a traves de un buscador, para facilitar mis acceso a la informacion de mi interes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Deberia poder buscar un articulo por su titulo", async ({ page }) => {
    await page.getByLabel("Tratamiento de residuos").click();
    await page.getByPlaceholder("Buscar").click();
    await page.getByPlaceholder("Buscar").fill("protocolo");
    await page.getByPlaceholder("Buscar").press("Enter");
    await page.waitForTimeout(500);
    await expect(page.getByRole("main")).toContainText(
      "Protocolo para el Tratamiento de Residuos Orgánicos en la Universidad de Buenos Aires",
    );
  });

  test("Deberia poder buscar un articulo por su contenido", async ({
    page,
  }) => {
    await page.getByLabel("Tratamiento de residuos").click();
    await page.getByPlaceholder("Buscar").click();
    await page.getByPlaceholder("Buscar").fill("protocolo");
    await page.getByPlaceholder("Buscar").press("Enter");
    await page.waitForTimeout(500);
    await expect(page.getByRole("main")).toContainText(
      "Protocolo para la Separación de Residuos en la Universidad de Buenos Aires",
    );
  });
});
