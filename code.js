//this function will display a special effect in the page
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

//this function will add a clock to the main page  
function tellTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clockContainer").innerHTML = h + ":" + m + ":" + s;
  let t = setTimeout(tellTime, 500);
}
 function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}