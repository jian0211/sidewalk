import { Button, ButtonProps, RoundButton } from '@/components/atoms/Button';
import Images from '@/public/images/index';
import * as stylex from '@stylexjs/stylex';
import Image from 'next/image';
import { ComponentPropsWithoutRef } from 'react';

type CategoryContainerProps = React.ComponentPropsWithoutRef<'div'>;
type BodyProps = React.ComponentPropsWithoutRef<'div'>;
type FeaturePanelProps = ComponentPropsWithoutRef<'div'>;

const CategoryContainer = (props: CategoryContainerProps) => {
  return <div {...props} {...stylex.props(styles.categoryContainer)} />;
};

const CategoryButton = (props: ButtonProps) => {
  return (
    <RoundButton
      {...props}
      size={{ width: 'fit-content', height: '3rem' }}
      padding={{ paddingLeft: '20px', paddingRight: '20px' }}
      roundLevel="12px"
    />
  );
};

const Body = (props: BodyProps) => {
  return <div {...props} {...stylex.props(styles.body)} />;
};

const CompanyImage = ({ imageTitle }: { imageTitle: string }) => {
  const title = imageTitle.split('.')[0]; // delete .png
  const image = Images.find((image) => image.src.includes(title));
  const DEFAULT_DISPLAY_WIDTH = 250;
  const displayHeight = image
    ? (image.height / image.width) * DEFAULT_DISPLAY_WIDTH
    : 100;
  return (
    <div {...stylex.props(styles.companyImage)}>
      <Image
        src={image?.src ?? 'no image 追加'}
        alt=""
        width={DEFAULT_DISPLAY_WIDTH}
        height={displayHeight}
        layout="responsive"
      />
    </div>
  );
};

const FeaturePanel = (props: FeaturePanelProps) => {
  return <div {...props} {...stylex.props(styles.featurePanel)} />;
};

export const Airlines = {
  CategoryContainer,
  CategoryButton,
  Body,
  CompanyImage,
  FeaturePanel,
};

const styles = stylex.create({
  categoryContainer: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    gap: '1rem',
    alignItems: 'center',
    padding: '1rem 2rem',
    marginBottom: '1rem',
  },
  body: {
    padding: '0 2rem',
    width: '100%',
  },
  companyImage: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
    height: 'auto',
    aspectRatio: '16/9',
  },
  featurePanel: {},
});
