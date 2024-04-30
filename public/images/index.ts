import { FileProps, importAll } from '@/utils/import';

const allImages = () => {
  const airlineImages = importAll(
    require.context('./airlines', false, /\.png$/),
  ).map((r: any) => r.default) as FileProps[];
  const sceneryImages = importAll(
    require.context('./scenery', false, /\.jpg$/),
  ).map((r: any) => r.default) as FileProps[];
  return [...airlineImages, ...sceneryImages];
};

export default allImages();
