import * as Icon from '@/public/svgs/index';
import Image from 'next/image';

const BasicIcon = ({
  width = 30,
  alt = '',
  src,
}: {
  width?: number;
  alt?: string;
  src: string;
}) => <Image src={src} width={width} alt={alt} />;

export const Icons = (src: keyof typeof Icon) => BasicIcon({ src: Icon[src] });
