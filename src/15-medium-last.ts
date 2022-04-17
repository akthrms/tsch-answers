import type { Equal, Expect } from "@type-challenges/utils";

type Last<T extends any[]> = T extends [infer H, ...infer T]
  ? T["length"] extends 0
    ? H
    : Last<T>
  : never;

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
