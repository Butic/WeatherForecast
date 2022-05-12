import { useMemo, useState } from "react";
import { getWeatherUrl } from "./api/getWeather";

const PositionData = ({data}: {data:{lat: number, long: number}}) =>{
    const [weather, setWeather] = useState<any>();
    const getWeather = async () =>{
        const url = getWeatherUrl(data.lat, data.long)
        const response = await fetch(url);
        setWeather(await response.json());
    };
    useMemo(getWeather, [data]);
    console.log(weather);
    
    if(weather){
        return (
            <>
                <h6>_________</h6>
                <h4>Place - {weather.name}</h4>
                <h5>Weather - {weather.weather[0].main}</h5>
                <h5>Wind: speeed - {weather.wind.speed}, direction - {weather.wind.deg}</h5>
                <h5>Sunrise - {new Date(weather.sys.sunrise as number).toLocaleTimeString("en-US")} {weather.sys.sunrise}</h5>
                <h5>Sunset - {new Date(weather.sys.sunset as number).toLocaleTimeString("en-US")}</h5>
                <h5>Tempereature - {Number(weather.main.temp - 273.15).toFixed(1)} 'C</h5>
                <h5>Feels Like - {Number(weather.main.feels_like - 273.15).toFixed(1)} 'C</h5>
            </>
        );
    }
    else return <h1>Loading . . .</h1>
};

export default PositionData;