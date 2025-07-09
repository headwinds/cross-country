// detect the season based on the current month
export const detect_season = (): string => {
  // Get the current month
  const month = new Date().getMonth();

  // Determine the season based on the month
  if (month in [12, 1, 2]) {
    return "winter";
  } else if (month in [3, 4, 5]) {
    return "spring";
  } else if (month in [6, 7, 8]) {
    return "summer";
  } else if (month in [9, 10, 11]) {
    return "fall";
  }
  return "error";
};

const dateUtil = {
  detect_season,
};

export default dateUtil;
