import type { Equal, Expect } from "@type-challenges/utils";

type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer _S}` ? true : false;

type cases = [
  Expect<Equal<StartsWith<"abc", "ac">, false>>,
  Expect<Equal<StartsWith<"abc", "ab">, true>>,
  Expect<Equal<StartsWith<"abc", "abcd">, false>>
];
