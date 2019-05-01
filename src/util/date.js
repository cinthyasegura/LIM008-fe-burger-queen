const dateFormat = () => {
  const hours = new Date().getHours();
  const minutes = `0 + ${new Date().getMinutes()}`;
  const formattedTime = `${hours} : ${minutes.substr(-2)}`;
  return formattedTime;   
};
export default dateFormat;