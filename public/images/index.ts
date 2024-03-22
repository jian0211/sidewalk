import { FileProps, importAll } from '@/utils/import';

export default importAll(require.context('./airlines', false, /\.png$/)).map(
  (r: any) => r.default,
) as FileProps[];
