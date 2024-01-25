import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as stylex from '@stylexjs/stylex';
import { useSearch } from './useSearh';
import { Flights } from '@/store/fligths';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Button } from '@/components/atoms/Button';
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
import { useLocale } from '@/hooks/useLocale';
import {
  DatePickerContainer,
  DatePickerModal,
} from '@/components/organisms/SearchBar/datePicker/DatePicker';

type SearchFormProps = React.ComponentPropsWithoutRef<'form'>;

export const SearchForm = (props: SearchFormProps) => {
  const t = useTranslatedWord('nav.search');
  const {
    states: { fligths },
    actions: { handleClickSetFligths, handleSubmitSetFligths },
  } = useSearch();
  const {
    states: { locale },
  } = useLocale();
  const {
    register,
    handleSubmit,
    getValues,
    control,
    watch,
    formState: { errors },
  } = useForm<Flights>({
    mode: 'onChange',
    defaultValues: { ...fligths },
  });
  const onSubmit: SubmitHandler<Flights> = (data, event) => {
    event?.preventDefault();
    handleSubmitSetFligths(data);
    console.log(data);
  };
  /**
   * データの変更を監視するための使用
   * だが、再レンダリングされるので他の方法があれば。
   */
  watch();
  console.log(getValues('dateType'));

  return (
    <form
      {...stylex.props(styles.searchForm)}
      onSubmit={handleSubmit(onSubmit)}
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
      <div>
        <Controller
          control={control}
          name="dateType"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePickerContainer
              onChange={(dateType) => {
                if (Array.isArray(dateType)) {
                  const [departureDate, returnDate] = dateType;
                  onChange({ departureDate, returnDate });
                }
              }}
              onBlur={onBlur}
              locale={locale}
              // selected={value.departureDate}
              startDate={value.departureDate}
              endDate={value.returnDate}
              placeholderText="여행 날짜를 선택해주세요"
              //[TODO]: placeholderText에 왕복 혹은 편도일때의 경우에 따른 말 설정
            >
              <DatePickerModal title="날짜 선택" />
            </DatePickerContainer>
          )}
        />
      </div>

      <div>
        <div>희망비용</div>
        {/* <input type="number" value="300" /> */}
      </div>
      <Button type="submit">찾기 </Button>
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
    // borderRadius: '1vw',
    // borderWidth: '1px',
    // borderStyle: 'solid',
    // borderColor: 'red',
  },
});
