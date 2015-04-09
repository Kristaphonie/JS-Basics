//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';

function isTyler (name) 
{
	if (name === 'Tyler')
	{
		return true;
	}
	else
	{
		return false;
	}
}

isTyler('Tyler');

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName ()
{
	var name = prompt("Whats your name?");
	return name;
}

getName();

//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function getName ()
{
	var name = prompt("Whats your name?");
	return name;
}

function welcome ()
{
	alert("Welcome " + getName(name));
}

welcome();


//Next problem

//What is the difference between arguments and parameters?

parameter is declared in fucntion definition and arguments are passed through the function invokation.


//Next problem

//What are all the falsy values in JavaScript and how do you check if something is falsy?

undefined, NaN, "", 0, false, null

if (!boolVariable) 
{

}

or 

if (variable === 'value' || variable === 10)
{

}


//Next Problem



//Create a function called myName that returns your name

//Now save the function definition of myName into a new variable called newMyName

//Now alert the result of invoking newMyName

function myName ()
{
	return "Christian";
}

var newMyName = myName();

alert(newMyName);



//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function(){
	return function(){
		return "Christian";
	}
};

var name = outerFn()

function outerFn () 
{
	return function ()
	{
		return "Christian"
	}
}

var innerFn = outerFn();

innerFn();

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
