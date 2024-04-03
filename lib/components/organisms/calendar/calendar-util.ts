// TODO: localize in the future
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const abbrDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDaysFromPreviousMonth = (currentMonth, currentYear) => {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();

  const daysFromPreviousMonth = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysFromPreviousMonth.unshift(daysInPreviousMonth - i);
  }

  return daysFromPreviousMonth;
};

export const getDaysFromNextMonth = (
  daysFromPreviousMonth,
  daysInCurrentMonth
) => {
  const totalCells = 7 * 6; // Assuming a 6-row grid
  const emptyCells =
    totalCells - (daysFromPreviousMonth.length + daysInCurrentMonth);

  const daysFromNextMonth = [];
  for (let i = 1; i <= emptyCells; i++) {
    daysFromNextMonth.push(i);
  }

  return daysFromNextMonth;
};
