import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import PositionData from './positionContainer';

const Home: NextPage = ({weather}: any) => {
  const [data, setData] = useState<null|GeolocationPositionError|{lat: number, long: number}>();
  useEffect(()=>{
    !data&&navigator.geolocation.getCurrentPosition((successCallback)=>{setData({lat: successCallback.coords.latitude, long: successCallback.coords.longitude})}, errorCallback=>{setData(null);
    });
  },[]);

  
  return (
    <div>
      Weather
      {data&&<PositionData data={data as {lat: number, long: number}} />}
    </div>
  );
};

export default Home;
