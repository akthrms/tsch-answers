import type { Equal, Expect } from "@type-challenges/utils";

type Reverse<T extends any[], U extends any[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Reverse<Tail, [Head, ...U]>
  : U;

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];
