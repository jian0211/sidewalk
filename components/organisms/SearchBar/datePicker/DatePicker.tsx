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
import { Modal, ContainerProps } from '@/components/molecules/modal/Modal';

registerLocale('ko', ko);
registerLocale('ja', ja);

type DatePickerContainerProps = ReactDatePickerProps & {
  onChange: (
    date: [Date | null, Date | null],
    event?: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
};

type DatePickerModalProps = ContainerProps &
  CalendarContainerProps & {
    title: string;
  };

export const DatePickerContainer = ({
  onChange,
  children,
  ...props
}: DatePickerContainerProps) => {
  const throwDatePickerContainerError = () => {
    throw new Error(
      'The Children Component type of this component must be the reactNode type.',
    );
  };
  return (
    <ReactDatePicker
      className="dataPickerBox"
      onChange={onChange}
      calendarContainer={(props) =>
        React.isValidElement(children)
          ? React.cloneElement(children, props)
          : throwDatePickerContainerError()
      }
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
    <Modal.Container style={styles.datePickerModal}>
      <CalendarContainer className={className} {...props}>
        <Modal.Header title={title} style={styles.datePickerModalHeader} />
        <div {...stylex.props(styles.calendarContainer)}>{children}</div>
      </CalendarContainer>
    </Modal.Container>
  );
};

const styles = stylex.create({
  datePickerModal: {
    width: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    height: '40rem',
  },
  datePickerModalHeader: {
    padding: '1.5rem',
    fontSize: '1.2rem',
  },
  calendarContainer: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    fontSize: '1.1rem',
  },
});
