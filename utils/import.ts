export type FileProps = {
  src: string;
  height: number;
  width: number;
  blurDataURL: string;
  blurWidth: number;
  blurHeight: number;
};

export const importAll = (r: __WebpackModuleApi.RequireContext) => {
  return r.keys().map(r);
};
