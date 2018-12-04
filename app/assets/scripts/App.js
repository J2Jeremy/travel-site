var Person = require('./modules/Person');
//var $ = require('jquery');

alert("testing 123");

var john = new Person("john", "red");
var jane = new Person("jane", "blue");

john.greet();
jane.greet();

//$("h1").remove();