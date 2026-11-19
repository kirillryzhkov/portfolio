import { en } from './locales/en';

export type Locale = 'en' | 'ru' | 'kk';

type DeepString<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly DeepString<U>[]
    : { [K in keyof T]: DeepString<T[K]> };

export type Translations = DeepString<typeof en>;
