import type { Equal, Expect } from "@type-challenges/utils";

type Reverse<T extends any[], U extends any[] = []> = T extends [
  infer Head,
  ...infer Tail
]
  ? Reverse<Tail, [Head, ...U]>
  : U;

type FlipArguments<T> = T extends (...args: infer Args) => infer Return
  ? (...args: Reverse<Args>) => Return
  : never;

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<
    Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
  >,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];
