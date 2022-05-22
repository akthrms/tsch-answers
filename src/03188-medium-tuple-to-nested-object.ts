import type { Equal, Expect } from "@type-challenges/utils";

type TupleToNestedObject<T extends any[], U> = T extends [
  infer Head,
  ...infer Tail
]
  ? { [Key in Head as T[0]]: TupleToNestedObject<Tail, U> }
  : U;

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
];
