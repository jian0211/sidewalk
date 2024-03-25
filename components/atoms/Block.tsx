import { RemLevelOpton, hovers, selected } from '@/styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import { ComponentProps } from 'react';

type CustomBoxProps = {
  variant?: 'round' | 'square';
  useHover?: boolean;
  useAccordion?: {
    defaultHeight: RemLevelOpton;
    height: 'fit-content' | RemLevelOpton;
  };
  isSelected?: boolean;
  stylesprops?: stylex.StyleXStyles;
} & ComponentProps<'div'>;

export const Block = ({
  variant,
  useHover,
  isSelected,
  useAccordion,
  stylesprops,
  ...props
}: CustomBoxProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        styles.default,
        variant && styles[variant],
        useHover &&
          hovers.borderHover({
            borderWidth: '4px',
            borderColor: 'lightBlue',
          }),
        isSelected && selected.baseSelected,
        useAccordion && styles.accodion(useAccordion),
        stylesprops,
      )}
    />
  );
};

const styles = stylex.create({
  round: {
    borderRadius: '1rem',
  },
  square: {},
  accodion: (data: Required<CustomBoxProps['useAccordion']>) => ({
    height: {
      default: data?.defaultHeight,
      ':hover': data?.height,
    },
    overflow: 'hidden',
  }),
  default: {
    width: 'fit-content',
    height: 'fit-content',
  },
});

// const btnStyles = stylex.create({
//   // ...default style here
//   outline: {
//     color: '#000',
//     backgroundColor: '#feffff',
//     border: '1px solid #dbdbdb',
//   },
//   destructive: {
//     backgroundColor: '#f15756',
//   },
//   ghost: {
//     color: '#000',
//     backgroundColor: 'transparent',
//   },
// });
