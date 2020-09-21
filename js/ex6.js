let hours = Number(prompt("Enter the hours:"));
let minutes = Number(prompt("Enter the minutes:"));
let seconds = Number(prompt("Enter the seconds:"));

console.log(`Time input: ${hours}h ${minutes}m ${seconds}s`);
if (
  hours >= 0 &&
  hours <= 23 &&
  minutes >= 0 &&
  minutes <= 59 &&
  seconds >= 0 &&
  seconds <= 59
) {
  seconds++; 
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }

  console.log(`One second later: ${hours}h ${minutes}m ${seconds}s`);
} else {
  console.log("Incorrect hour!");
}