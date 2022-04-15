import type { Equal, Expect } from "@type-challenges/utils";

type TupleToUnion<T> = T extends (infer U)[] ? U : never;

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
