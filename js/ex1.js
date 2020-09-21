var Student_Name= window.prompt("Enter your first and last name:");
var num_unit= Number(window.prompt("Enter the number of units completed:"));

//Number of units:
var freshman= ("Freshman");
var sophomore= ("Sophomore");
var junior= ("Junior");
var senior= ("Senior");

if((num_unit >=0) && (num_unit<=30)) {
    console.log(`${Student_Name}`);
    console.log(`Your grade standing is: ${num_unit} freshman.`);
} else if((num_unit >=31) && (num_unit<=60)) {
    console.log(`${Student_Name}`);
    console.log(`Your grade standing is: ${num_unit} units sophomore.`);
} else if((num_unit >=61) && (num_unit<=90)) {
    document.write("Your grade standing is: " + junior);
    console.log(`${Student_Name}`);
    console.log(`Your grade standing is: ${num_unit} units junior.`);
} else if(num_unit >=91) {   
    console.log(`${Student_Name}`);
    console.log(`Your grade standing is: ${num_unit} units; senior.`); 
} 