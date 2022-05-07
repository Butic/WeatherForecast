import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import PositionData from './positionContainer';

const Home: NextPage = ({weather, position}: any) => {
  const [data, setData] = useState<GeolocationPosition|GeolocationPositionError>();
  useEffect(()=>{
    !data&&navigator.geolocation.getCurrentPosition((successCallback)=>{setData(successCallback)}, errorCallback=>{setData(errorCallback);
    });
  },[]);
  console.log(data);
  return (
    <div>
      Weather
      <PositionData/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () =>{
  const apiKey = '947a832a049fb46484d52fb43731dd52';
  const city = 'Novorossiysk';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const weather = await response.json();
  
  return {
    props:{
      weather,
    }
  };
}

export default Home;
