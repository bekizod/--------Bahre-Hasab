const useGetdayName = (d, m, y) => {
  let gregd, gregm, gregy;

  if (m <= 3 && m >= 1) {
    gregy = y + 7;
  } else if (m === 4) {
    if (y % 4 === 0) {
      if (d < 22) {
        gregy = y + 7;
      } else {
        gregy = y + 8;
      }
    } else {
      if (d < 23) {
        gregy = y + 7;
      } else {
        gregy = y + 8;
      }
    }
  } else {
    gregy = y + 8;
  }

  switch (m) {
    case 1:
      if (y % 4 === 0) {
        if (d < 20) {
          gregm = 9;
          gregd = d + 11;
        } else {
          gregm = 10;
          gregd = d - 19;
        }
      } else {
        if (d < 21) {
          gregm = 9;
          gregd = d + 10;
        } else {
          gregm = 10;
          gregd = d - 20;
        }
      }
      break;
    case 2:
      if (y % 4 === 0) {
        if (d < 21) {
          gregm = 10;
          gregd = d + 11;
        } else {
          gregm = 11;
          gregd = d - 20;
        }
      } else {
        if (d < 22) {
          gregm = 10;
          gregd = d + 10;
        } else {
          gregm = 11;
          gregd = d - 21;
        }
      }
      break;
    case 3:
      if (y % 4 === 0) {
        if (d < 21) {
          gregm = 11;
          gregd = d + 10;
        } else {
          gregm = 12;
          gregd = d - 20;
        }
      } else {
        if (d < 22) {
          gregm = 11;
          gregd = d + 9;
        } else {
          gregm = 12;
          gregd = d - 21;
        }
      }
      break;
    case 4:
      if (y % 4 === 0) {
        if (d < 22) {
          gregm = 12;
          gregd = d + 10;
        } else {
          gregm = 1;
          gregd = d - 21;
        }
      } else {
        if (d < 23) {
          gregm = 12;
          gregd = d + 9;
        } else {
          gregm = 1;
          gregd = d - 22;
        }
      }
      break;
    case 5:
      if (y % 4 === 0) {
        if (d < 23) {
          gregm = 1;
          gregd = d + 9;
        } else {
          gregm = 2;
          gregd = d - 22;
        }
      } else {
        if (d < 24) {
          gregm = 1;
          gregd = d + 8;
        } else {
          gregm = 2;
          gregd = d - 23;
        }
      }
      break;
    case 6:
      if (y % 4 === 0) {
        if (d < 22) {
          gregm = 2;
          gregd = d + 8;
        } else {
          gregm = 3;
          gregd = d - 21;
        }
      } else {
        if (d < 22) {
          gregm = 2;
          gregd = d + 7;
        } else {
          gregm = 3;
          gregd = d - 21;
        }
      }
      break;
    case 7:
      if (d < 23) {
        gregm = 3;
        gregd = d + 9;
      } else {
        gregm = 4;
        gregd = d - 22;
      }
      break;
    case 8:
      if (d < 23) {
        gregm = 4;
        gregd = d + 8;
      } else {
        gregm = 5;
        gregd = d - 22;
      }
      break;
    case 9:
      if (d < 24) {
        gregm = 5;
        gregd = d + 8;
      } else {
        gregm = 6;
        gregd = d - 23;
      }
      break;
    case 10:
      if (d < 24) {
        gregm = 6;
        gregd = d + 7;
      } else {
        gregm = 7;
        gregd = d - 23;
      }
      break;
    case 11:
      if (d < 25) {
        gregm = 7;
        gregd = d + 7;
      } else {
        gregm = 8;
        gregd = d - 24;
      }
      break;
    case 12:
      if (d < 26) {
        gregm = 8;
        gregd = d + 6;
      } else {
        gregm = 9;
        gregd = d - 25;
      }
      break;
    case 13:
      gregm = 9;
      gregd = d + 5;
      break;
    default:
  }
  const date = new Date(parseInt(gregy), parseInt(gregm - 1), parseInt(gregd));
  const options = { weekday: "long" };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const dayName = formatter.format(date);
  let etDayName;
  if (dayName === "Monday") {
    etDayName = "ሰኞ";
  } else if (dayName === "Tuesday") {
    etDayName = "ማክሰኞ";
  } else if (dayName === "Wednesday") {
    etDayName = "ረቡዕ";
  } else if (dayName === "Thursday") {
    etDayName = "ሐሙስ";
  } else if (dayName === "Friday") {
    etDayName = "ዓርብ";
  } else if (dayName === "Saturday") {
    etDayName = "ቅዳሜ";
  } else if (dayName === "Sunday") {
    etDayName = "እሑድ";
  }
  return [etDayName];
};

export default useGetdayName;
