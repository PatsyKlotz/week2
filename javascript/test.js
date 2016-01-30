//var first_name = "Patsy"; two forward 
//slashes mean single line comment
//var last_name = "Klotz Neher";

/* 
*

Block Comment */

//var greeting = "hello";

//var first_name = "Patsy";

//var last_name = "Klotz Neher";

//var message1 = "don't forget to pick uyp these items";

//var message2 = "also, make sure to gather wood, for dooms day prepping";

//var favorite_quote = "\"Four Score ...\"";

//var my_image = "<img src=\"images/myImage.png\" />";

//use single quotes if you have a lot of illegal characters

//var my_image = '<img src="images/myImage.png" />';

//var goodbye = "see you later";

//BAD variable names (errors!)
//var first name = "";
//var 2first_name = "";
//var math = "";
//Brackets will indicate reserved words with highlight

//operators
//"=" the equal sign operator assigns values
//"+=" the plus/equal operator (concatenation assignment operator, with strings) adds to whatever the variable currently has

//output variables to the console (browser's console)!
//the following line references the variable greeting; thus, we don't need to start with "var". Not creating variable but referencing it.

/*  console.log(greeting); 
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favorite_quote);
console.log(goodbye);  */

//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favorite_quote + " " + goodbye);

//my quote...the parts in asteriks are the variables that will change...

//Courage is the *first* of *human* qualities, *because* it is the *quality* which generates all *others*. Winston *Churchill*
 
//let's create some variables to hold the parts that don't change...
var static_words1 = "Courage is the ";
var static_words2 = " of ";
var static_words3 = " qualities, ";
var static_words4 = " it is the  ";
var static_words5 = " which guarantees all ";
var static_words6 = " Winston ";
 
//console.log(static_words1 + " " + static_words2 + " " + static_words3 + " " + static_words4 + " " + static_words5 + " " + static_words6);

//create a variable that is used as a reference to your form button
//we use the unique ID attribute to do this
var button = document.getElementById("submit");

//Then we add the ability to have a mouse click fire off a function when clicked.
button.addEventListener("click", onClick, false);

function onClick(evt)
  {
    evt.preventDefault(evt);//this line stops the form from submitting by preventing its default action
  
  //Forms
    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;
    var element6 = document.getElementById("form1").elements.item(5).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6 + element6);
  }
    
  //document.getElementById("myForm").elements.item(0).value;
  //return false;