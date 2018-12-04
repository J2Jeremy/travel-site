function Person(myName, myColor){ //blueprint capital letter
	this.name = myName;
	this.color = myColor;
	this.greet = function(){
console.log("greetings, my name is " +this.name+ " and my favorite color is " + this.color);
	}
}

//we want exports object to BE our constructor function
//instead of adding property to exports obj, instead add exports parent
module.exports = Person;