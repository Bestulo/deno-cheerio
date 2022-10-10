import { cheerio } from "./mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

export const getPickupLine = () =>
  fetch("http://www.google.com")
    .then((res) => res.text())
    .then(cheerio.load)
    .then(($) => $("#content").text().trim());

Deno.test("Cheerio test", async () => {
  await getPickupLine().then(console.log);
});

Deno.test("Data attribute types are correct", () => {
  const div = cheerio.load(
    `<div data-number="3" data-string="this is a string" data-boolean="true" data-empty>test div</div>`
  )("div");

  const dataNumber = div.data("number");
  const dataString = div.data("string");
  const dataBool = div.data("boolean");
  const dataEmpty = div.data("empty");

  assertEquals(typeof dataNumber, "number");
  assertEquals(typeof dataString, "string");
  assertEquals(typeof dataBool, "boolean");
  assertEquals(typeof dataEmpty, "string");
});
