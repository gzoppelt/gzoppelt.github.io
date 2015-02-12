"use strict";
var bio = {
    "name": "Günther Zoppelt",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+44 790 8144 8xx",
        "email": "gzoppelt1@gmail.com",
        "github": "https://github.com/gzoppelt",
        "twitter": "You will not catch me there!",
        "location": "Nash Mills, Hertfordshire, U.K."
    },
    "welcomeMessage": "Freelancing offers always welcome!",
    "skills": [
        "AS/400, IBM iSeries, IBM DB/2",
        "Delphi",
        "PHP, Zend-Framework, Laravel",
        "JavaScript, AngularJS",
        "Front-End-Web-Development (soon to come)"
    ],
    "biopic": "images/Guenther.jpg"
};
bio.display = function () {
    var head, key, i;
    head = $('#header');
    for (key in bio.contacts) {
        $('#topContacts').append(
            HTMLcontactGeneric
                .replace('%contact%', key)
                .replace('%data%', bio.contacts[key])
        );
    }
    head.prepend(HTMLbioPic.replace('%data%', bio.biopic));
    head.prepend(HTMLheaderRole.replace('%data%', bio.role));
    head.prepend(HTMLheaderName.replace('%data%', bio.name));
    head.append(HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage));
    head.append(HTMLskillsStart);
    head.append(HTMLskills.replace('%data%', bio.skills[0]));
    for(i = 1; i < bio.skills.length; i++){
        $(".flex-item:last").append(HTMLskills.replace('%data%', bio.skills[i]));
    }
};
bio.display();

var work = {
    "jobs": [
        {
            "employer": "Autohaus Berndt GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Dresden, Germany",
            "dates": "1994-2002",
            "description": "Maintaining IT infrastructure and minor programming tasks"
        },
        {
            "employer": "Autohaus Schmolck GmbH & Co. KG",
            "title": "IT Administrator",
            "location": "Emmendingen, Germany",
            "dates": "2003-2015",
            "description": "It started with maintaining the IT infrastructure and changed later into programming interfaces between different software solutions."
        },
        {
            "employer": "Z-Bit Solutions Limited",
            "title": "Programmer",
            "location": "London, U.K.",
            "dates": "since 2013",
            "description": "AngularJS, node.js, Laravel (PHP)"
        }
    ]
};
work.display = function () {
    var job, we;
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        we = $(".work-entry:last");
        we.append(
            HTMLworkEmployer.replace('%data%', work.jobs[job].employer)
            + HTMLworkTitle.replace('%data%', work.jobs[job].title)
        );
        we.append(HTMLworkLocation.replace('%data%', work.jobs[job].location));
        we.append(HTMLworkDates.replace('%data%', work.jobs[job].dates));
        we.append(HTMLworkDescription.replace('%data%', work.jobs[job].description));
    }
};
work.display();

var projects = {
    "projects": [
        {
            "title": "Orange Udacity Mug",
            "dates": "2015",
            "description": "In this project we learned how to implement a mocked HTML page in the most accurate way.",
            "images": [
                "images/Project1_1.png",
                "images/Project1_2.png"
            ]
        },
        {
            "title": "Interactive Resume",
            "dates": "2015",
            "description": "We learned the basics of JavaScript and how to separate content from layout.",
            "images": [
                "images/Project2_1.png"
            ]
        },
        {
            "title": "Froggerlike Arcade Game",
            "dates": "2015",
            "description": "Getting to grips with object oriented JavaScript, we learned how theese objects interact with each other.",
            "images": [
                "images/Project3_1.png"
            ]
        }
    ]
};
projects.display = function () {
    var i, j, pro, pe;
    for (i in projects.projects) {
        pro = projects.projects[i];
        $("#projects").append(HTMLprojectStart);
        pe = $(".project-entry:last");
        pe.append(HTMLprojectTitle.replace('%data%', pro.title));
        pe.append(HTMLprojectDates.replace('%data%', pro.dates));
        pe.append(HTMLprojectDescription.replace('%data%', pro.description));
        for (j in pro.images) {
            pe.append(HTMLprojectImage.replace('%data%', pro.images[j]));
        }
    }
};
projects.display();

var education = {
    "schools": [
        {
            "name": "TU Dresden",
            "location": "Dresden, Germany",
            "degree": "no degree",
            "majors": [
                "Mathematics",
                "Mathematical Cybernetics and Computing"
            ],
            "dates": 1979,
            "url": "http://tu-dresden.de/en"
        },
        {
            "name": "TU Dresden",
            "location": "Dresden, Germany",
            "degree": "Master",
            "majors": [
                "Informatics"
            ],
            "dates": 1988,
            "url": "http://tu-dresden.de/en"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Web Developer",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
};
education.display = function () {
    var edu, uni, i, course;
    $('#education').append(HTMLschoolStart);
    edu = $('.education-entry:last');
    for (uni in education.schools) {
        edu.append(
            HTMLschoolName
                .replace('%data%', education.schools[uni].name)
                .replace('#', education.schools[uni].url)
            + HTMLschoolDegree.replace('%data%', education.schools[uni].degree)
        );
        edu.append(HTMLschoolLocation.replace('%data%', education.schools[uni].location));
        edu.append(HTMLschoolDates.replace('%data%', education.schools[uni].dates));
        for (i in education.schools[uni].majors) {
            edu.append(HTMLschoolMajor.replace('%data%', education.schools[uni].majors[i]));
        }
    }
    edu.append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        edu.append(
            HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title) +
            HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school)
        );
        edu.append(HTMLonlineDates.replace('%data%', education.onlineCourses[course].date));
        edu.append(
            HTMLonlineURL
                .replace('%data%', education.onlineCourses[course].url)
                .replace('#', education.onlineCourses[course].url)
        );
    }
};
education.display();