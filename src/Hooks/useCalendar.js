/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import useGetdayName from "./useGetdayName";
import useTsom from "./useTsom";

let AmeteFda = 5500;
const useCalendar = (y) => {
  const Y = parseInt(y);
  let ameteAlem;
  let meteneRabit;
  let mebachaNO;
  let mebacha;
  let wengelawiNO;
  let wengelawi;
  let medeb;
  let wenber;
  let abekte;
  const tnteAbeqte = 11;
  let metq;
  const tnteMetq = 19;
  let metqMonth;
  let nenewe;
  let neneweMonth;
  let abiyTsom;
  let debreZeyit;
  let hosaena;
  let sqlet;
  let tnsae;
  let rkbe_Kahnat;
  let erget;
  let peraqlitos;
  let tsome_Hawariyat;
  let tsome_Dhnet;

  ameteAlem = AmeteFda + Y;
  meteneRabit = parseInt(ameteAlem / 4);
  mebachaNO = (ameteAlem + meteneRabit) % 7;

  const dayMebacha = ["ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ", "እሁድ"];
  mebacha = dayMebacha[mebachaNO];

  wengelawiNO = ameteAlem % 4;
  const wengelawiName = {
    1: "ማቴዎስ",
    2: "ማርቆስ",
    3: "ሉቃስ",
    4: "ዮሐንስ",
    0: "ዮሐንስ",
  };
  wengelawi = wengelawiName[wengelawiNO];

  medeb = ameteAlem % 19;
  if(medeb===0){
    wenber=medeb+18;
  }else{wenber = medeb - 1;}


  abekte = (wenber * tnteAbeqte) % 30;

  let metqCheck = (wenber * tnteMetq) % 30;

  if (abekte === 0) {
    metq = 30;
  } else {
    metq = metqCheck;
  }
  let k;
  const Months=["ጥር","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰኔ","ሃምሌ","ነሃሴ",]
  if (metq < 14) {
    metqMonth = "ጥቅምት";
    neneweMonth = "የካቲት";
  } else if (metq > 30) {
    metq -= 30;
    metqMonth = "ጥቅምት";
    neneweMonth = "የካቲት";
  } else {
    metqMonth = "መስከረም";
    neneweMonth = "ጥር";
  }

  let metqMonthNumber;
  if (metqMonth === "መስከረም") {
    metqMonthNumber = 1;
  } else if (metqMonth === "ጥቅምት") {
    metqMonthNumber = 2;
  }

  const metqdayname = useGetdayName(metq, metqMonthNumber, Y);
 

  let eletTewsak;
  if (metqdayname == "ሰኞ") {
    eletTewsak = 6;
  } else if (metqdayname == "ማክሰኞ") {
    eletTewsak = 5;
  } else if (metqdayname == "ረቡዕ") {
    eletTewsak = 4;
  } else if (metqdayname == "ሐሙስ") {
    eletTewsak = 3;
  } else if (metqdayname == "ዓርብ") {
    eletTewsak = 2;
  } else if (metqdayname == "ቅዳሜ") {
    eletTewsak = 8;
  } else if (metqdayname == "እሑድ") {
    eletTewsak = 7;
  }
  else{
    null;
  }


 nenewe = metq + eletTewsak;

 if(nenewe >30){
    nenewe-=30;
    neneweMonth="የካቲት";
 }

 
  return [
    ameteAlem,
    meteneRabit,
    mebacha,
    wengelawi,
    medeb,
    wenber,
    abekte,
    metq,
    metqdayname,
    eletTewsak,
    nenewe,
    neneweMonth
  ];
};

export default useCalendar;
