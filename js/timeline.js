angular.module('terrys-today-timeline', [])
    .controller('TimelineController', function () {
        var timeline = this;
        timeline.events = [
            {
                date: "2000 Apr 01",
                category: "job",
                event: "start",
                title: "Advanced Application Corporation",
                text: "Emplyed by Advanced Application Corporation located in Tokyo Japan. Worked for projects held by Japanese financial companies."
            },
            {
                date: "2011 Dec 31",
                category: "job",
                event: "end",
                title: "Advanced Application Corporation",
                text: "After working for the company for approx 11 years, to make my career advance, quit the company"
            },
            {
                date: "2012 Jan 01",
                category: "job",
                event: "start",
                title: "Gluegent, Inc.",
                text: "Cloud service provider the name of which Gluegent, Inc. was my second emplyer. Started as a team leader / Java developer.After doing customer help, did the product manager of Gluegent Gate."
            },
            {
                date: "2014 Mar 31",
                category: "job",
                event: "end",
                title: "Gluegent, Inc.",
                text: "As a decision making of move to New Zealand, quit the second job."
            },
            {
                date: "2014 Apr 04",
                category: "move",
                event: "moment",
                title: "Auckland, New Zealand",
                text: "To making the new life, moved to New Zealand with my family."
            },
            {
                date: "2014 Jun 03",
                category: "education",
                event: "start",
                title: "Graduate Diploma in Information Technology at AIS",
                text: "For the first step of immigration, started the education at Auckland Institute of Studies."
            },
            {
                date: "2015 May 01",
                category: "education",
                event: "end",
                title: "Graduate Diploma in Information Technology at AIS",
                text: "Finished the level7 course with very successful result as all of subjects are at least A-"
            },
            {
                date: "2015 Nov 09",
                category: "job",
                event: "start",
                title: "Putti",
                text: "For the first commercial experience in Auckland, Putti chose me as the Native iOS/Android developer.Worked for mobile app development."
            },
            {
                date: "2015 Dec 21",
                category: "job",
                event: "end",
                title: "Putti",
                text: "Unfortunately, by some reason, I resigned putti."
            },
            {
                date: "2016 Jul 18",
                category: "education",
                event: "start",
                title: "Unitec Institute of Technologies",
                text: "To do further education, I enrolled Post Graduate Diploma in Computing held by Unitec Institute of Studies."
            },
            {
                date: "2016 Oct 05",
                category: "education",
                event: "pause",
                title: "Unitec Institute of Technologies",
                text: "As my father passed away all of sudden, went back to Japan for his funeral and following process.Due to taking many months, withdrew the course at once."
            },
            {
                date: "2017 Feb 20",
                category: "education",
                event: "start",
                title: "Unitec Institute of Technologies",
                text: "After finishing all of process for father's death, restarted Uintec."
            },
            {
                date: "2017 Oct 31",
                category: "education",
                event: "end",
                title: "Unitec Institute of Technologies",
                text: "Finished all of subject of Unitec with successful grades."
            },
        ];
    });