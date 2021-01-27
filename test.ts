import { cheerio } from "./mod.ts";

export const getPickupLine = () =>
  fetch("http://www.pickuplinegen.com")
    .then((res) => res.text())
    .then(cheerio.load)
    .then(($) => $("#content").text().trim());

getPickupLine().then(console.log);
