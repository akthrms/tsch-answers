import type { Equal, Expect } from "@type-challenges/utils";

type MinusOne<T extends number, U extends number[] = []> = T extends U["length"]
  ? U extends [infer _Head, ...infer Tail]
    ? Tail["length"]
    : 0
  : MinusOne<T, [...U, T]>;

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  // @ts-expect-error
  Expect<Equal<MinusOne<1101>, 1100>>
];
