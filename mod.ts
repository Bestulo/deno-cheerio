import { dew } from "https://jspm.dev/npm:cheerio";
import { CheerioAPI } from "./types.ts";
export const cheerio: CheerioAPI = dew() as CheerioAPI;
export * from "./types.ts";
