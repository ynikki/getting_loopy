/* GETTING L00PY */

/* PRESIDENTS - ACCESSING VALUES IN AN ARRAY */

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

function printContent(arr){
	for(var i = 0; i<arr.length; i++){
		console.log("Value of i is : " + i);
		console.log("Value at Index is: " + arr[i]);
	} return "hey";
}

console.log(printContent(presidents));


/* THE STRING OF NUMBERS */

var stringOfNumbers = '';

	for(var i = 10; i<=20; i++){
		stringOfNumbers += i;
	}

console.log(stringOfNumbers);

function appendToString(numbers){
	for(var i = 10; i <= 20; i++){
		stringOfNumbers += i;
	} 
	return numbers;
}

console.log(appendToString(stringOfNumbers));