const elTime = document.querySelector(".time");
const elDate = document.querySelector(".date");
const elText = document.querySelector(".text");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function getDate() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  console.log(month);
  const day = date.getDate();
  const dayOfWeek = date.getDay();
  elDate.innerText =
    addZero(year) +
    "-" +
    addZero(month) +
    "-" +
    addZero(day) +
    " " +
    week[dayOfWeek];
  elTime.innerText =
    addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
  elText.innerText = "DIGITAL CLOCK";
}
function addZero(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
setInterval(getDate, 1000);
