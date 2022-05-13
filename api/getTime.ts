export const getTime = (timestamp: number) => {
  const time = new Date(timestamp * 1000);
  const hours = '' + time.getHours();
  const minutes = ('0' + time.getMinutes()).substring(-2);
  const seconds = ('0' + time.getSeconds()).substring(-2);
  return (
    (hours.length === 2 ? hours : '0' + hours) +
    ':' +
    (minutes.length === 3 ? minutes.substring(1) : minutes) +
    ':' +
    (seconds.length === 3 ? seconds.substring(1) : seconds)
  );
};
