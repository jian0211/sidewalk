export const path = {
  home: '/',
  airports: '/airports',
  airlines: '/airlines',
  flights: '/flights',
} as const;

export type LinkProps = {
  href: `${'/ja' | '/ko'}${
    | ''
    | '/airports'
    | '/airports/jp'
    | '/airports/ko'
    | '/airlines'
    | '/flights'
    | '/profile'}${'' | '/schedule'}`;
};
export type PathName = keyof typeof path;
