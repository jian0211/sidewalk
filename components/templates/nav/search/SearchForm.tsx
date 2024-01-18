import { SubmitHandler, useForm } from 'react-hook-form';
import * as stylex from '@stylexjs/stylex';
import {
  BookingButton,
  TripTypeButton,
} from '@/components/organisms/SearchBar/Buttons';
import { SwapIcon } from '@/components/atoms/Icon';
import { useSearch } from './useSearh';
import { Flights } from '@/store/fligths';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';

type SearchFormProps = React.ComponentPropsWithoutRef<'form'>;

export const SearchForm = (props: SearchFormProps) => {
  const t = useTranslatedWord('nav.search');
  const {
    states: { fligths },
    actions: { handleClickSetFligths },
  } = useSearch();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<Flights>({
    defaultValues: fligths,
  });
  const onSubmit: SubmitHandler<Flights> = (data, event) => {
    event?.preventDefault();
    console.log(data);
  };
  console.log('getValues', getValues('tripType'));

  return (
    <form
      {...stylex.props(styles.searchForm)}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* 목적지 */}
      <div {...stylex.props(styles.bookingContainer)}>
        <BookingButton iata="HND" name="도쿄" />
        <SwapIcon />
        <BookingButton iata="INC" name="인천" />
      </div>

      <div {...stylex.props(styles.tripTypeBox)}>
        <TripTypeButton
          {...register('tripType')}
          name={t('tripType.roundTrip')}
          isSelected={getValues('tripType') === 'roundTrip'}
          onClick={() => {
            setValue('tripType', 'roundTrip');
            handleClickSetFligths('tripType')('roundTrip');
          }}
        />
        <TripTypeButton
          {...register('tripType')}
          name={t('tripType.oneWay')}
          isSelected={getValues('tripType') === 'oneWay'}
          onClick={() => {
            setValue('tripType', 'oneWay');
            handleClickSetFligths('tripType')('oneWay');
          }}
        />
      </div>
      <div>
        <div>출발일</div>
        {/* <input type="date" defaultValue={'19930211'} /> */}
      </div>
      <div>
        <div>희망비용</div>
        {/* <input type="number" value="300" /> */}
      </div>
    </form>
  );
};

const styles = stylex.create({
  searchForm: {
    flex: '3',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '1vw',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'red',
  },
  bookingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16rem',
  },
  tripTypeBox: {
    display: 'flex',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#00256C',
    borderRadius: '1vw',
  },
});
