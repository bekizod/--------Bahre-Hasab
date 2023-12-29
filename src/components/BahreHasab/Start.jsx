import { useState } from "react";
import useCalendar from "../../Hooks/useCalendar";
import useOutofTwsak from "../../Hooks/useOutofTwsak";
import "../BahreHasab.css";
import Nav from "../../Pages/Nav";
import Footer from "../../Pages/Footer";
import useGTE from "../../Hooks/useGTE";
import { motion } from "framer-motion";
// import Footer from '../../Pages/Footer.jsx';

const Start = () => {
  const [etDay, ethd, wer, ethy, ethm] = useGTE();
  const [year, setYear] = useState(ethy);
  const renderyearOptions = () => {
    const maxDays = 3000;
    const yearOptions = [];

    for (let i = 1900; i <= maxDays; i++) {
      yearOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return yearOptions;
  };
  const [
    ameteAlem,
    meteneRabet,
    mebacha,
    wengelawi,
    medeb,
    wenber,
    abekte,
    metq,
    metqdayname,
    eleteTewsak,
    nenewe,
    neneweMonth,
  ] = useCalendar(year);

  function handlTsom() {
    let AbiyMonth;
    var k;
    const month = ["ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሃምሌ", "ነሃሴ"];

    if (neneweMonth == "ጥር") {
      k = 0;
    } else if (neneweMonth == "የካቲት") {
      k = 1;
    }

    let AbiyTsom = parseInt(nenewe + 14);

    if (AbiyTsom < nenewe) {
      k += 1;
      AbiyMonth = month[k];
    } else if (AbiyTsom > 30) {
      AbiyTsom = AbiyTsom - 30;
      k += 1;
      AbiyMonth = month[k];
    } else if (AbiyTsom < 30) {
      AbiyMonth = month[k];
    }
    //=========================================================================

    let debreZeyit;
    let debreZeyitMonth;

    debreZeyit = parseInt(nenewe + 11);
    if (debreZeyit < AbiyTsom) {
      k += 1;
      debreZeyitMonth = month[k];
    } else if (debreZeyit > 30) {
      debreZeyit = debreZeyit - 30;
      k += 1;
      debreZeyitMonth = month[k];
    } else if (debreZeyit <= 30) {
      debreZeyitMonth = month[k];
    }

    //==========================================================================
    let hosaena;
    let hosaenaMonth;

    hosaena = parseInt(nenewe + 2);
    if (hosaena < debreZeyit) {
      k += 1;
      hosaenaMonth = month[k];
    } else if (hosaena > 30) {
      hosaena -= 30;
      k += 1;
      hosaenaMonth = month[k];
    } else if (hosaena <= 30) {
      hosaenaMonth = month[k];
    }

    //===================================================================
    let sqlet;
    let sqletMonth;
    sqlet = parseInt(nenewe + 7);

    if (sqlet < hosaena) {
      k += 1;
      sqletMonth = month[k];
    } else if (sqlet > 30) {
      sqlet -= 30;
      if (hosaena + 5 > 30) {
        k += 1;
      }
      sqletMonth = month[k];
    } else if (sqlet <= 30) {
      sqletMonth = month[k];
    }
    //=====================================================================

    let tnsae;
    let tnsaeMonth;
    tnsae = parseInt(nenewe + 9);

    if (tnsae > 30) {
      tnsae -= 30;
    }

    if (sqlet + 2 <= 30) {
      tnsaeMonth = month[k];
    } else if (sqlet + 2 > 30) {
      k += 1;
      tnsaeMonth = month[k];
    }

    //============================================================
    let rkbeKahnat;
    let rkbekahnatMonth;

    rkbeKahnat = parseInt(nenewe + 3);
    if (rkbeKahnat < tnsae) {
      k += 1;
      rkbekahnatMonth = month[k];
    } else if (rkbeKahnat > 30) {
      rkbeKahnat -= 30;
      k += 1;
      rkbekahnatMonth = month[k];
    } else if (rkbeKahnat <= 30) {
      rkbekahnatMonth = month[k];
    }
    //================================================================
    let erget;
    let ergetMonth;
    erget = parseInt(nenewe + 18);
    if (erget < rkbeKahnat) {
      k += 1;
      ergetMonth = month[k];
    } else if (erget > 30) {
      erget -= 30;
      if (rkbeKahnat + 15 > 30) {
        k += 1;
      }
      ergetMonth = month[k];
    } else if (erget <= 30) {
      ergetMonth = month[k];
    }

    //====================================================================
    let peraqlitos;
    let peraqlitosMonth;
    peraqlitos = parseInt(nenewe + 28);
    if (peraqlitos < erget) {
      k += 1;
      peraqlitosMonth = month[k];
    } else if (peraqlitos > 30) {
      peraqlitos -= 30;
      if (erget + 10 > 30) {
        k += 1;
      }
      peraqlitosMonth = month[k];
    } else if (sqlet <= 30) {
      peraqlitosMonth = month[k];
    }
    //===================================================================
    let tsomeHawaryat;
    let tsomehawariyatMonth;
    tsomeHawaryat = parseInt(nenewe + 29);

    if (tsomeHawaryat < erget) {
      k += 1;
      tsomehawariyatMonth = month[k];
    } else if (tsomeHawaryat > 30) {
      tsomeHawaryat -= 30;
      if (peraqlitos + 1 > 30) {
        k += 1;
      }
      tsomehawariyatMonth = month[k];
    } else if (tsomeHawaryat <= 30) {
      tsomehawariyatMonth = month[k];
    }
    //=====================================================================
    let tsomeDhnet;
    let tsomeDhnetMonth;
    tsomeDhnet = parseInt(nenewe + 1);

    if (tsomeDhnet < tsomeHawaryat) {
      k += 1;
      tsomeDhnetMonth = month[k];
    } else if (tsomeDhnet > 30) {
      tsomeDhnet -= 30;
      if (tsomeHawaryat + 2 > 30) {
        k += 1;
      }
      tsomeDhnetMonth = month[k];
    } else if (tsomeDhnet <= 30) {
      tsomeDhnetMonth = month[k];
    }
    //======================================================
    return [
      AbiyTsom,
      AbiyMonth,
      debreZeyit,
      debreZeyitMonth,
      hosaena,
      hosaenaMonth,
      sqlet,
      sqletMonth,
      tnsae,
      tnsaeMonth,
      rkbeKahnat,
      rkbekahnatMonth,
      erget,
      ergetMonth,
      peraqlitos,
      peraqlitosMonth,
      tsomeHawaryat,
      tsomehawariyatMonth,
      tsomeDhnet,
      tsomeDhnetMonth,
    ];
  }

  const [
    AbiyTsom,
    AbiyMonth,
    debreZeyit,
    debreZeyitMonth,
    hosaena,
    hosaenaMonth,
    sqlet,
    sqletMonth,
    tnsae,
    tnsaeMonth,
    rkbeKahnat,
    rkbekahnatMonth,
    erget,
    ergetMonth,
    peraqlitos,
    peraqlitosMonth,
    tsomeHawaryat,
    tsomehawariyatMonth,
    tsomeDhnet,
    tsomeDhnetMonth,
  ] = handlTsom();

  const [
    tsomeLdet,
    gena,
    bealeGzret,
    tsomeGehad,
    bealeTmket,
    bealeSmon,
    bealeBsrat,
    tsomeFlseta,
    debreTabor,
  ] = useOutofTwsak(year);
  return (
    <div className="text-white bh h-[100%]">
      <Nav />
      <motion.div 
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="text-black shadow-2xl  shadow-black text-3xl py-5 flex lg:py-5 xl:py-5 2xl:py-8  justify-center ">
        <label htmlFor="year" className="font-bold">
          <span className="text-white b">ዓመተ ምህረት፡ </span>
        </label>
        <select
          id="day"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-lg text-center mx-4 shadow-lg px-5 bg-white "
        >
          {renderyearOptions()}
        </select>
      </motion.div>

      <div className="container mx-auto justify-center pb-18 md:pb-[35%] lg:pb-24 xl:pb-28 2xl:pb-[12%]  pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 relative mx-3 justify-center text-white text-center text-2xl font-bold">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-300  bg rounded-lg shadow-3xl shadow-white p-4 mx-3 border-2 border-white-700 "
            title="Card 1"
          >
            ዓመተዓለም፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ameteAlem}
            <br />
            መጠነ ራብዒት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{meteneRabet}
            <br />
            መባቻ(መስከረም 1)፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{mebacha}
            <br />
            ወንጌላዊ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{wengelawi}
            <br />
            መደብ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{medeb}
            <br />
            ወንበር፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{wenber}
            <br />
            አበቅቴ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{abekte}
            <br />
          </motion.div>

          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-300 bg rounded-lg  p-4 mx-3 border-2 border-white-700 "
            title="Card 2"
          >
            መጥቅዕ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{metq}
            <br />
            እለተ መጥቅ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{metqdayname}
            <br />
            እለተ ተውሳክ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{eleteTewsak}
            <br />
            ጾመ ነነዌ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{neneweMonth},{nenewe}
            <br />
            አቢይ ጾም፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{AbiyMonth},{AbiyTsom}
            <br />
            ደብረ ዘይት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{debreZeyitMonth},
            {debreZeyit}
            <br />
            ሆሳዕና፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{hosaenaMonth},{hosaena}
          </motion.div>

          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-300 bg rounded-lg  p-4 mx-3 border-2 border-white-700 "
            title="Card 3"
          >
            ስቅለት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sqletMonth},{sqlet}
            <br />
            ትንሳዔ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tnsaeMonth},{tnsae}
            <br />
            ርክበ ካህናት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{rkbekahnatMonth},
            {rkbeKahnat}
            <br />
            ዕርገት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ergetMonth},{erget}
            <br />
            ጰራቅሊጦስ፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{peraqlitosMonth},
            {peraqlitos}
            <br />
            ጾመ ሃዋርያት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tsomehawariyatMonth},
            {tsomeHawaryat} <br />
            ጾመ ድህነት፡ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{tsomeDhnetMonth},
            {tsomeDhnet}
          </motion.div>

          <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="bg-slate-300 bg rounded-lg  p-4 mx-3 border-2 border-white-700 "
            title="ያለ ተውሳክ የሚገኙ በዓላት እና ዓጽዋማት"
          >
            ጾመ ልደት: &nbsp;{tsomeLdet.eletName} ,{tsomeLdet.monthName} ,
            {tsomeLdet.dayNO}
            <br />
            ገና፡ &nbsp;{gena.eletName}, {gena.monthName} ,{gena.dayNO}
            <br />
            በዓለ ግዝረት፡ &nbsp;{bealeGzret.eletName},{bealeGzret.monthName} ,
            {bealeGzret.dayNO}
            <br />
            ጾመ ገሃድ፡ &nbsp;{tsomeGehad.eletName},{tsomeGehad.monthName} ,
            {tsomeGehad.dayNO}
            <br />
            በዓለ ጥምቀት፡ &nbsp;{bealeTmket.eletName},{bealeTmket.monthName} ,
            {bealeTmket.dayNO}
            <br />
            በዓለ ስምዖን፡ &nbsp;{bealeSmon.eletName},{bealeSmon.monthName} ,
            {bealeSmon.dayNO}
            <br />
            በዓለ ብስራት፡ &nbsp;{bealeBsrat.eletName},{bealeBsrat.monthName} ,
            {bealeBsrat.dayNO}
            <br />
            ጾመ ፍልሰታ፡ &nbsp;{tsomeFlseta.eletName},{tsomeFlseta.monthName} ,
            {tsomeFlseta.dayNO}
            <br />
            ደብረ ታቦር፡ &nbsp;{debreTabor.eletName},{debreTabor.monthName} ,
            {debreTabor.dayNO}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Start;

// const [month, setMonth] = useState({1:"ሰኞ",2:"ማክሰኞ",3:"ረብዕ",4:"ሃሙስ",5:"አርብ",6:"ቅዳሜ",7:"እሁድ"});
// const [dayNumber, setDayNumber] = useState({ሰኞ:1,ማክሰኞ:2,ረቡእ:3})
