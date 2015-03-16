var bio = {
	"name": "Barry Rayfield",
	"role": "Web Developer",
	"contacts": {
		"mobile": "917-751-7150",
		"email": "Barry.Rayfield@gmail.com",
		"github": "brayfiel",
		"twitter": "@brayfiel",
		"location": "Floral Park, NY, US"
	},
	"welcomeMessage": "A Man Who Knows Not And Knows He Knows Not Does Not Know Not. - BSR",
	"skills": [
		"Compiled Basic", "Microsoft Visual Basic", "COBOL", "dBASE", "Foxpro",
		"ADABASE/Natural", "UNIX Shell Scripting", "PERL", "AWK", "SED", "WordPress",
		"HTML", "CSS", "Javascript", "C", "IBM DataStage", "SQL", "SyncSort",
		"TSO/ISPF", "MVS JCL", "SSH", "Word", "Access", "Excel", "Outlook", "PowerPoint",
		"Visio", "Project", "WinZip", "Beyond Compare", "ODBC", "Adobe Acrobat",
		"Adobe PhotoShop", "Corel Paint Shop Pro", "TrueChange", "Caliber RM",
		"Time Matters", "Rumba", "Extra!", "Exceed", "Absolute FTP", "SFTP",
		"Connect Direct/Network Data Mover (NDM)", 	"AutoSys", "CA7",
		"Sun Solaris", "IBM AIX", "Linux", "Microsoft Windows Server and Workstation"
	],
	"bioPic": "images/me.jpg",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").append(formattedRole);
		$("#header").append(HTMLcontactStart);
		bio.displayContacts("#contacts")
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	},
	"displayContacts": function(selector) {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$(selector).append(formattedMobile);
		var formattedEMail = HTMLemail.replace("%data%", bio.contacts.email);
		$(selector).append(formattedEMail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$(selector).append(formattedGithub);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$(selector).append(formattedTwitter);
		var formattedLocation = HTMLlocation.replace("%data%", displayCity(bio.contacts.location));
		$(selector).append(formattedLocation);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
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
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/ud245"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/ud775"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/ud304"
		},
		{
			"title": "Introduction to Computer Science",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.udacity.com/course/cs101"
		},
		{
			"title": "Web Application Architectures",
			"school": "Udacity",
			"dates": "2014",
			"url": "https://www.coursera.org/course/webapplications"
		},
		{
			"title": "An Introduction to Interactive Programming in Python",
			"school": "Udacity",
			"dates": "2013",
			"url": "https://www.coursera.org/course/interactivepython"
		}
	],
	"display": function() {
		//$("#education").append(HTMLschoolStart);
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", displayCity(education.schools[school].location));
			$(".education-entry:last").append(formattedSchoolDates + formattedSchoolLocation);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		$("#education").append(HTMLonlineClasses);
		for (online in education.onlineCourses) {
			$("#education:last").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
			$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
}

var work = {
	"jobs": [
		{
			"employer": "Bellerose Jewish Center",
			"title": "Consultant",
			"location": "Bellerose, NY, US",
			"dates": "June 2011 – Present",
			"description": "Providing user and technical support for vendor and legacy in house developed applications encompassing member management, Jewish High Holiday Ticket Sales and Yahrzeit notification.  Rewriting of legacy in house developed applications.  Hardware acquisition, installation and configuration.  Worked with communications vendor to upgrade existing voice and data services for a near 40% cost savings and increase in reliability."
		},
		{
			"employer": "Pro Hoops Central",
			"title": "Consultant",
			"location": "Bloomfield, NY, US",
			"dates": "January 2012 – March 2012",
			"description": "Migrated existing WordPress based website to a commercial host enabling monetizing of the website; Performed cost analysis of migration alternatives; Provided post migration technical support."
		},
		{
			"employer": "J.P. Morgan Chase Bank, N.A.",
			"title": "Applications Developer",
			"location": "Jersey City, NJ, US",
			"dates": "March 1990 – October 2009",
			"description": "Performed development and provided production support for the ETL portion of the Customer Profitability Operational Data Store (PREMIS).  Successfully managed requirements gathering and implementation for the infrastructure of the PREMIS technology refresh project.  This enabled PREMIS to meet its SLA two days earlier than scheduled.  Developed standardized developer workstations. Enabled developers to recover from a corrupted workstation in one third the time.  Performed technical interviews.  Installed, configured and managed the requirements management software Caliber RM.  Successfully managed relocation of Microsoft Windows based domain from New York to New Jersey.  Managed UNIX domain supporting rewrite of customer billing and profitability applications.  Successfully managed acquisition, installation and configuration of Microsoft Windows based Production, QA and Development domains supporting data warehouses and ODS.  Successfully managed Year 2000 testing and compliance for development software used by team.  Provided development and production support for the mainframe based application Service Product Consolidator.  Successfully managed Year 2000 modifications, testing and compliance for Service Product Consolidator.  Maintained SNA server to provide pilot web application access to data stored on mainframe.  Installed and configured remote access software on Microsoft Windows workstations to support team when they were offsite.  Provided development and production support for the mainframe based OPIC and OPIA product costing applications.  Developed download module and supporting utilities for OPIC and OPIA in Natural.  This function converted the data stored on the mainframe to a form readable by P.C. software.  Provide support to developers and end users for commercially and internally developed applications.  Acted as Virus Management Control Program Coordinator for business unit.  Responsibilities included installation and maintenance of antiviral software and responded to threats as they occurred.  Acquired, configured and provided maintenance of P.C. systems.  Analyzed and developed P.C. based cost accounting application and utilities to automate the uploading, downloading, and viewing of files stored on the mainframe using dBase IV and Foxpro.  Devised security profiles required for the migration of our team to campus wide local area network.  Assisted in preparation of proposal for implementation of local area network.  Part of team that developed a service costing application in Foxpro."
		},
		{
			"employer": "Leong & Rayfield, Esq.",
			"title": "Consultant",
			"location": "Flushing, NY, US",
			"dates": "August 1998 – June 2008",
			"description": "Installed, configured and managed Microsoft Windows based servers and workstations.  Installed, configured and managed routers, hubs and wiring to support Windows based LAN.  Installed and configured Time Matters law office business management software.  Provided network and user administration along with user support."
		},
		{
			"employer": "The Dreyfus Corporation",
			"title": "Programmer/Analyst",
			"location": "New York, NY, US",
			"dates": "April 1988 - February 1990",
			"description": "Analyzed, designed, and programmed financial applications in Clipper, Lotus 1.2.3 and C for valuation of fund portfolios, for time tracking of financial instruments used as collateral for loans with brokers, and to meet Securities Exchange Commission reporting requirements.  Provided user training and support of commercial and internally developed applications software.  Performed feasibility studies on proposed systems."
		}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", displayCity(work.jobs[job].location));
			var	formattedEmployerTitleLocation = formattedEmployer + formattedTitle + formattedWorkLocation;
			$(".work-entry:last").append(formattedEmployerTitleLocation);
			var	formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);

		}
	}
}

var projects = {
	"project": [
		{
			"title": "Interactive Resume",
			"dates": "2015",
			"description": "You'll build your resume by writing a JS script that will combine your personal information with pre-written HTML and CSS templates to generate your resume.",
			"images": [
				"images/InteractiveResume1.jpg",
				"images/InteractiveResume2.jpg",
				"images/InteractiveResume3.jpg",
				"images/InteractiveResume4.jpg"
			]
		},
		{
			"title": "Design Mockup",
			"dates": "2015",
			"description": "Download the design mockup file from the Downloadables section and review it.  Identify the various elements you will need to build in order to recreate this design using the Bootstrap framework.  In the Project Coding Environment node write your HTML and CSS files, continue to iterate until your work reaches a mismatch of 8% or less.",
			"images": [
				"images/P1Final.jpg"
			]
		},
		{
			"title": "Bellerose Jewish Center Member Services",
			"dates": "2011 - 2015",
			"description": "Rewrite of legacy, in house developed applications.  These applications encompass six modules.  The Membership Management module tracks those who interact with the temple as members, non-members and persons of special interest, i.e. outside clergy, political figures, etc.  The Permanent Pew module manages the purchase and assignment of permanent seats for Jewish High Holidays, The High Holidays module manages ticket sales for the Jewish High Holidays for the permanently assigned seats and the unassigned seats.  The Yizcor (Memorial) module manages the notifications to members and non-members as to memorial prayers should be said based on the Jewish (lunar) calendar and solicits donations in honor of the memorialized.  The Calendar module presents date conversion between the Gregorian calendar and the Jewish calendar.  It also tracks holidays used in both calendars along with tracking times for religious services.  This application was written in Microsoft Access.",
			"images": [
				"images/bjc1.jpg",
				"images/bjc2.jpg",
				"images/bjc3.jpg",
				"images/bjc4.jpg",
				"images/bjc5.jpg",
				"images/bjc6.jpg"
			]
		}
	],
	"display": function() {
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
					var formattedImage = HTMLprojectImage.replace("%data%", projects.project[proj].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}

function displayCity(cityStateCountry) {
	var splitLocation = cityStateCountry.split(",");
	if (splitLocation.length > 2) {
		return splitLocation[0] + ", " + splitLocation[1];
	}
	else {
		return splitLocation[0];
	}
}

bio.display();
education.display();
work.display();
projects.display();
bio.displayContacts("#footerContacts");

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
	//console.log(name)
	name[1] = name[1].toUpperCase();
	name [0] = name[0].slice(0,1).toUpperCase() + name[0].slice(0,1).toLowerCase();
	return name[0] + " " + name[1];
}

// Internationalize button covered in class but not implemented in the resume itself
// $('#main').append(internationalizeButton);

// you want to see a map?  here's a map.
$("#mapDiv").append(googleMap);

