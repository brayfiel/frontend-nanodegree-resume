//$("#main").append("Barry Rayfield");
//var awsomeThoughts = "<P>I am Barry Rayfield and I am AWESOME!";
//$("#main").append(awsomeThoughts);
//console.log(awsomeThoughts);
//
//var email = "barry.rayfied@gmail.com";
//var newEmail = email.replace("gmail", "aol");
//console.log(email);
//console.log(newEmail);
//
//var newEmail = email.replace("gmail", "aol");
//console.log(email);
//
//var funThoughts = awsomeThoughts.replace("AWESOME", "FUN")
//$("#main").append(funThoughts);
//console.log(funThoughts);
//
//var name = "Barry Rayfield"
//var formattedName = HTMLheaderName.replace("%data%", name);
//
//var role = "Web Developer"
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//
//$("#header").append(formattedName);
//$("#header").append(formattedRole);
//
// "audacity" to "Udacity"
//var s = "audacity";
//var s = s.slice(1,2).toUpperCase() + s.slice(2);
//
//console.log(s);
//
//var sampleArray = [0,0,7];
//
//var incrementLastArrayElement = function(_array) {
//    var newArray = [];
//    // Your code should make newArray equal to an array that has the same
//    // values as _array, but the last number has increased by one.
//
//    // For example:
//    // _array = [1, 2, 3];
//    // turns into:
//    // newArray = [1, 2, 4];
//
//    // Your code goes in here!
//	var newArray = _array;
//	var newValue = newArray.pop();
//	var newValue = newValue + 1;
//	var newValue = newArray.push(newValue);
//
//    // Don't delete this line!
//    return newArray;
//};
//
// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));
//
//var name = "AlbERt EINstEiN";
//
//function nameChanger(oldName) {
//    var finalName = oldName;
//    // Your code goes here!
//    var spacePos = oldName.indexOf(' ');
//    var firstLetter = finalName.substring(0,1);
//    var firstName =  finalName.substring(1,spacePos);
//    var lastName = finalName.substring(spacePos);
//    var finalName = firstLetter.toUpperCase() + firstName.toLowerCase() + lastName.toUpperCase();
//    // Don't delete this line!
//    return finalName;
//}
// Did your code work? The line below will tell you!
//console.log(nameChanger(name));
//
var bio = {
	"name" : "Barry Rayfield",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "917-751-7150",
		"email" : "Barry.Rayfield@gmail.com",
		"github" : "barryrayfield",
		"twitter" : "@brayfiel",
		"location" : "New York"
	},
	"welcomeMessage" : "Welcome to the dungeon",
	"skills" : [
		"HTML", "CSS", "JavaScript", "Cobol", "Basic", "Visual Basic"
	],
	"biopic" : "images/me.jpg"
}

$("#main").append(bio.name + "<br>");
$("#main").append(bio.role + "<br>");
$("#main").append(bio.contacts.mobile + "<br>");
$("#main").append(bio.contacts.email + "<br>");
$("#main").append(bio.contacts.github + "<br>");
$("#main").append(bio.contacts.twitter + "<br>");
$("#main").append(bio.contacts.location + "<br>");
$("#main").append(bio.welcomeMessage + "<br>");
$("#main").append(bio.skills + "<br>");
$("#main").append(bio.biopic + "<br>");

var work = {};
work.currentPos = "Developer";
work.employer = "J.P. Morgan Chase Bank, N.A.";
work.years = "19 years";
work.city = "New York";

$("#main").append(work.currentPos + "<br>");
$("#main").append(work.employer + "<br>");
$("#main").append(work.years + "<br>");
$("#main").append(work.city + "<br>");

var education = {};
education["school"] = "Bernard M. Baruch College, CUNY";
education["years"] = "1983-1987";
education["city"] = "New York";

$("#main").append(education["school"]  + "<br>");
$("#main").append(education["years"]  + "<br>");
$("#main").append(education["city"]  + "<br>");
