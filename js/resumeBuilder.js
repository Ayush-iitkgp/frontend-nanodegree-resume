//var awesomeThoughts = "I am Ayush and I am awesome";
//var funThoughts = awesomeThoughts.replace("awesome","fun");
//var formattedName =HTMLheaderName.replace("%data%","Ayush Pandey");
//var formattedRole= HTMLheaderRole.replace("%data%","Budding Data Scientist");
//$("#header").prepend(formattedName).append(formattedRole);
// var bool = true;


//$("#header").append(funThoughts);

//$("#main").prepend(bio.name).prepend(" ").prepend(bio.roll).prepend(" ").prepend(bio.contact.mobile).prepend(" ").prepend(bio.msg).prepend(" ").prepend(bio.picURL).prepend(" ").prepend(bio.skill);
//console.log(bio);


//$("#main").append(work.jobPosition).append(work.employer).append(work.yearsWorked).append(work.cityOfBusiness);
//console.log(work);
//$("#main").append(education["lastSchool"]).append(education["yearsAttended"]).append(education["schoolCity"]);
//console.log(education);


/* EDUCATION SECTIONS BEGINS */
var education={
	"schools":[
	{
		"name":"Stepping",
		"city":"gkp",
		"degree":"Senior Secondary School",
		"major":"maths",
		"minor":"chem",
		"gradYear":"2012",
		"url":"Not Available"
		},
	{
		"name":"iit kgp",
		"city":"kgp",
		"degree":"Integrated MS",
		"major":"maths",
		"minor":"cs",
		"gradYear":"2017",
		"url":"iitkgp.ac.in"
		}
	],
	
	"onlineCourses":[
	{
		"title":"JavaScript",
		"School":"Udacity",
		"dates":"Dec 2015",
		"url":"udacity.com/javascript"
		},
	{
		"title":"JavaScript",
		"School":"Udacity",
		"dates":"Dec 2015",
		"url":"udacity.com/javascript"
		}
	
	]
};

/* EDUCATION SCETIONS ENDS */

// BIO SECTION
var bio = {
	"name":"Ayush Pandey",
	"roll" : "12MA20009",
	"contact":{
		"mobile":"+91-9649466797",
		"email":"ayushpandey.iitkgp@gmail.com",
		"github":"ayushpandey-iitkgp.github.io",
		"Address":"Nehru Vihar"
		},
	"msg":"Hi everyone! Thank you very much for visiting my website",
	"picURL":"images/fry.jpg",
	"skill":["Data Analysis","Programming","Apache Hadoop", "Apche Spark"]
};
if(bio.skill!=null){
	//var formattedSkillsStart =HTMLskillsStart.replace("%data%",bio.skill);
    
	$("#header").append(HTMLskillsStart);
	for(var i=0;i<bio.skill.length;i++){
		var formattedSkills= HTMLskills.replace("%data%",bio.skill[i]);
		
		$("#skills").append(formattedSkills);
		}
	}
	
	
/* BIO SECTION ENDS*/

// WORK SECTION	
var work = {
	"jobs":[
	{
		"employer":"Flutura",
		"title":"Data Scientist Intern",
		"location":"Bangalore, India",
		"date":"May to July 2014",
		"description":"Spark and Haddop"
		},
	{
		"employer":"IHPC",
		"title":"Research Assistant",
		"location":"Singapore",
		"date":"May to July 2015",
		"description":"Python and MySQL"
		}
	]
};

function displayWork(){
	for(job in work.jobs){
	
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	console.log(formattedEmployer+" "+formattedTitle);
	var formattedEmployerTitle= formattedEmployer + formattedTitle; 
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].date);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDate).append(formattedLocation).append(formattedDescription);
}
	
};
displayWork();
/* WORK SECTION ENDS */	

/* PROJECT SECTION BEGINS*/
var project= {
	"projects":[
	{
		"title": "Data Analytics on Apache Spark Framework", 
        "dates": "May - July 2014",
        "description": "•	Responsible for setting up an integrated big data storage and processing platform i.e. Hadoop and Spark clusters and then implementing machine learning algorithms on them.[Technical Report]Also benchmarked the running time and the accuracy of different machine learning algorithms on dataset of upto 100GB.",
        "images": ["images/fry.jpg","images/groupPic.jpg"]
		},
	{
		"title": "Data Analytics on Apache Spark Framework", 
        "dates": "May - July 2014",
        "description": "Responsible for setting up an integrated big data storage and processing platform i.e. Hadoop and Spark clusters and then implementing machine learning algorithms on them.[Technical Report]Also benchmarked the running time and the accuracy of different machine learning algorithms on dataset of upto 100GB.",
		"images": ["images/fry.jpg","images/groupPic.jpg"]
		}
	],
	
};

project.display = function(){
	for(proj in project.projects){
		$("#projects").append(HTMLprojectStart);
		var projectTitle = HTMLprojectTitle.replace("%data%",project.projects[proj].title);
		var projectDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
		var projectDescription = HTMLprojectDescription.replace("%data%",project.projects[proj].description);
		$(".project-entry:last").append(projectTitle).append(projectDates).append(projectDescription);
		
		var projectImage = HTMLprojectImage.replace("%data%",project.projects[proj].images[0]);
		$(".project-entry:last").append(projectImage);
		var projectImage = HTMLprojectImage.replace("%data%",project.projects[proj].images[1]);
		$(".project-entry:last").append(projectImage);
		
	}
};

project.display();


/* PROJECT SECTION ENDS*/








// Internationalize the Name

$("#main").append(internationalizeButton);

function inName(name){
	name = name.trim().split(" ");
	//console.log(name[0].slice(1));
	name = name[0][0].toUpperCase()+ name[0].slice(1).toLowerCase()+" "+ name[1].toUpperCase();
	
	return name;
	
}
console.log(inName("ayush Pandey")=== "Ayush PANDEY");

/*var j =0;
//for(var i=0;i<99;i++){
	//j=j++;
	//console.log(j);
}*/
//console.log(j);
/*var email="gkpayushpandey@gmail.com";

var newemail= email.replace("gmail","udacity");
console.log(email);
console.log(newemail);
*/