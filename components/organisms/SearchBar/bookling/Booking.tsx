import { ButtonProps, IconButton } from '@/components/atoms/Button';
import { Icons } from '@/components/atoms/Icon';
import { Dropdown } from '@/components/molecules/dropdown/Dropdown';
import {
  Modal,
  ContainerProps as ModalContainerProps,
} from '@/components/molecules/modal/Modal';
import { useDropdown } from '@/hooks/providers/ModalOpenControllProvider';
import { AirportsIataWithDefault } from '@/store/fligths';
import { palette } from '../../../../styles/globalTokens.stylex';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import {
  designStyles,
  frameThemes,
  StatusProps,
  statusStyles,
} from '@/components/styles';

type ContainerProps = React.ComponentPropsWithoutRef<'div'>;
type TravelPointDropdownProps = React.ComponentPropsWithoutRef<'div'>;
type TravelPointProps = Pick<BookingUsedType, 'iata' | 'title'> &
  React.ComponentPropsWithoutRef<'div'>;

type TravelPointSwapperButtonProps = ButtonProps;
type SearchTravelPointModalProps = Pick<BookingUsedType, 'title'> &
  ModalContainerProps;
type FlightIconWithTextProps = {
  iata: AirportsIataWithDefault;
  name: string;
} & Pick<StatusProps, 'isSelected'> &
  React.ComponentPropsWithoutRef<'li'>;
type TravelPointListProps = React.ComponentPropsWithoutRef<'ul'>;

type TravelCountryInputProps = Pick<BookingUsedType, 'value'> &
  Pick<StatusProps, 'isDisabled' | 'isSelected'> &
  React.ComponentPropsWithoutRef<'input'>;
type TravelCountryBoxProps = React.ComponentPropsWithoutRef<'div'>;

type BookingUsedType = {
  iata: string;
  title: string;
  value: string;
};

const Container = (props: ContainerProps) => (
  <div {...props} {...stylex.props(styles.container)} />
);

const TravelPointDropdown = (props: TravelPointDropdownProps) => {
  return (
    <div
      {...props}
      {...stylex.props(
        designStyles['size']({ width: '4rem', height: '3rem' }),
        designStyles['flex']({
          flex: '1',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }),
        designStyles['font']({ fontWeight: 'bold' }),
        designStyles['color']({ color: 'darkGray' }),
        designStyles['cursor'],
      )}
    >
      <Dropdown>{props.children}</Dropdown>
    </div>
  );
};

const TravelPoint = ({ iata, title, ...props }: TravelPointProps) => {
  return (
    <div {...props} {...stylex.props(styles.travelPoint)}>
      <label>{iata}</label>
      <p {...stylex.props(styles.travelPointTitle)}>{title}</p>
    </div>
  );
};

const TravelPointSwapperButton = (props: TravelPointSwapperButtonProps) => {
  return (
    <IconButton
      {...props}
      theme="round"
      iconProps={{ src: 'IconSwap', width: 28 }}
    />
  );
};

const SearchTravelPointModal = (props: SearchTravelPointModalProps) => {
  const { children, title, ...rest } = props;
  const { setIsShow } = useDropdown();
  return (
    <Modal.Container {...rest}>
      <Modal.Header
        title={title}
        hasCloseButton
        handleClose={() => setIsShow(false)}
      />
      <Modal.Body>{children}</Modal.Body>
    </Modal.Container>
  );
};

const TravelCountryBox = (props: TravelCountryBoxProps) => (
  <div
    {...props}
    {...stylex.props(
      designStyles['size']({ width: '150px', height: 'auto' }),
      designStyles['flex']({ flex: '1', flexDirection: 'column' }),
      frameThemes.roundEdged,
    )}
  />
);

const TravelCountryInput = React.forwardRef<
  HTMLInputElement,
  TravelCountryInputProps
>((props, ref) => {
  const { value, isDisabled, isSelected, ...rest } = props;
  return (
    <label
      {...stylex.props(
        styles.radioLable,
        designStyles['border']({
          hoverColor: 'lightBlue',
          borderWidth: '2px',
        }),
        rest.checked && statusStyles['basicSelected'],
        isDisabled && statusStyles['disabled'],
        isSelected && statusStyles['basicSelected'],
      )}
      htmlFor={value}
    >
      <input
        {...rest}
        style={{ display: 'none' }}
        id={value}
        name="travelCountry"
        type="radio"
        ref={ref}
      />
      {value}
    </label>
  );
});
TravelCountryInput.displayName = 'TravelCountryInput';

const TravelPointList = (props: TravelPointListProps) => {
  return (
    <ul
      {...props}
      {...stylex.props(
        designStyles['size']({ width: '100%' }),
        designStyles['flex']({ flex: '2', flexDirection: 'column' }),
      )}
    />
  );
};

const FlightIconWithText = (props: FlightIconWithTextProps) => {
  const { children, iata, name, onClick, isSelected, ...rest } = props;
  const { setIsShow } = useDropdown();
  return (
    <li
      {...rest}
      {...stylex.props(
        designStyles['size']({ width: '100%', height: '3rem' }),
        designStyles['flex']({ alignItems: 'center', gap: 'medium' }),
        designStyles['font']({ fontSize: 'xsmall', fontWeight: 'medium' }),
        designStyles['padding']({
          paddingTop: '8px',
          paddingRight: '20px',
          paddingBottom: '8px',
          paddingLeft: '20px',
        }),
        designStyles['border']({
          borderColor: 'transparent',
          hoverColor: 'lightBlue',
          borderWidth: '2px',
        }),
        designStyles['color']({
          color: isSelected ? 'lightBlue' : 'darkGray',
        }),
        designStyles['bgColor']({
          color: isSelected ? 'baseWhite' : 'transparent',
        }),
        designStyles['radius']({
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }),
      )}
      onClick={(e) => {
        onClick?.(e);
        setIsShow(false);
      }}
    >
      <Icons src="IconDepartureFlight" width={20} />
      <h3
        style={{
          fontFamily: 'monospace',
        }}
      >
        {iata}
      </h3>
      <p
        style={{
          fontWeight: 600,
        }}
      >
        {name}
      </p>
    </li>
  );
};

export const Booking = {
  Container,
  TravelPointDropdown,
  TravelPoint,
  TravelPointSwapperButton,
  SearchTravelPointModal,
  TravelCountryBox,
  TravelCountryInput,
  TravelPointList,
  FlightIconWithText,
};

const styles = stylex.create({
  container: {
    display: 'flex',
    gap: '1rem',
    width: '15rem',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '6px',
    marginRight: '1rem',
  },
  travelPointTitle: {
    width: 'inherit',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  radioLable: {
    width: '100%',
    height: '3rem',
    display: 'flex',
    paddingLeft: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    borderRadius: '0.5vw',
  },
  travelPoint: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '12px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: {
      default: palette['baseWhite'],
      ':hover': palette['lightBlue'],
    },
  },
});
