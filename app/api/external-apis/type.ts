type ApiPath = 'flight-offer';

export type ResponseShoppingOffers = {
  meta: {
    count: number;
    links: {
      self: string;
    };
  };
  data: Data[];
  dictionaries: {
    locations: {
      NRT: {
        cityCode: string; //'TYO';
        countryCode: string; //'JP';
      };
      ICN: {
        cityCode: string; //'SEL';
        countryCode: string; //'KR';
      };
    };
    aircraft: Record<string, string>;
    currencies: Record<string, string>;
    carriers: Record<string, string>;
  };
};

type Itinerary = {
  duration: string; // "PT2H30M",
  segments: {
    departure: {
      iataCode: string; // "ICN",
      terminal: string; //
      at: string; //"2024-05-11T15:00:00"
    };
    arrival: {
      iataCode: string; // "NRT",
      terminal: string;
      at: string; //"2024-05-11T17:30:00"
    };
    carrierCode: string;
    number: string;
    aircraft: { code: string };
    operating: { carrierCode: string };
    duration: string;
    id: string;
    numberOfStops: number;
    blacklistedInEU: boolean;
  }[];
};

type FareDetailsBySegment = {
  segmentId: string; //'4';
  cabin: string; //'ECONOMY';
  fareBasis: string; //'BKJ';
  class: string; //'B';
  includedCheckedBags: {
    weight: number;
    weightUnit: string; // 'KG';
  };
};

type Data = {
  type: ApiPath;
  id: number;
  source: string;
  instantTicketingRequired: false; // すぐ発券が必要
  nonHomogeneous: false;
  oneWay: false;
  lastTicketingDate: string; // "2024-05-11",
  lastTicketingDateTime: string; //"2024-05-11",
  numberOfBookableSeats: number;
  itineraries: Itinerary[];
  price: {
    currency: string; // 'USD';
    total: string; //'24570.00';
    base: string; //'11300.00';
    fees: [
      {
        amount: string; //'0.00';
        type: string; //'SUPPLIER';
      },
      {
        amount: string; //'0.00';
        type: string; //'TICKETING';
      },
    ];
    grandTotal: string; //'24570.00';
  };
  pricingOptions: {
    fareType: string[]; //['PUBLISHED'];
    includedCheckedBagsOnly: boolean;
  };
  validatingAirlineCodes: string[]; //['TW'];
  travelerPricings: {
    travelerId: string; // '1';
    fareOption: string; // 'STANDARD';
    travelerType: string; //'ADULT';
    price: {
      currency: string; // 'JPY';
      total: string; //'24570.00';
      base: string; //'11300.00';
    };
    fareDetailsBySegment: FareDetailsBySegment[];
  }[];
};

export type TokenResponse = {
  type: string;
  username: string;
  application_name: string;
  client_id: string;
  token_type: 'Bearer';
  access_token: string;
  expires_in: number;
  state: string;
  scope: string;
};
