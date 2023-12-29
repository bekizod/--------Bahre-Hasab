import { useEffect } from "react";

const useTsom = ({ NNwe, neneweMonth }) => {
    useEffect(()=>{
        console.log(NNwe);
        console.log(AbiyMonth);
    })
  
  var k;
  const month = ["ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሃምሌ", "ነሃሴ"];
  let AbiyTsom;
  let AbiyMonth;
  if (neneweMonth == "ጥር") {
    k = 0;
  } else if (neneweMonth == "የካቲት") {
    k = 1;
  }

  AbiyTsom = parseInt(NNwe + 14);
  if (AbiyTsom < NNwe) {
    k += 1;
    AbiyMonth = month[k];
  }

  return [AbiyTsom, AbiyMonth];
};

export default useTsom;
