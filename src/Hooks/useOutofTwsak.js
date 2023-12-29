import useGetdayName from "./useGetdayName";

const useOutofTwsak = (y) => {
  let Y = parseInt(y);
  let tsomeLdet = { dayNO: 15, monthNo: 3, monthName: "ህዳር", eletName: "" ,year: null};
  tsomeLdet.year= Y;
  tsomeLdet.eletName  = useGetdayName(tsomeLdet.dayNO, tsomeLdet.monthNo, Y);
  

  //==================================================================================
  let gena = { dayNO: null, monthNo: 4, monthName: "ታህሳስ", eletName: "" ,year: null};
  if(Y%4 === 0){
    gena.dayNO = 28;
  }
  else{
    gena.dayNO = 29;
  }
  gena.year= Y;
  gena.eletName = useGetdayName(gena.dayNO, gena.monthNo, Y);

  //==================================================================================
  let bealeGzret = { dayNO: 6, monthNo: 5, monthName: "ጥር", eletName: "" ,year: null};
  bealeGzret.year= Y;
  bealeGzret.eletName= useGetdayName(bealeGzret.dayNO, bealeGzret.monthNo, Y);
   
  //==================================================================================
  let tsomeGehad = { dayNO: 10, monthNo: 5, monthName: "ጥር", eletName: "" ,year: null};
  tsomeGehad.year= Y;
  tsomeGehad.eletName= useGetdayName(tsomeGehad.dayNO, tsomeGehad.monthNo, Y);
 

  //==================================================================================
  let bealeTmket = { dayNO: 11, monthNo: 5, monthName: "ጥር", eletName: "" ,year: null};
  bealeTmket.year= Y;
  bealeTmket.eletName= useGetdayName(bealeTmket.dayNO, bealeTmket.monthNo, Y);
  

  //==================================================================================
  let bealeSmon = { dayNO: 8, monthNo: 6, monthName: "የካቲት", eletName: "" ,year: null};
  bealeSmon.year= Y;
  bealeSmon.eletName = useGetdayName(bealeSmon.dayNO, bealeSmon.monthNo, Y);
  

  //==================================================================================
  let bealeBsrat = { dayNO: 29, monthNo: 7, monthName: "መጋቢት", eletName: "" ,year: null};
  bealeBsrat.year= Y;
  bealeBsrat.eletName = useGetdayName(bealeBsrat.dayNO, bealeBsrat.monthNo, Y);
  

  //==================================================================================
  let tsomeFlseta = { dayNO: 1, monthNo: 12, monthName: "ነሃሴ", eletName: "" ,year: null};
  tsomeFlseta.year= Y;
  tsomeFlseta.eletName = useGetdayName(tsomeFlseta.dayNO, tsomeFlseta.monthNo, Y);
  

  //==================================================================================
  let debreTabor = { dayNO: 13, monthNo: 12, monthName: "ነሃሴ", eletName: "" ,year: null};
  debreTabor.year= Y;
  debreTabor.eletName = useGetdayName(debreTabor.dayNO, debreTabor.monthNo, Y);
 

  //==================================================================================
 
  return [tsomeLdet,gena, bealeGzret,tsomeGehad,bealeTmket,bealeSmon,bealeBsrat,tsomeFlseta,debreTabor];
};

export default useOutofTwsak;