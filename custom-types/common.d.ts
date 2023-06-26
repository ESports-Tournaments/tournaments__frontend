declare global {
  /**
   * Custom utility types
   */
  export type Nullable<T> = T | null;

  export type MaybeArray<T> = T | T[];

  export type Keys<T extends Record<string, unknown>> = keyof T;

  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed<TKey = string, TValue = unknown> = {
    [key in TKey]: TValue;
  };
}

export {};
