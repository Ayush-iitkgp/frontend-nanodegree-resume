

//var awesomeThoughts = "I am Ayush and I am awesome";
//var funThoughts = awesomeThoughts.replace("awesome","fun");
//var formattedName =HTMLheaderName.replace("%data%","Ayush Pandey");
//var formattedRole= HTMLheaderRole.replace("%data%","Budding Data Scientist");
//$("#header").prepend(formattedName).append(formattedRole);

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
	
// var bool = true;


//$("#header").append(funThoughts);

//$("#main").prepend(bio.name).prepend(" ").prepend(bio.roll).prepend(" ").prepend(bio.contact.mobile).prepend(" ").prepend(bio.msg).prepend(" ").prepend(bio.picURL).prepend(" ").prepend(bio.skill);
//console.log(bio);


//$("#main").append(work.jobPosition).append(work.employer).append(work.yearsWorked).append(work.cityOfBusiness);
//console.log(work);

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

//$("#main").append(education["lastSchool"]).append(education["yearsAttended"]).append(education["schoolCity"]);
//console.log(education);


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