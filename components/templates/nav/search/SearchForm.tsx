import { SubmitHandler, useForm } from 'react-hook-form';
import * as stylex from '@stylexjs/stylex';
import { SwapIcon } from '@/components/atoms/Icon';
import { useSearch } from './useSearh';
import { Flights } from '@/store/fligths';
import { useTranslatedWord } from '@/hooks/useTranslatedWord';
import { Button } from '@/components/atoms/Button';
import {
  BookingTravelPointDropdownButton,
  BookingContainer,
  BookingTravelPoint,
  BookingTravelPointSwapperButton,
  BookingSearchTravelPointModal,
} from '@/components/organisms/SearchBar/bookling/Booking';
import {
  TripTypeButton,
  TripTypeContainer,
} from '@/components/organisms/SearchBar/tripType/TripType';
import { DropdownWarpper } from '@/components/molecules/dropdown/Dropdown';

type SearchFormProps = React.ComponentPropsWithoutRef<'form'>;

export const SearchForm = (props: SearchFormProps) => {
  const t = useTranslatedWord('nav.search');
  const {
    states: { fligths },
    actions: { handleClickSetFligths, handleSubmitSetFligths },
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
    handleSubmitSetFligths(data);
    console.log(data);
  };
  console.log('getValues', getValues('tripType'));

  return (
    <form
      {...stylex.props(styles.searchForm)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <BookingContainer>
        <BookingTravelPointDropdownButton>
          <BookingTravelPoint iata="HND" title="도쿄" />
          <BookingSearchTravelPointModal title="출발선택">
            hasdfa
          </BookingSearchTravelPointModal>
        </BookingTravelPointDropdownButton>
        <BookingTravelPointSwapperButton />
        <BookingTravelPointDropdownButton>
          <BookingTravelPoint iata="INC" title="인천" />
          <div>드롭다운</div>
        </BookingTravelPointDropdownButton>
      </BookingContainer>

      <DropdownWarpper>
        <div>asdasd</div>
        <div>asdasd</div>
      </DropdownWarpper>
      <TripTypeContainer>
        <TripTypeButton
          {...register('tripType')}
          isSelected={getValues('tripType') === 'roundTrip'}
          onClick={() => {
            setValue('tripType', 'roundTrip');
          }}
        >
          {t('tripType.roundTrip')}
        </TripTypeButton>
        <TripTypeButton
          {...register('tripType')}
          isSelected={getValues('tripType') === 'oneWay'}
          onClick={() => {
            setValue('tripType', 'oneWay');
            handleClickSetFligths('tripType')('oneWay');
          }}
        >
          {t('tripType.oneWay')}
        </TripTypeButton>
      </TripTypeContainer>
      <div>
        <div>출발일</div>
        {/* <input type="date" defaultValue={'19930211'} /> */}
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
    flex: '3',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '1vw',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'red',
  },
});
