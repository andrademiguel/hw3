const day = prompt("Enter three letter abbreviation of a day of the week:");

if (day === "mon") {
  console.log(`You entered: ${day}`);  
  console.log("The following day is: tuesday");
} else if (day === "tue") {
    console.log(`You entered: ${day}`); 
    console.log("The following day is: wednesday");
} else if (day === "wed") {
    console.log(`You entered: ${day}`); 
    console.log("The following day is: thursday");
} else if (day === "thu") {
    console.log(`You entered: ${day}`); 
    console.log("The following day is: friday");
} else if (day === "fri") {
    console.log(`You entered: ${day}`); 
    console.log("The following day is: saturday");
} else if (day === "sat") {
    console.log(`You entered: ${day}`);
    console.log("The following day is: sunday"); 
} else if (day === "sun") {
    console.log(`You entered: ${day}`); 
    console.log("The following day is: monday");
} else {
  console.log("Unrecognized day!");
}