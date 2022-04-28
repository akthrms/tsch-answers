import type { Equal, Expect } from "@type-challenges/utils";

type StringToUnion<
  T extends string,
  U extends any[] = []
> = T extends `${infer Head}${infer Tail}`
  ? StringToUnion<Tail, [...U, Head]>
  : U[number];

type cases = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<
    Equal<
      StringToUnion<"coronavirus">,
      "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s"
    >
  >
];
