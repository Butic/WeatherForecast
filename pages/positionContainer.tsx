import { NextPage } from 'next';
import { useMemo, useState } from 'react';
import { getTime } from '../api/getTime';
import { getWeatherUrl } from '../api/getWeather';
import { PositionCoordinates } from '../types/PositionTypes';

const PositionData: NextPage<any> = ({
  data,
}: {
  data: PositionCoordinates;
}) => {
  const [weather, setWeather] = useState<any>();
  const getWeather = async () => {
    const url = getWeatherUrl(data.lat, data.long);
    const response = await fetch(url);
    setWeather(await response.json());
  };
  useMemo(getWeather, [data]);

  if (weather) {
    return (
      <>
        <h6>_________</h6>
        <h4>Place - {weather.name}</h4>
        <h5>Weather - {weather.weather[0].main}</h5>
        <h5>
          Wind: speeed - {weather.wind.speed}, direction - {weather.wind.deg}
        </h5>
        <h5>Sunrise - {getTime(weather.sys.sunrise)}</h5>
        <h5>Sunset - {getTime(weather.sys.sunset)}</h5>
        <h5>
          Tempereature - {Number(weather.main.temp - 273.15).toFixed(1)} 'C
        </h5>
        <h5>
          Feels Like - {Number(weather.main.feels_like - 273.15).toFixed(1)} 'C
        </h5>
      </>
    );
  } else return <h1>Loading . . .</h1>;
};

export default PositionData;
