const currentDate = new Date().toISOString().slice(0, 10);

const useGTE = (
  y = parseInt(currentDate.slice(0, 4)),
  m = parseInt(currentDate.slice(5, 7)),
  d = parseInt(currentDate.slice(8, 10))
) => {

  var etDay;
  const ethmonth = [
    "መስከረም",
    "ጥቅምት",
    "ህዳር",
    "ታህሳስ",
    "ጥር",
    "የካቲት",
    "መጋቢት",
    "ሚያዚያ",
    "ግንቦት",
    "ሰኔ",
    "ሃምሌ",
    "ነሃሴ",
    "ጷጉሜን",
  ];
  let ethd, ethm, ethy;
  if (m <= 8 && m >= 1) {
    ethy = y - 8;
  } else if (m === 9) {
    if (y % 4 === 3) {
      if (d <= 11) {
        ethy = y - 8;
      } else {
        ethy = y - 7;
      }
    } else {
      if (d <= 10) {
        ethy = y - 8;
      } else {
        ethy = y - 7;
      }
    }
  } else {
    ethy = y - 7;
  }

  switch (m) {
    case 1:
      if (ethy % 4 === 0) {
        if (d < 10) {
          ethm = 4;
          ethd = d - 10 + 31;
        } else {
          ethm = 5;
          ethd = d - 9;
        }
      } else {
        if (d < 9) {
          ethm = 4;
          ethd = d - 9 + 31;
        } else {
          ethm = 5;
          ethd = d - 8;
        }
      }
      break;
    case 2:
      if (ethy % 4 === 0) {
        if (d < 9) {
          ethm = 5;
          ethd = d - 9 + 31;
        } else {
          ethm = 6;
          ethd = d - 8;
        }
      } else {
        if (d < 8) {
          ethm = 5;
          ethd = d - 8 + 31;
        } else {
          ethm = 6;
          ethd = d - 7;
        }
      }
      break;
    case 3:
      if (d < 10) {
        ethm = 6;
        ethd = d - 10 + 31;
      } else {
        ethm = 7;
        ethd = d - 9;
      }
      break;
    case 4:
      if (d < 9) {
        ethm = 7;
        ethd = d - 9 + 31;
      } else {
        ethm = 8;
        ethd = d - 8;
      }
      break;
    case 5:
      if (d < 9) {
        ethm = 8;
        ethd = d - 9 + 31;
      } else {
        ethm = 9;
        ethd = d - 8;
      }
      break;
    case 6:
      if (d < 8) {
        ethm = 9;
        ethd = d - 8 + 31;
      } else {
        ethm = 10;
        ethd = d - 7;
      }
      break;
    case 7:
      if (d < 8) {
        ethm = 10;
        ethd = d - 8 + 31;
      } else {
        ethm = 11;
        ethd = d - 7;
      }
      break;
    case 8:
      if (d < 7) {
        ethm = 11;
        ethd = d - 7 + 31;
      } else {
        ethm = 12;
        ethd = d - 6;
      }
      break;
    case 9:
      if (d < 6) {
        ethm = 12;
        ethd = d - 6 + 31;
      } else {
        if (y % 4 === 3) {
          if (d < 12) {
            ethm = 13;
            ethd = d - 5;
          } else {
            ethm = 1;
            ethd = d - 11;
          }
        } else {
          if (d < 11) {
            ethm = 13;
            ethd = d - 5;
          } else {
            ethm = 1;
            ethd = d - 10;
          }
        }
      }
      break;
    case 10:
      if (ethy % 4 === 0) {
        if (d < 12) {
          ethm = 1;
          ethd = d - 12 + 31;
        } else {
          ethm = 2;
          ethd = d - 11;
        }
      } else {
        if (d < 11) {
          ethm = 1;
          ethd = d - 11 + 31;
        } else {
          ethm = 2;
          ethd = d - 10;
        }
      }
      break;
    case 11:
      if (ethy % 4 === 0) {
        if (d < 11) {
          ethm = 2;
          ethd = d - 11 + 31;
        } else {
          ethm = 3;
          ethd = d - 10;
        }
      } else {
        if (d < 10) {
          ethm = 2;
          ethd = d - 10 + 31;
        } else {
          ethm = 3;
          ethd = d - 9;
        }
      }
      break;
    case 12:
      if (ethy % 4 === 0) {
        if (d < 11) {
          ethm = 3;
          ethd = d - 11 + 31;
        } else {
          ethm = 4;
          ethd = d - 10;
        }
      } else {
        if (d < 10) {
          ethm = 3;
          ethd = d - 10 + 31;
        } else {
          ethm = 4;
          ethd = d - 9;
        }
      }
      break;
    default:
  }
  
      const date = new Date(parseInt(y), parseInt(m - 1),parseInt(d));
      const options = { weekday: "long" };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      const dayName = formatter.format(date);
    
        const DayCon = [
          { name: "Sunday", value: "እሑድ" },
          { name: "Monday", value: "ሰኞ" },
          { name: "Tuesday", value: "ማክሰኞ" },
          { name: "Wednesday", value: "ረቡዕ" },
          { name: "Thursday", value: "ሐሙስ" },
          { name: "Friday", value: "ዓርብ" },
          { name: "Saturday", value: "ቅዳሜ" },
        ];
    
        DayCon.map((d) => {
          if (dayName === d.name) {
            etDay=d.value;
          }
    
          return null;
        });
        
  return [etDay, ethd, ethmonth[ethm - 1], ethy, ethm];
};
export default useGTE;
