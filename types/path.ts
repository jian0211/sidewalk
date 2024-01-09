export const path = {
  home: '/',
  airports: '/airports',
  airlines: '/airlines',
} as const;

export type PathName = keyof typeof path;
