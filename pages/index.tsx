import type { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { PositionCoordinates } from '../types/PositionTypes';
import PositionData from './positionContainer';

const Home: NextPage = () => {
  const [data, setData] = useState<
    null | GeolocationPositionError | PositionCoordinates
  >();
  useEffect(() => {
    !data &&
      navigator.geolocation.getCurrentPosition(
        (successCallback) => {
          setData({
            lat: successCallback.coords.latitude,
            long: successCallback.coords.longitude,
          });
        },
        (errorCallback) => {
          setData(null);
        }
      );
  }, []);

  return (
    <div>
      Weather
      {data && <PositionData data={data} />}
    </div>
  );
};

export default Home;
