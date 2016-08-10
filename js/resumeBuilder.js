/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var awesomeThoughts = "I am 李熙 and I am AWESOME!";
// console.log(awesomeThoughts);
// var formattedName = HTMLheaderName.replace("%data%", "Tony Lee"),
//     formattedRole = HTMLheaderRole.replace("%data%", "Front-end Engineer");
// $("#header").prepend(formattedRole).prepend(formattedName);
var bio = {
    "name":"Tony Lee",
    "role":"Web Developer",
    "contacts":{
        "mobile":"18915978898",
        "email":"tonylx86@aliyun.com",
        "github":"johndoe",
        "twitter":"@johndoe",
        "location":"San Francisco"
    },
    "welcomeMessage":"lorem upsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness","delivering things","cryogenic sleep", "saving the universe"
    ],
    "biopic":"images/fry.jpg"
};

var work = {
    "jobs":[
        {
            "employer":"Microsoft",
            "title":"software engineer",
            "location":"Seattle, WA",
            "dates":"2001-2010",
            "description":"develop Windows 7"
        },
        {
            "employer":"Facebook",
            "title":"software engineer",
            "location":"Mountain View, CA",
            "dates":"2010-2014",
            "description":"develop React.js"
        }
    ]
};

var education = {
    "schools":[
        {
            "name":"MIT",
            "location":"Cambridge, MA",
            "dates":"2004-2008",
            "degree":"bachelor",
            "url":"www.mit.edu",
            "majors":["CS"]
        },
        {
            "name":"UCLA",
            "location":"Los Angeles, CA",
            "dates":"2008-2011",
            "degree":"master",
            "url":"www.ucla.edu",
            "majors":["cs","design"]
        }
    ],
    "onlineCourses":[
        {
            "title":"Programming languages",
            "school":"Coursera",
            "dates":"2013",
            "url":"www.Coursera.com"
        },
        {
            "title":"Mechanics",
            "school":"EDX",
            "dates":"2015",
            "url":"www.edx.org"
        }
    ]
};

var projects= {
    "projects":[
        {
            "title":"windows10",
            "dates":"2014",
            "description":"the new os",
            "images":[]
        },
        {
            "title":"React.js",
            "dates":"2015",
            "description":"the new front-end frame work",
            "images":[]
        }

    ]
};

var header = $("#header");


header.prepend(HTMLheaderRole.replace("%data%", bio.role));
header.prepend(HTMLheaderName.replace("%data%", bio.name));


var contact = $("#topContacts");

header.append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
header.append(HTMLbioPic.replace("%data%", bio.biopic));
if (bio.skills.length > 0) {

    header.append(HTMLskillsStart);
    var s = $("#skills:last");
    s.css("flex-direction","row");
    bio.skills.forEach(function (skill){


        s.append(HTMLskills.replace("%data%", skill));
    });
    // document.getElementById("skills").style.flexDirection = "row";
}


for (var i in bio.contacts) {
    contact.append(HTMLcontactGeneric
        .replace("%data%", bio.contacts[i])
        .replace("%contact%",i));
}



var workExp = $("#workExperience");

for (i in work.jobs) {
    workExp.append(HTMLworkStart);
    var job = work.jobs[i];
    $(".work-entry:last")
        .append(HTMLworkEmployer.replace("%data%", job.employer
            +HTMLworkTitle.replace("%data%", job.title)))
        .append(HTMLworkDates.replace("%data%",job.dates))
        .append(HTMLworkLocation.replace("%data%", job.location))
        .append(HTMLworkDescription.replace("%data%",job.description));
}

$("#main:last").append(internationalizeButton);
function nameChanger(oldName) {
    var finalName = oldName.toUpperCase();
    // Your code goes here!
    var t = finalName.trim().split(" ");
    finalName = t[0][0]+t[0].slice(1).toLowerCase() + " " + t[1]

    // Don't delete this line!
    return finalName;
}


projects.display = function () {
    this.projects.forEach(function (proj) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last")
            .append(HTMLprojectTitle.replace("%data%", proj.title))
            .append(HTMLprojectDates.replace("%data%", proj.dates))
            .append(HTMLprojectDescription.replace("%data%", proj.description));

        proj.images.forEach(function (img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img))
        })
    })
};

education.display = function () {
    this.schools.forEach(function (school) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last")
            .append(HTMLschoolName.replace("%data%", school.name)
                +HTMLschoolDegree.replace("%data%", school.degree))
            .append(HTMLschoolDates.replace("%data%", school.dates))
            .append(HTMLschoolLocation.replace("%data%", school.location));
        school.majors.forEach(function (major) {
            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major))
        })
    });
};




projects.display();
education.display();
$("#mapDiv").append(googleMap);

