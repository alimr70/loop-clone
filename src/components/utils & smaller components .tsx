// export const sortDates = (dates: string[]) => {
//   let datesTimes = dates.map((el) => {
//     return new Date(el).getTime();
//   });

//   let sortedTimes = datesTimes.sort((date1, date2) => {
//     return date1 > date2 ? -1 : date2 > date1 ? 1 : 0;
//   });

//   let sortedDates = sortedTimes.map((el) => {
//     return new Date(el).toDateString();
//   });

//   return sortedDates;
// };

export const generate30Days = (startDate: number) => {
  let daysArr: number[] = [];

  let todayDate = new Date().setHours(0, 0, 0, 0);
  if (startDate === todayDate) {
    daysArr.push(startDate);
  }
  // startDate === todayDate ? daysArr.push(startDate) : "";

  for (let i = 0; i <= 60; i++) {
    if (daysArr.length) {
      daysArr.push(daysArr[daysArr.length - 1] - 86400000);
    } else {
      daysArr.push(startDate - 86400000);
    }
  }

  let dates = daysArr.map((el) => new Date(el).toDateString());

  return dates;
};
