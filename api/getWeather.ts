import { apiKey } from '../constants/constants';

export const getWeatherUrl = (lat: number, long: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
