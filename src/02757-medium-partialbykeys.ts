import type {
  Equal,
  Expect,
} from "@type-challenges/utils"; /* _____________ Your Code Here _____________ */

type PartialByKeys<T, K extends keyof any = keyof T> = {
  [Key in keyof T & K]?: T[Key];
} & {
  [Key in Exclude<keyof T, K>]: T[Key];
} extends infer R
  ? {
      [P in keyof R]: R[P];
    }
  : never;

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
];
