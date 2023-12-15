const YEAR = 2023;
const MONTH = 12;

const findDayOfWeek = (date) => {
  const dateSet = new Date(`${YEAR}-${MONTH}-${date}`);
  return dateSet.getDay();
};

export default findDayOfWeek;
