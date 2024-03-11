import { Locales } from './locale';

export type Page = {
  params: { locale: Locales };
  searchParams: object;
};
