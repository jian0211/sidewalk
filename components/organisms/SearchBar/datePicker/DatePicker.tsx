import { Flights } from '@/store/fligths';
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import { ko, ja } from 'date-fns/locale';
import { Control, Controller, Path } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';
import * as stylex from '@stylexjs/stylex';

registerLocale('ko', ko);
registerLocale('ja', ja);

type DatePickerProps = React.ComponentPropsWithoutRef<'div'> & {
  datePickerProps?: Partial<ReactDatePickerProps>;
  name: Path<Flights>;
  control: Control<Flights>;
};

export const DatePicker = ({
  name,
  control,
  datePickerProps,
  ...props
}: DatePickerProps) => {
  return (
    <div {...props}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => {
          const { departureDate, returnDate } = value as Flights['dateType'];
          return (
            <ReactDatePicker
              // {...stylex.props(styles.datePicker)}
              // wrapperClassName={styles.datePicker}
              {...datePickerProps}
              selectsRange
              isClearable
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

// const styles = stylex.create({
//   datePicker: {
//     border: '1px solid red',
//   },
// });
