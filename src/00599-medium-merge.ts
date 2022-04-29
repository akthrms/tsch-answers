import type { Equal, Expect } from "@type-challenges/utils";

type Merge<F extends {}, S extends {}> = {
  [Key in keyof F | keyof S]: Key extends keyof S
    ? S[Key]
    : Key extends keyof F
    ? F[Key]
    : never;
};

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number;
        b: number;
        c: boolean;
      }
    >
  >
];
