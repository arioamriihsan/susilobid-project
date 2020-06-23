const converter = arr => {
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
    for (let j = 6; j > i; j--) {
      if (arr[i].day === arrOfObj[j].day) {
        arrOfObj[j].count += arr[i].count
      }
    }
  }
  return arrOfObj;
};

const coba = converter([
  {day: 'Monday', count: 2},
  {day: 'Thursday', count: 5},
  {day: 'Saturday', count: 9}
]);

const coba = converter([
  {day: 'Monday', count: 2},
  {day: 'Thursday', count: 5},
  {day: 'Saturday', count: 9}
]);

console.log(coba);