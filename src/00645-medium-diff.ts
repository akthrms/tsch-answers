import type { Equal, Expect } from "@type-challenges/utils";

type Diff<O, O1> = {
  [Key in
    | Exclude<keyof O, keyof O1>
    | Exclude<keyof O1, keyof O>]: Key extends keyof O
    ? O[Key]
    : Key extends keyof O1
    ? O1[Key]
    : never;
};

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>
];
