//FUNCTION TO GET RANDOM INTEGER
const getRndInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRndInteger;
