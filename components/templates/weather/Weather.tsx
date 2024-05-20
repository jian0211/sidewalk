import Image from 'next/image';

type ResponseWeatherProps = {
  weather: WeatherStatus[];
};

type WeatherStatus = {
  main:
    | 'Clear'
    | 'Clouds'
    | 'Atmosphere'
    | 'Snow'
    | 'Rain'
    | 'Drizzle'
    | 'Thunderstorm';
  icon: string;
};

type WeatherIconProps = {
  lon: string;
  lat: string;
};

type ResponseType = {
  weatherStatus: string;
  iconUrl: string;
};
export const WeatherIcon: React.FC<WeatherIconProps> = async (props) => {
  const { iconUrl } = await getWeatherData(props);
  return <Image src={iconUrl} alt="" width="48" height="48" />;
};

export const getWeatherData = async ({
  lat,
  lon,
}: WeatherIconProps): Promise<ResponseType> => {
  const url = `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  const weatherData: ResponseWeatherProps = await (await fetch(url)).json();
  const weatherStatus: WeatherStatus['main'] =
    weatherData?.weather?.[0].main ?? 'Clear';
  const icon = weatherData?.weather?.[0].icon ?? '01n';
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return { weatherStatus, iconUrl };
};
