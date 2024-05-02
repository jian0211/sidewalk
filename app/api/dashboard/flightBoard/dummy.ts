const averagePriceOfFlight = {
  toKorea: {
    jpy: 24350,
    krw: 215400,
  },
  toJapan: {
    jpy: 41100,
    krw: 364000,
  },
};
const cheapestTicketTomorrow = {
  toKorea: {
    currency: 'jpy',
    from: {
      iata: 'NRT',
      time: '09:15',
    },
    to: {
      iata: 'INC',
      time: '11:30',
    },
    imageTitle: '',
    fee: 13000,
  },
  toJapan: {
    currency: 'jpy',
    from: {
      iata: 'INC',
      time: '10:30',
    },
    to: {
      iata: 'NRT',
      time: '12:45',
    },
    imageTitle: '',
    fee: 90000,
  },
};
const cheapestTicketInfoData = {
  location: {
    country: {
      ko: '대한민국',
      ja: '韓国',
    },
    location: {
      ko: '제주',
      ja: '済州',
    },
    imgSrc: 'jeju01',
  },
  tripType: 'roundTrip',
  fee: {
    krw: 30000,
    jpy: 34000,
  },
  from: {
    date: '5/12',
    day: 'tru',
    airline: {
      title: {
        ko: '제주항공',
        ja: '済州航空',
      },
      lata: 'JEU',
      imageSrc: 'Jeju_Air_Logo',
    },
    lata: 'NRT',
  },
  to: {
    date: '5/15',
    day: 'fri',
    airline: {
      title: {
        ko: '제주항공',
        ja: '済州航空',
      },
      lata: 'JEU',
      imageSrc: 'Jeju_Air_Logo',
    },
    lata: 'JEU',
  },
};
const dayOfTheWeekOfCheapTicket = {
  cheapDay: { toJapan: 'mon', toKorea: 'sat' },
  expensiveDay: { toJapan: 'sun', toKorea: 'tue' },
};
const airPriceVariationGraphData = [
  {
    date: '1',
    krw: 13000,
    jpy: 13000,
  },
  {
    date: '2',
    krw: 13000,
    jpy: 13000,
  },
  {
    date: '3',
    krw: 13000,
    jpy: 13000,
  },
  {
    date: '4',
    krw: 13000,
    jpy: 13000,
  },
  {
    date: '5',
    krw: 130000,
    jpy: 13000,
  },
  {
    date: '6',
    krw: 130003,
    jpy: 13000,
  },
  {
    date: '7',
    krw: 13000,
    jpy: 13000,
  },
  {
    date: '8',
    krw: 13000,
    jpy: 13000,
  },
];

export const dummy = {
  averagePriceOfFlight,
  cheapestTicketTomorrow,
  cheapestTicketInfoData,
  dayOfTheWeekOfCheapTicket,
  airPriceVariationGraphData,
};
