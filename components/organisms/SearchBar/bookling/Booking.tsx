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
  stateBasedstyles,
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
    <div {...props} {...stylex.props(styles.travelPointDropdown)}>
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
  return <IconButton {...props} iconProps={{ src: 'IconSwap', width: 28 }} />;
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
    {...stylex.props(styles.travelCountryBox, frameThemes.roundEdged)}
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
        stateBasedstyles.borderHover({
          borderColor: 'lightBlue',
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
  return <ul {...props} {...stylex.props(styles.travelPointList)} />;
};

const FlightIconWithText = (props: FlightIconWithTextProps) => {
  const { children, iata, name, onClick, isSelected, ...rest } = props;
  const { setIsShow } = useDropdown();
  return (
    <li
      {...rest}
      {...stylex.props(
        styles.flightIconWithText,
        designStyles.customBox(
          {
            paddingTop: '8px',
            paddingRight: '20px',
            paddingBottom: '8px',
            paddingLeft: '20px',
          },
          { width: '100%', height: '3rem' },
        ),
        designStyles.border({
          color: 'transparent',
          width: '2px',
          hoverColor: 'lightBlue',
        }),
        designStyles.radius('8px'),
        isSelected &&
          statusStyles['customSelected']({
            color: 'lightBlue',
            bgColor: 'baseWhite',
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '13rem',
    gap: '1rem',
  },
  travelPointDropdown: {
    width: '4rem',
    height: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
    fontWeight: 600,
    color: palette.darkGray,
  },
  travelPointTitle: {
    width: 'inherit',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  flightIconWithText: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '0.9rem',
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
  travelCountryBox: {
    flex: '1',
    height: 'auto',
  },
  travelPointList: {
    flex: '2',
  },
  travelPoint: {
    width: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
});
