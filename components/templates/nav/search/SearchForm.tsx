import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as stylex from '@stylexjs/stylex';
import { useSearch } from './useSearh';
import { Flights } from '@/store/fligths';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { SearchButton } from '@/components/atoms/Button';
import {
  BookingTravelPointDropdown,
  BookingContainer,
  BookingTravelPoint,
  BookingTravelPointSwapperButton,
  BookingSearchTravelPointModal,
} from '@/components/organisms/SearchBar/bookling/Booking';
import {
  TripTypeContainer,
  TripTypeRadioButton,
} from '@/components/organisms/SearchBar/tripType/TripType';
import {
  DatePickerContainer,
  DatePickerModal,
} from '@/components/organisms/SearchBar/datePicker/DatePicker';
import { useDatePicker } from './useDatePicker';
import {
  LabelBox,
  PriceContent,
  PriceRangeSlider,
  PriceRangeSliderContainer,
  PriceRangeSliderInput,
  RangeFillBox,
  Title,
} from '@/components/organisms/SearchBar/PriceRangeSlider/PriceRangeSlider';

type SearchFormProps = React.ComponentPropsWithoutRef<'form'>;

export const SearchForm = (props: SearchFormProps) => {
  const t = useTranslatedWord('nav.search');
  const {
    states: { fligths },
    actions: { handleClickSetFligths, handleSubmitSetFligths, toLocaleString },
  } = useSearch();
  const { datePickerSetting } = useDatePicker();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    watch,
    formState: { dirtyFields },
  } = useForm<Flights>({
    mode: 'onChange',
    defaultValues: { ...fligths },
  });
  const onSubmit: SubmitHandler<Flights> = (data, event) => {
    event?.preventDefault();
    handleSubmitSetFligths(data);
    console.log(data);
  };
  // ;

  if (dirtyFields.tripType) {
    setValue('dateType.returnDate', null);
  }
  return (
    <form
      {...stylex.props(styles.searchForm)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <BookingContainer>
        <BookingTravelPointDropdown>
          <BookingTravelPoint iata="HND" title="도쿄" />
          <BookingSearchTravelPointModal title="지역과 도시 선택">
            hasdfa
          </BookingSearchTravelPointModal>
        </BookingTravelPointDropdown>
        <BookingTravelPointSwapperButton />
        <BookingTravelPointDropdown>
          <BookingTravelPoint iata="INC" title="인천" />
          <BookingSearchTravelPointModal title="지역과 도시 선택">
            hasdfa
          </BookingSearchTravelPointModal>
        </BookingTravelPointDropdown>
      </BookingContainer>

      <TripTypeContainer>
        <TripTypeRadioButton
          {...register('tripType')}
          value="roundTrip"
          checked={getValues('tripType') === 'roundTrip'}
        >
          {t('tripType.roundTrip')}
        </TripTypeRadioButton>
        <TripTypeRadioButton
          {...register('tripType')}
          value="oneWay"
          checked={getValues('tripType') === 'oneWay'}
        >
          {t('tripType.oneWay')}
        </TripTypeRadioButton>
      </TripTypeContainer>
      <Controller
        control={control}
        name="dateType"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePickerContainer
            {...datePickerSetting}
            onChange={(dateType) => {
              if (Array.isArray(dateType)) {
                const [departureDate, returnDate] = dateType; //片道
                onChange({ departureDate, returnDate });
              } else {
                onChange({ departureDate: dateType, returnDate: null }); //両道
              }
            }}
            onBlur={onBlur}
            placeholderText={t('datePicker.plaseHolder') + ''}
            startDate={value.departureDate}
            {...(getValues('tripType') === 'roundTrip'
              ? ({ endDate: value.returnDate, selectsRange: true } as any)
              : { selected: value.departureDate })}
          >
            <DatePickerModal title={t('datePicker.modalTitle') + ''} />
          </DatePickerContainer>
        )}
      />
      <PriceRangeSliderContainer>
        <PriceContent>
          <LabelBox rangeType="min">
            {toLocaleString(getValues('flightCost.min'))}
          </LabelBox>
          <Title>{t('priceRangeSlider.title')}</Title>
          <LabelBox rangeType="max">
            {toLocaleString(getValues('flightCost.max'))}
          </LabelBox>
        </PriceContent>
        <PriceRangeSlider>
          <RangeFillBox flightCost={watch('flightCost')} />
          <PriceRangeSliderInput
            {...register('flightCost.min', {
              onChange: (min) => {
                if (Number(min.target.value) > getValues('flightCost.max')) {
                  setValue('flightCost.min', getValues('flightCost.max'));
                }
              },
            })}
          />
          <PriceRangeSliderInput
            {...register('flightCost.max', {
              onChange: (max) => {
                if (Number(max.target.value) < getValues('flightCost.min')) {
                  setValue('flightCost.max', getValues('flightCost.min'));
                }
              },
            })}
          />
        </PriceRangeSlider>
      </PriceRangeSliderContainer>
      <SearchButton />
    </form>
  );
};

const styles = stylex.create({
  searchForm: {
    position: 'relative',
    flex: '3',
    gap: '1rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    // borderRadius: '1vw',
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
});
