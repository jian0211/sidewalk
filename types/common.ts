export type ValueOf<T> = { [k in keyof T]: T[k] }[keyof T];
