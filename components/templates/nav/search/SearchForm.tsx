'use client';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as stylex from '@stylexjs/stylex';
import { useSearch } from './useSearh';
import { Flights } from '@/store/fligths';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { IconButton } from '@/components/atoms/Button';
import { Booking } from '@/components/organisms/SearchBar/bookling/Booking';
import { TripType } from '@/components/organisms/SearchBar/tripType/TripType';
import {
  DatePickerContainer,
  DatePickerModal,
} from '@/components/organisms/SearchBar/datePicker/DatePicker';
import { useDatePicker } from './useDatePicker';
import { PriceRange } from '@/components/organisms/SearchBar/PriceRangeSlider/PriceRangeSlider';
import { useAiportsList } from '@/store/airports';
import { useBooking } from './useBooking';
import { useLocale } from '@/hooks/useLocale';

type SearchFormProps = React.ComponentPropsWithoutRef<'form'>;

export const SearchForm = (props: SearchFormProps) => {
  const t = useTranslatedWord('nav.search');
  const {
    states: { flights },
    actions: { handleSubmitSetFligths, toLocaleString },
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
    defaultValues: { ...flights },
  });
  const {
    states: { locale },
  } = useLocale();

  const {
    states: { airportsList },
    actions: { getBookingTitle },
  } = useAiportsList(); // dummy
  const {
    states: { selectCountry },
    actions: {
      handleSelectCountry,
      isDisabled,
      isCurrentCountry,
      getSwapFromTo,
    },
  } = useBooking();

  const onSubmit: SubmitHandler<Flights> = (data, event) => {
    event?.preventDefault();
    handleSubmitSetFligths(data);
    console.log(data);
  };

  if (dirtyFields.tripType) {
    setValue('dateType.returnDate', null);
  }
  // [TODO]: Error の場合
  // SearchButton 押す時、データが全部入っているか
  return (
    <form
      {...props}
      {...stylex.props(styles.searchForm)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Booking.Container>
        <Booking.TravelPointDropdown>
          <Booking.TravelPoint
            iata={watch('from')}
            title={getBookingTitle(getValues('from'))}
          />
          <Booking.SearchTravelPointModal title={t('booking.modalTitle')}>
            <Booking.TravelCountryBox>
              <Booking.TravelCountryInput
                value={t('booking.country.japan')}
                checked={selectCountry === 'japan'}
                onChange={() => handleSelectCountry('japan')}
              />
              <Booking.TravelCountryInput
                value={t('booking.country.korea')}
                checked={selectCountry === 'korea'}
                onChange={() => handleSelectCountry('korea')}
              />
            </Booking.TravelCountryBox>
            <Booking.TravelPointList>
              {selectCountry === 'korea'
                ? airportsList.korea_airports.map(
                    ({ iata, ja_name, ko_name }, i) => (
                      <Booking.FlightIconWithText
                        key={i}
                        iata={iata}
                        name={locale === 'ja' ? ja_name : ko_name}
                        onClick={() => {
                          setValue('from', iata as any);
                        }}
                        isSelected={iata === getValues('from')}
                      />
                    ),
                  )
                : airportsList.japan_airports.map(
                    ({ iata, ja_name, ko_name }, i) => (
                      <Booking.FlightIconWithText
                        key={i}
                        iata={iata}
                        name={locale === 'ja' ? ja_name : ko_name}
                        onClick={() => {
                          setValue('from', iata as any);
                        }}
                        isSelected={iata === getValues('from')}
                      />
                    ),
                  )}
            </Booking.TravelPointList>
          </Booking.SearchTravelPointModal>
        </Booking.TravelPointDropdown>
        <Booking.TravelPointSwapperButton
          onClick={() => {
            const { from, to } = getSwapFromTo(getValues());
            setValue('from', from);
            setValue('to', to);
          }}
        />
        <Booking.TravelPointDropdown>
          <Booking.TravelPoint
            iata={watch('to')}
            title={getBookingTitle(getValues('to'))}
          />
          <Booking.SearchTravelPointModal title={t('booking.modalTitle')}>
            <Booking.TravelCountryBox>
              <Booking.TravelCountryInput
                value={t('booking.country.japan')}
                checked={!isCurrentCountry('japan')}
                onChange={() => handleSelectCountry('japan')}
                isDisabled={isDisabled(getValues('from'), 'japan')}
              />
              <Booking.TravelCountryInput
                value={t('booking.country.korea')}
                checked={!isCurrentCountry('korea')}
                onChange={() => handleSelectCountry('korea')}
                isDisabled={isDisabled(getValues('from'), 'korea')}
              />
            </Booking.TravelCountryBox>
            <Booking.TravelPointList>
              {!isCurrentCountry('korea')
                ? airportsList.korea_airports.map(
                    ({ iata, ja_name, ko_name }, i) => (
                      <Booking.FlightIconWithText
                        key={i}
                        iata={iata}
                        name={locale === 'ja' ? ja_name : ko_name}
                        onClick={() => {
                          setValue('to', iata as any);
                        }}
                        isSelected={iata === getValues('to')}
                      />
                    ),
                  )
                : airportsList.japan_airports.map(
                    ({ iata, ja_name, ko_name }, i) => (
                      <Booking.FlightIconWithText
                        key={i}
                        iata={iata}
                        name={locale === 'ja' ? ja_name : ko_name}
                        onClick={() => {
                          setValue('to', iata as any);
                        }}
                        isSelected={iata === getValues('to')}
                      />
                    ),
                  )}
            </Booking.TravelPointList>
          </Booking.SearchTravelPointModal>
        </Booking.TravelPointDropdown>
      </Booking.Container>

      <TripType.Container>
        <TripType.RadioButton
          {...register('tripType')}
          value="roundTrip"
          checked={getValues('tripType') === 'roundTrip'}
        >
          {t('tripType.roundTrip')}
        </TripType.RadioButton>
        <TripType.RadioButton
          {...register('tripType')}
          value="oneWay"
          checked={getValues('tripType') === 'oneWay'}
        >
          {t('tripType.oneWay')}
        </TripType.RadioButton>
      </TripType.Container>
      <Controller
        control={control}
        name="dateType"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePickerContainer
            {...datePickerSetting}
            onChange={(dateType) => {
              if (Array.isArray(dateType)) {
                const [departureDate, returnDate] = dateType; //両道
                onChange({ departureDate, returnDate });
              } else {
                onChange({ departureDate: dateType, returnDate: null }); //片道
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
      <PriceRange.Container>
        <PriceRange.Content>
          <PriceRange.LabelBox rangeType="min">
            {toLocaleString(getValues('flightCost.min'))}
          </PriceRange.LabelBox>
          <PriceRange.Title>{t('priceRangeSlider.title')}</PriceRange.Title>
          <PriceRange.LabelBox rangeType="max">
            {toLocaleString(getValues('flightCost.max'))}
          </PriceRange.LabelBox>
        </PriceRange.Content>
        <PriceRange.Slider>
          <PriceRange.RangeFillBox flightCost={watch('flightCost')} />
          <PriceRange.Input
            {...register('flightCost.min', {
              onChange: (min) => {
                if (Number(min.target.value) > getValues('flightCost.max')) {
                  setValue('flightCost.min', getValues('flightCost.max'));
                }
              },
            })}
          />
          <PriceRange.Input
            {...register('flightCost.max', {
              onChange: (max) => {
                if (Number(max.target.value) < getValues('flightCost.min')) {
                  setValue('flightCost.max', getValues('flightCost.min'));
                }
              },
            })}
          />
        </PriceRange.Slider>
      </PriceRange.Container>
      <IconButton type="submit" iconProps={{ src: 'IconFind' }} />
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
  },
});
