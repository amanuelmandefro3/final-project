import { arabicToGeez } from "./arabicToGeez.js";
export function showTime(today){
    let h = today.getHours() - 6; // 0 - 23
    let m = today.getMinutes(); // 0 - 59
    let s = today.getSeconds(); // 0 - 59
    let session = "ጥዋት";
    
    if(h == 0){
        h = 12;
    }
    
    
    if(h > 12){
        h = h - 12;
        session = "ማታ";
    }else if (h >= 6 && h <= 12){
      session = "ከሳዓት"
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
   
    let time = h +  ":" + m + ":" + s+ " ፣ " + session; 
    document.getElementById("MyClockDisplay").textContent = time;
    
  }

export function getDay(ethiopianDate){
    const date = ethiopianDate[1] + " ፣ "+ arabicToGeez(ethiopianDate[2]) +  " ፣ " +arabicToGeez( ethiopianDate[0]);
    document.getElementById("date").innerHTML = date;
  }