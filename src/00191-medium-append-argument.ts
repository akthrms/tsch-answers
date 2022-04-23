import type { Equal, Expect } from "@type-challenges/utils";

type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer Return
  ? (...args: [...Args, A]) => Return
  : Fn;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>];
