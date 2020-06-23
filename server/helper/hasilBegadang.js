const hasilBegadang = arr => {
  const arrOfObj = [
    {day: 'Sunday', count: 0},
    {day: 'Monday', count: 0},
    {day: 'Tuesday', count: 0},
    {day: 'Wednesday', count: 0},
    {day: 'Thursday', count: 0},
    {day: 'Friday', count: 0},
    {day: 'Saturday', count: 0}
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 6; j >= i; j--) {
      if (arr[i].day === arrOfObj[j].day) {
        arrOfObj[j].count += arr[i].count
      }
    }
  }
  return arrOfObj;
};

// const coba = hasilBegadang([
//   { day: 'Sunday', count: 2 },
//   { day: 'Monday', count: 1 },
//   { day: 'Wednesday', count: 3 },
//   { day: 'Thursday', count: 1 },
//   { day: 'Saturday', count: 3 }
// ]);
// console.log(coba);

module.exports = {
  hasilBegadang
};