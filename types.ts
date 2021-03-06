// Type definitions for Cheerio v0.22.0
// Project: https://github.com/cheeriojs/cheerio
// Definitions by: Bret Little <https://github.com/blittle>
//                 VILIC VANE <http://vilic.info>
//                 Wayne Maurer <https://github.com/wmaurer>
//                 Umar Nizamani <https://github.com/umarniz>
//                 LiJinyao <https://github.com/LiJinyao>
//                 Chennakrishna <https://github.com/chennakrishna8>
//                 AzSiAz <https://github.com/AzSiAz>
//                 Ryo Ota <https://github.com/nwtgck>
//                 Hiroki Osame <https://github.com/privatenumber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Document {}

type Element = TextElement | TagElement;

export interface TextElement {
  type: "text";
  next: Element | null;
  prev: Element | null;
  parent: Element;
  data?: string;
}

export interface TagElement {
  tagName: string;
  type: "tag";
  name: string;
  attribs: { [attr: string]: string };
  children: Element[];
  childNodes: Element[] | null;
  lastChild: Element | null;
  firstChild: Element | null;
  next: Element | null;
  nextSibling: Element;
  prev: Element | null;
  previousSibling: Element;
  parent: Element;
  parentNode: Element;
  nodeValue: string;
  data?: string;
  startIndex?: number;
}

type AttrFunction<T> = (el: Element, i: number, currentValue: string) => T;

export interface Cheerio {
  // Document References
  // Cheerio https://github.com/cheeriojs/cheerio
  // JQuery http://api.jquery.com

  [index: number]: Element;
  cheerio: string;
  length: number;

  // Attributes

  attr(): { [attr: string]: string };
  attr(name: string): string | undefined;
  attr<T>(name: string, value: AttrFunction<T>): Cheerio;
  // `value` *can* be `any` here but:
  // 1. That makes type-checking the function-type useless
  // 2. It's converted to a string anyways
  attr(name: string, value: string): Cheerio;
  // The map's values *can* be `any` but they'll all be cast to strings
  // regardless.
  attr(map: { [key: string]: unknown }): Cheerio;

  data(): { [key: string]: string | number | boolean };
  data(name: string): string | number | boolean | undefined;
  data(name: string, value: string | number | boolean): Cheerio;

  val(): string;
  val(value: string): Cheerio;

  removeAttr(name: string): Cheerio;

  has(selector: string): Cheerio;
  has(element: Element): Cheerio;

  hasClass(className: string): boolean;
  addClass(classNames: string): Cheerio;

  removeClass(): Cheerio;
  removeClass(className: string): Cheerio;
  removeClass(func: (index: number, className: string) => string): Cheerio;

  toggleClass(className: string): Cheerio;
  toggleClass(className: string, toggleSwitch: boolean): Cheerio;
  toggleClass(toggleSwitch?: boolean): Cheerio;
  toggleClass(
    func: (index: number, className: string, toggleSwitch: boolean) => string,
    toggleSwitch?: boolean
  ): Cheerio;

  is(selector: string): boolean;
  is(element: Element): boolean;
  is(element: Element[]): boolean;
  is(selection: Cheerio): boolean;
  is(func: (index: number, element: Element) => boolean): boolean;

  // Form
  serialize(): string;
  serializeArray(): { name: string; value: string }[];

  // Traversing

  find(selector: string): Cheerio;
  find(element: Cheerio): Cheerio;

  parent(selector?: string): Cheerio;
  parents(selector?: string): Cheerio;
  parentsUntil(selector?: string, filter?: string): Cheerio;
  parentsUntil(element: Element, filter?: string): Cheerio;
  parentsUntil(element: Cheerio, filter?: string): Cheerio;

  prop<T>(name: string): T;
  prop<T>(name: string, value: T): Cheerio;

  closest(): Cheerio;
  closest(selector: string): Cheerio;

  next(selector?: string): Cheerio;
  nextAll(): Cheerio;
  nextAll(selector: string): Cheerio;

  nextUntil(selector?: string, filter?: string): Cheerio;
  nextUntil(element: Element, filter?: string): Cheerio;
  nextUntil(element: Cheerio, filter?: string): Cheerio;

  prev(selector?: string): Cheerio;
  prevAll(): Cheerio;
  prevAll(selector: string): Cheerio;

  prevUntil(selector?: string, filter?: string): Cheerio;
  prevUntil(element: Element, filter?: string): Cheerio;
  prevUntil(element: Cheerio, filter?: string): Cheerio;

  slice(start: number, end?: number): Cheerio;

  siblings(selector?: string): Cheerio;

  children(selector?: string): Cheerio;

  contents(): Cheerio;

  each(func: (index: number, element: Element) => void): Cheerio;
  map<T>(func: (index: number, element: Element) => T): Cheerio;

  filter(selector: string): Cheerio;
  filter(selection: Cheerio): Cheerio;
  filter(element: Element): Cheerio;
  filter(elements: Element[]): Cheerio;
  filter(func: (index: number, element: Element) => boolean): Cheerio;

  not(selector: string): Cheerio;
  not(selection: Cheerio): Cheerio;
  not(element: Element): Cheerio;
  not(func: (index: number, element: Element) => boolean): Cheerio;

  first(): Cheerio;
  last(): Cheerio;

  eq(index: number): Cheerio;

  get<T>(): T[];
  get<T>(index: number): T;

  index(): number;
  index(selector: string): number;
  index(selection: Cheerio): number;

  end(): Cheerio;

  add(selectorOrHtml: string): Cheerio;
  add(selector: string, context: Document): Cheerio;
  add(element: Element): Cheerio;
  add(elements: Element[]): Cheerio;
  add(selection: Cheerio): Cheerio;

  addBack(): Cheerio;
  addBack(filter: string): Cheerio;

  // Manipulation
  appendTo(target: Cheerio): Cheerio;
  prependTo(target: Cheerio): Cheerio;

  append<T>(content: string, ...contents: T[]): Cheerio;
  append<T>(content: Document, ...contents: T[]): Cheerio;
  append<T>(content: Document[], ...contents: T[]): Cheerio;
  append<T>(content: Cheerio, ...contents: T[]): Cheerio;

  prepend<T>(content: string, ...contents: T[]): Cheerio;
  prepend<T>(content: Document, ...contents: T[]): Cheerio;
  prepend<T>(content: Document[], ...contents: T[]): Cheerio;
  prepend<T>(content: Cheerio, ...contents: T[]): Cheerio;

  after<T>(content: string, ...contents: T[]): Cheerio;
  after<T>(content: Document, ...contents: T[]): Cheerio;
  after<T>(content: Document[], ...contents: T[]): Cheerio;
  after<T>(content: Cheerio, ...contents: T[]): Cheerio;

  insertAfter(content: string): Cheerio;
  insertAfter(content: Document): Cheerio;
  insertAfter(content: Cheerio): Cheerio;

  before<T>(content: string, ...contents: T[]): Cheerio;
  before<T>(content: Document, ...contents: T[]): Cheerio;
  before<T>(content: Document[], ...contents: T[]): Cheerio;
  before<T>(content: Cheerio, ...contents: T[]): Cheerio;

  insertBefore(content: string): Cheerio;
  insertBefore(content: Document): Cheerio;
  insertBefore(content: Cheerio): Cheerio;

  remove(selector?: string): Cheerio;

  replaceWith(content: string): Cheerio;
  replaceWith(content: Element): Cheerio;
  replaceWith(content: Element[]): Cheerio;
  replaceWith(content: Cheerio): Cheerio;
  replaceWith(content: () => Cheerio): Cheerio;

  empty(): Cheerio;

  html(): string | null;
  html(html: string): Cheerio;

  text(): string;
  text(text: string): Cheerio;

  wrap(content: string): Cheerio;
  wrap(content: Document): Cheerio;
  wrap(content: Cheerio): Cheerio;

  css(propertyName: string): string;
  css(propertyNames: string[]): string[];
  css(propertyName: string, value: string): Cheerio;
  css(propertyName: string, value: number): Cheerio;
  css(
    propertyName: string,
    func: (index: number, value: string) => string
  ): Cheerio;
  css(
    propertyName: string,
    func: (index: number, value: string) => number
  ): Cheerio;
  css(properties: Record<string, unknown>): Cheerio;

  // Rendering

  // Miscellaneous

  clone(): Cheerio;

  // Not Documented

  toArray(): Element[];
}

export interface CheerioParserOptions {
  // Document References
  // Cheerio https://github.com/cheeriojs/cheerio
  // HTMLParser2 https://github.com/fb55/htmlparser2/wiki/Parser-options
  // DomHandler https://github.com/fb55/DomHandler

  xmlMode?: boolean;
  decodeEntities?: boolean;
  lowerCaseTags?: boolean;
  lowerCaseAttributeNames?: boolean;
  recognizeCDATA?: boolean;
  recognizeSelfClosing?: boolean;
  normalizeWhitespace?: boolean;
  withStartIndices?: boolean;
  withEndIndices?: boolean;
  ignoreWhitespace?: boolean;
  _useHtmlParser2?: boolean;
}

export interface Selector {
  (selector: string): Cheerio;
  (selector: string, context: string): Cheerio;
  (selector: string, context: Element): Cheerio;
  (selector: string, context: Element[]): Cheerio;
  (selector: string, context: Cheerio): Cheerio;
  (selector: string, context: string, root: string): Cheerio;
  (selector: string, context: Element, root: string): Cheerio;
  (selector: string, context: Element[], root: string): Cheerio;
  (selector: string, context: Cheerio, root: string): Cheerio;
  <T>(selector: T): Cheerio;
}

export interface Root extends Selector {
  // Document References
  // Cheerio https://github.com/cheeriojs/cheerio
  // JQuery http://api.jquery.com
  root(): Cheerio;
  contains(container: Element, contained: Element): boolean;
  parseHTML(
    data: string,
    context?: Document | null,
    keepScripts?: boolean
  ): Document[];

  html(options?: CheerioParserOptions): string;
  html(dom: string | Cheerio | Element, options?: CheerioParserOptions): string;

  xml(dom?: string | Cheerio | Element): string;
}

// Removed cheerio.load's param type "Buffer" because Deno doesn't have Buffers, only Uint8Array.
// Read more: https://github.com/denoland/deno/issues/4897
// Added "& Cheerio" so that it would be both callable and have .text() and other methods.
export interface CheerioAPI extends Root {
  version: string;
  load(html: string, options?: CheerioParserOptions): Root & Cheerio;
  load(element: Element, options?: CheerioParserOptions): Root & Cheerio;
}
