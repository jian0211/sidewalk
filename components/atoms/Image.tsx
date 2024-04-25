import images from '@/public/images';
import Image from 'next/image';

/**
 * image コンポネント
 * いつか タイプをちゃんとセットする
 */

type ImagesProps = { imageTitle: string; width?: number };
export const Images = ({ imageTitle, width }: ImagesProps) => {
  const title = imageTitle.split('.')[0];
  const image = images.find((image) => image.src.includes(title));
  const DEFAULT_DISPLAY_WIDTH = 250;
  const displayHeight = image
    ? (image.height / image.width) * (width ?? DEFAULT_DISPLAY_WIDTH)
    : 100;
  return (
    <Image
      src={image?.src ?? 'no image 追加'}
      alt=""
      width={width ?? DEFAULT_DISPLAY_WIDTH}
      height={displayHeight}
      style={{ pointerEvents: 'none' }}
    />
  );
};
