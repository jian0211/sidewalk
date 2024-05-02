import {
  PaletteVars,
  fontSizing,
  fontWeight,
  palette,
  shadowing,
} from '../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { Icons } from '@/components/atoms/Icon';
import { Images } from '@/components/atoms/Image';

type CategoryContainerProps = React.ComponentPropsWithoutRef<'div'>;
type BodyProps = React.ComponentPropsWithoutRef<'div'>;
type FeaturePanelProps = ComponentPropsWithoutRef<'div'>;
type CategoryButtonProps = {
  isSelected: boolean;
} & ComponentPropsWithoutRef<'button'>;
type LinkIconProps = LinkProps;
type FeaturePanelInfoProps = ComponentPropsWithoutRef<'div'>;

const CategoryContainer = (props: CategoryContainerProps) => {
  return <div {...props} {...stylex.props(styles.categoryContainder)} />;
};

const CategoryButton = (props: CategoryButtonProps) => {
  const { isSelected, ...rest } = props;
  return (
    <button
      {...rest}
      {...stylex.props(
        styles.categoryButton({
          bgColor: isSelected ? 'baseWhite' : 'whiteGray',
          color: isSelected ? 'lightBlue' : 'darkGray',
          bosxShadow: isSelected ? 'dug' : 'swell',
        }),
      )}
    />
  );
};

const Body = (props: BodyProps) => {
  return <div {...props} {...stylex.props(styles.body)} />;
};

const CompanyImage = ({ imageTitle }: { imageTitle: string }) => {
  return <Images imageTitle={imageTitle} />;
};

const LinkIcon = (props: LinkIconProps) => {
  return (
    <Link {...props} target="_blank">
      <Icons src="IconUrlLink" width={40} />
    </Link>
  );
};

const FeaturePanel = (props: FeaturePanelProps) => {
  return <div {...props} {...stylex.props(styles.featurePanel)} />;
};

const FeaturePanelInfo = (props: FeaturePanelInfoProps) => {
  return <div {...props} {...stylex.props(styles.featurePanelInfo)} />;
};

export const Airlines = {
  CategoryContainer,
  CategoryButton,
  Body,
  CompanyImage,
  FeaturePanel,
  FeaturePanelInfo,
  LinkIcon,
};

const styles = stylex.create({
  body: {
    width: '100%',
    height: '700px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    padding: '1rem',
    gap: '1rem',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: palette['whiteSoftGray'],
    borderRadius: '1rem',
    overflow: 'scroll',
  },
  companyImage: {
    position: 'absolute',
  },
  featurePanel: {
    position: 'relative',
    width: '360px',
    height: '180px',
    backgroundColor: palette['baseWhite'],
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: {
      default: palette['whiteSoftGray'],
      ':hover': palette['lightBlue'],
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '16/9',
    borderRadius: '16px',
    boxShadow: {
      default: null,
      ':hover': shadowing['swell'],
    },
    padding: '0.5rem',
    cursor: 'pointer',
  },
  categoryContainder: {
    display: 'flex',
    gap: '0.5rem',
    width: 'fit-content',
    borderRadius: '12px',
    margin: '1rem 0',
    padding: '6px',
    backgroundColor: palette['whiteSoftGray'],
  },
  categoryButton: (props: {
    bgColor: PaletteVars;
    color: PaletteVars;
    bosxShadow: keyof typeof shadowing;
  }) => ({
    width: 'fit-content',
    height: '3rem',
    borderRadius: '0.5rem',
    backgroundColor: palette[props.bgColor],
    color: palette[props.color],
    borderColor: 'none',
    borderWidth: 'none',
    borderStyle: 'none',
    cursor: 'pointer',
    fontSize: fontSizing['xxsmall'],
    fontWeight: fontWeight['bold'],
    padding: '1rem',
    boxShadow: shadowing[props.bosxShadow],
  }),
  panel: {
    overflow: 'scroll',
    width: '1520px',
    height: '700px',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    padding: '1rem 0',
    gap: '1rem 0',
  },
  featurePanelInfo: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: '0.5rem',
    opacity: {
      default: 0,
      ':hover': 100,
    },
    backgroundColor: {
      default: null,
      ':hover': 'rgba(67, 209, 252, 0.3)',
    },
    borderRadius: 'inherit',
  },
});
