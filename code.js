//this function will display a special effect in the page
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//this function will add a clock to the main page  
// function tellTime() {
//   let now = new Date();
//   let h = now.getHours();
//   let m = now.getMinutes();
//   let s = now.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById("clockContainer").innerHTML = h + ":" + m + ":" + s;
//   let t = setTimeout(tellTime, 500);
// }
//  function checkTime(i) {
//     if (i < 10) {i = "0" + i};
//     return i;
// }

//function to add a clock to the main page
function tellTime() {
  let now = new Date();
  let hh = now.getHours();
  let mm = now.getMinutes();
  let ss = now.getSeconds();
  let session = "AM";

  if (hh == 0) {
hh = 12;
  }
  if (hh > 12) {
hh = hh  -12;
session = "PM"
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;
  
let time = hh + ":" + mm + ":" + ss + " " + session;  
document.getElementById("clockDiv").innerText = time;

let t = setTimeout(function(){ tellTime() } ,1000)
}
tellTime();