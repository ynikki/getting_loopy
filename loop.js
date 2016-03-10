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

/* ADD ONLY EVEN NUMBERS */

var evenNumberArray = '';
var sum = 0;

for(var i = 0; i<=100; i ++){
	if(i % 2 === 0){
		sum += i;
	}
}

console.log(sum);

/* ACCESSING ONLY THE ODD INDEXES OF AN ARRAY - 'NOT EVEN BRAH' */

var oopsArray = ['turn', ,'down', ,'for', ,'what'];

for(var i = 0; i <oopsArray.length; i++){
	console.log(oopsArray[i]);
	if (i % 2 === 1){
		oopsArray[i] = "nope";
	}
}

console.log(oopsArray);


/* GOING BACKWARDS */

for(var i=0; i<oopsArray.length; i++){
	oopsArray.reverse();
	console.log(oopsArray[i]);
	if (i % 2 === 1){
		oopsArray[i] = "nope";
	}
}

/* isNapTime */

var isNapTime = false;
var napSchedule = [false,false,true,false,true,true];

function nap(schedule){
	for(var i =0; i<schedule.length; i++){
	if(schedule[i] === true){
		console.log("ZzZzZzZz");
	} else{
		console.log("Gotta get to work!");
		isNapTime = !isNapTime;
		}
	}
} 

nap(napSchedule);


