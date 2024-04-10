export const path = {
  home: '/',
  dashboard: '/dashboard',
  airports: '/airports',
  airlines: '/airlines',
  schedule: '/airlines/schedule',
  flights: '/flights',
  login: '/login',
  profile: '/profile',
} as const;

export type LinkProps = {
  href:
    | `${'/ja' | '/ko'}${
        | ''
        | '/airports'
        | '/airports/jp'
        | '/airports/ko'
        | '/airlines'
        | '/flights'
        | '/profile'}${'' | '/schedule'}`
    | string;
};
export type PathName = keyof typeof path;
