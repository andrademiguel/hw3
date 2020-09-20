var password = "secret"
var response; 
var entryCount = 0;
var entryLimit = 3;
var error = false;


while(response != password && !error){ 
    if (entryCount < entryLimit) {
        response = window.prompt("Enter Password");
        entryCount++;
    } else { 
        error = true;
    }
}
if (error) {
    alert("Your account is locked! You failed to enter the correct password  "+entryLimit+" times");
} else {
    alert(""+entryCount+", represents number of attempts");
}