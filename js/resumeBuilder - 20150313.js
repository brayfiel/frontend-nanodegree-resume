var bio = {
	"name": "Barry Rayfield",
	"role": "Web Developer",
	"contacts": {
		"mobile": "917-751-7150",
		"email": "Barry.Rayfield@gmail.com",
		"github": "barryrayfield",
		"twitter": "@brayfiel",
		"location": "Floral Park, NY, US"
	},
	"welcomeMessage": "Hello There",
	"skills": [
		"skill 1","skill 2","skill 3","skill 4","skill 5"
	],
	"bioPic": "images/me.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		$("#header").append(HTMLcontactStart);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#contacts").append(formattedMobile);
		var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#contacts").append(formattedEMail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#contacts").append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#contacts").append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#contacts").append(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

var education = {
	"schools": [
		{
			"name": "Bernard M. Baruch College, CUNY",
			"location": "New York, NY, US",
			"degree": "BBA",
			"majors": ["Computer Information Systems"],
			"dates": 1987,
			"url": "http://www.baruch.cuny.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "",
			"school": "",
			"dates": "",
			"url": ""
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "Bellerose Jewish Center",
			"title": "Consultant",
			"location": "Bellerose, NY, US",
			"dates": "October 2009 - Present",
			"description": "BJC Description"
		},
		{
			"employer": "J.P. Morgan Chase Bank, N.A.",
			"title": "Developer",
			"location": "New York, NY, US",
			"dates": "March 1991 - October 2009",
			"description": "JPMC Description"
		},
		{
			"employer": "Job 2 Employer",
			"title": "Job 2 Title",
			"location": "Flushing, NY, US",
			"dates": "Job 2 Dates",
			"description": "Job 2 Description"
		},
		{
			"employer": "Job 3 Employer",
			"title": "Job 3 Title",
			"location": "New Hyde Park, NY, US",
			"dates": "Job 3 Dates",
			"description": "Job 3 Description"
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Project Title 1",
			"dates": "2014",
			"description": "Description of Project 1 ",
			"images": [
				"images/img1",
				"images/img2",
				"images/img3"
			]
		},
		{
			"title": "Project Title 2",
			"dates": "2015",
			"description": "Description of Project 2 ",
			"images": [
				"images/img4",
				"images/img5",
				"images/img6"
			]
		}
	]
}

//header.display = function() {
//	var formattedName = HTMLheaderName.replace("%data%", bio.name);
//	$("#header").append(formattedName);
//	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//	$("#header").append(formattedRole);
//	$("#header").append(HTMLcontactStart);
//	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
//	$("#contacts").append(formattedMobile);
//	var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
//	$("#contacts").append(formattedEMail);
//	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
//	$("#contacts").append(formattedGithub);
//	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
//	$("#contacts").append(formattedTwitter);
//	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//	$("#contacts").append(formattedLocation);
//	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
//	$("#header").append(formattedBioPic);
//	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
//	$("#header").append(formattedWelcomeMsg);
//	$("#header").append(HTMLskillsStart);
//	for (skill in bio.skills) {
//		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
//		$("#skills").append(formattedSkill);
//	}
//}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var	formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var	formattedEmployerTitleLocation = formattedEmployer + formattedTitle + formattedWorkLocation;
		$(".work-entry:last").append(formattedEmployerTitleLocation);
		var	formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var	formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);

	}
}

projects.display = function() {
	for (proj in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.project[proj].images.length > 0) {
			for (image in projects.project[proj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.project[0].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

//header.display();
bio.display();
work.display();
projects.display();

function locationizer(work_obj) {
    var locations = [];
	for (var job in work_obj.jobs) {
        locations.push(work_obj.jobs[job].location);
	}8
	return locations;

}

// Did locationizer() work? This line will tell you!
// console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name)
	name[1] = name[1].toUpperCase();
	name [0] = name[0].slice(0,1).toUpperCase() + name[0].slice(0,1).toLowerCase();
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

// you want to see a map?  here's a map.
$("#mapDiv").append(googleMap);

