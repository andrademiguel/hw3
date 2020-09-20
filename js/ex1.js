var Student_Name= window.prompt("Enter your first and last name:");
var num_unit= Number(window.prompt("Enter the number of units completed:"));

//Number of units:
var freshman= ("Freshman");
var sophomore= ("Sophomore");
var junior= ("Junior");
var senior= ("Senior");
document.write("Hello " + Student_Name + "\n");

if((num_unit >=0) && (num_unit<=30)) {
    document.write("Your grade standing is: " + freshman);
} else if((num_unit >=31) && (num_unit<=60)) {
    document.write("Your grade standing is: " + sophomore);
} else if((num_unit >=61) && (num_unit<=90)) {
    document.write("Your grade standing is: " + junior);
} else if(num_unit >=91) {
    document.write("Your grade standing is: " + senior);    
} 

console.log(Student_Name);
console.log(num_unit);

//work on else statement and formatting. 