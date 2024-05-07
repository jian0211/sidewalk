import * as stylex from '@stylexjs/stylex';
import {
  MarginProps,
  fontWeight,
  palette,
  spacing,
} from '../../../styles/globalTokens.stylex';

type InputItemProps = { value: string; label: string };
type InputProps = { currentValue: string; theme?: 'borderRadius' };
export type RadioGroupProps = {
  items: InputItemProps[];
  groupName: string;
  handleChange: (value: string) => void;
} & InputProps &
  MarginProps;
type RadioInputProps = { item: InputItemProps } & InputProps &
  React.ComponentProps<'input'>;

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    theme,
    items,
    groupName,
    handleChange,
    currentValue,
    marginLeft = '0px',
    marginRight = '0px',
    ...rest
  } = props;
  return (
    <div {...stylex.props(styles['radioGroup']({ marginLeft, marginRight }))}>
      {items.map((item) => (
        <RadioInput
          {...rest}
          theme={theme}
          key={item.value}
          name={groupName}
          item={item}
          currentValue={currentValue}
          onChange={(value) => handleChange(value.currentTarget.value as any)}
        />
      ))}
    </div>
  );
};

const RadioInput = (props: RadioInputProps) => {
  const { item, currentValue, theme, ...rest } = props;
  const isChecked = currentValue === item.value;
  return (
    <span key={item.value}>
      <input
        {...rest}
        {...stylex.props(styles['radioInput'], theme && styles[theme])}
        type="radio"
        value={item.value}
        id={item.value}
        defaultChecked={isChecked}
        checked={isChecked}
      />
      <label
        {...stylex.props(
          styles['radioLabel'],
          isChecked && styles['radioLabelChecked'],
        )}
        htmlFor={item.value}
      >
        {item.label}
      </label>
    </span>
  );
};

const styles = stylex.create({
  radioGroup: (props: MarginProps) => ({
    display: 'flex',
    gap: '1rem',
    marginLeft: props.marginLeft,
    marginRight: props.marginRight,
  }),
  radioInput: {
    display: 'none',
  },
  radioLabelChecked: {
    color: palette['darkGray'],
  },
  radioLabel: {
    fontWeight: fontWeight['bold'],
    color: palette['baseGray'],
    cursor: 'pointer',
  },
  borderRadius: {
    borderWidth: spacing['xxsmall'],
    borderRadius: spacing['xxsmall'],
    borderColor: palette['baseGray'],
    borderStyle: 'solid',
  },
});
