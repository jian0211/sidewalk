import { useAirlineService } from '@/store/airlineService';
import { Prisma } from '@prisma/client';

export const useAirline = () => {
  const { airlineServiceCategory } = useAirlineService();

  return {
    actions: {
      filterAirlineType: (airlineList: Prisma.AirlineCreateInput[]) => {
        return airlineList.filter(({ seviceType }) => {
          if (airlineServiceCategory === 'all') return true;
          return seviceType === airlineServiceCategory;
        });
      },
    },
  };
};
