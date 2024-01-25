import ReactDatePicker, {
  CalendarContainer,
  CalendarContainerProps,
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import { ko, ja } from 'date-fns/locale';
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

type DatePickerContainerProps = ReactDatePickerProps & {
  onChange: (
    date: [Date | null, Date | null],
    event?: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
};

type DatePickerModalProps = ModalContainerProps &
  CalendarContainerProps & {
    title: string;
  };

export const DatePickerContainer = ({
  onChange,
  children,
  ...props
}: DatePickerContainerProps) => {
  return (
    <ReactDatePicker
      className="dataPickerTest" // [TODO]: CSS修正
      onChange={onChange}
      dateFormat="yyyy-MM-dd HH:mm" // [TODO]: format修正
      monthsShown={2}
      calendarContainer={(props) =>
        React.isValidElement(children)
          ? React.cloneElement(children, props)
          : null
      }
      selectsRange
      closeOnScroll
      {...props}
    />
  );
};

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
        <div {...stylex.props(styles.calendarContainer)}>{children}</div>
      </CalendarContainer>
    </ModalContainer>
  );
};

const styles = stylex.create({
  datePickerModal: {
    width: '100%',
    zIndex: 1,
    height: '40rem',
  },
  calendarContainer: {
    display: 'flex',
    position: 'relative',
    height: '100%',
  },
});
