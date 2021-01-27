import { cheerio } from "./mod.ts";

export const getPickupLine = () =>
  fetch("http://www.pickuplinegen.com")
    .then((res) => res.text())
    .then(cheerio.load)
    .then(($) => $("#content").text().trim());

Deno.test("Cheerio test", async () => {
  await getPickupLine().then(console.log);
});
