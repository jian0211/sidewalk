export type ValueOf<T> = { [k in keyof T]: T[k] }[keyof T];

export type Split<
  S extends string,
  Delimiter extends string = '.',
> = S extends `${infer FirstPart}${Delimiter}${infer SecondPart}`
  ? FirstPart | Split<SecondPart, Delimiter>
  : S;

export type DeepCopy<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepCopy<T[P]> : T[P];
};

export type NestedPropertyType<
  T,
  K extends string,
> = K extends `${infer FirstKey}.${infer RestKeys}`
  ? FirstKey extends keyof T
    ? NestedPropertyType<T[FirstKey], RestKeys>
    : never
  : K extends keyof T
    ? T[K]
    : never;

export type Prettier<T extends object> = { [k in keyof T]: T[k] };

type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR['length'] extends END
  ? ACC | START | END
  : NumericRange<
      START,
      END,
      [...ARR, 1],
      ARR[START] extends undefined ? ACC : ACC | ARR['length']
    >;
