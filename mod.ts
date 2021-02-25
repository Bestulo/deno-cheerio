import { dew } from "https://dev.jspm.io/npm:cheerio@1.0.0-rc.3/index.dew.js";
import { CheerioAPI } from "./types.ts";
export const cheerio: CheerioAPI = dew() as CheerioAPI;
export * from "./types.ts";
