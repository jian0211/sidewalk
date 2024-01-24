import { Flights } from '@/store/fligths';
import ReactDatePicker, {
  CalendarContainer,
  CalendarContainerProps,
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import { ko, ja } from 'date-fns/locale';
import { Control, Controller, Path } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import * as stylex from '@stylexjs/stylex';
import React from 'react';
import {
  ModalContainer,
  ModalContainerProps,
  ModalHeader,
} from '@/components/molecules/modal/Modal';

registerLocale('ko', ko);
registerLocale('ja', ja);

type DatePickerContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  datePickerProps?: Partial<ReactDatePickerProps>;
  name: Path<Flights>;
  control: Control<Flights>;
};

type DatePickerModalProps = ModalContainerProps &
  CalendarContainerProps & {
    title: string;
  };

export const DatePickerContainer = ({
  name,
  control,
  datePickerProps,
  children,
  ...props
}: DatePickerContainerProps) => {
  console.log('children', children);
  return (
    <div {...props}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => {
          const { departureDate, returnDate } = value as Flights['dateType'];
          return (
            <ReactDatePicker
              // {...stylex.props(styles.datePicker)}
              // wrapperClassName={styles.datePicker}
              customInput={
                <DatePickerInput ref={ref} value={departureDate + ''} />
              }
              {...datePickerProps}
              calendarContainer={(props) =>
                React.isValidElement(children)
                  ? React.cloneElement(children, props)
                  : null
              }
              selectsRange
              isClearable
              showIcon
              dateFormat="yyyy-MM-dd HH:mm"
              onChange={onChange}
              monthsShown={2}
              selected={departureDate}
              startDate={departureDate}
              endDate={returnDate}
              // minDate={MIN_DATE}
              // maxDate={MAX_DATE}
            />
          );
        }}
      />
    </div>
  );
};

type DatePickerInputProps = React.ComponentPropsWithRef<'button'>;
export const DatePickerInput = React.forwardRef<
  HTMLButtonElement,
  DatePickerInputProps
>(({ ...props }, ref) => {
  return (
    <button type="button" ref={ref} {...stylex.props(styles.test)} {...props}>
      {props!.value}
    </button>
  );
});
DatePickerInput.displayName = 'DatePickerInput';

export const DatePickerModal = ({
  className,
  children,
  title,
  ...props
}: DatePickerModalProps) => {
  return (
    <ModalContainer style={styles.datePickerModal}>
      <CalendarContainer className={className}>
        <ModalHeader title={title} />
        <div style={{ position: 'relative', height: '100%' }}> {children}</div>
      </CalendarContainer>
    </ModalContainer>
  );
};

const styles = stylex.create({
  datePicker: {},
  test: {
    // border: '1px solid red',
    padding: '3rem',
    backgroundColor: 'none',
  },
  datePickerModal: {
    width: '100%',
    zIndex: 1,
    height: '40rem',
  },
});
