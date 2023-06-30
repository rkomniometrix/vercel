import {  FaUserGraduate,FaSchool } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { ImOffice } from 'react-icons/im';

const GLOBAL_CONSTANTS = {
    "home": {
        "salutation": "Hello Folks!",
        "name":"RAHUL KUMAR",
        "title":"FULL STACK DEVELOPER"
    },
    "about":{
        "salutation": "Let Me Introduce Myself !",
        "title":"Biography",
        "description":"I'm a full-stack developer with a B.Tech degree from IIIT Kalyani. I specialize in building scalable web applications using modern technologies. My expertise includes front-end development with HTML, CSS, and JavaScript, along with frameworks like React.js. On the back-end, I'm skilled in Node.js and Express.js for building RESTful APIs. I also have experience with databases, both SQL and NoSQL. I'm passionate about solving problems and delivering high-quality software solutions. Let's build something amazing together!",
    },
    "career":{
        "salutation": "Here are my journey till now",
        "title":"My Journey",
        "timelineData" : [
            {
              "date": "July 2022 - Present",
              "title": "Associate Software Engineering",
              "subtitle": "Cogoport Freight Pvt. Ltd.",
              "description": "Working with React.js",
              "icon": <ImOffice/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" },
              "contentStyle":{ background: "rgb(33, 150, 243)", color: "#fff" }
            },
            {
              "date": "Aug 2018 - May 2022",
              "title": "Bachelor of Technology",
              "subtitle": "Indian Institute of Information Technology, Kalyani",
              "description": "Kalyani, West Bengal",
              "icon": <FaUserGraduate/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" },
            },
            {
              "date": "Jan 2022 - June 2022",
              "title": "Associate Software Engineering Intern",
              "subtitle": "Cogoport Freight Pvt. Ltd.",
              "description": "Working with React.js",
              "icon": <ImOffice/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" }
            },
            {
              "date": "August 2021 - Dec 2021",
              "title": "Software Engineering Intern",
              "subtitle": "GoBudGo",
              "description": "Adding and improving certain features of the website. Utilized Reactjs library and VS Code to create website layouts and user-friendly interfaces.",
              "icon": <BsPersonWorkspace/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" }
            },
            {
              "date": "October 2020 - January 2021",
              "title": "Frontend Web Developer",
              "subtitle": "BookVigyapan",
              "description": "Utilized Reactjs library and VS Code to create website layouts and user-friendly interfaces.",
              "icon": <BsPersonWorkspace/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" }
            },
            {
                "date": "December 2019",
                "title": "HackOffv2.0",
                "subtitle": "Vellore Institute of Technology, Gorbachev Road, Vellore, Tamil Nadu, India",
                "description": "A 24-hour long hackathon, Hack Off is inviting young minds from all across the nation, to come together to put up the greatest show the digital realm has ever seen.",
                "icon": <BsPersonWorkspace/>,
                "iconStyle": { background: "rgb(233, 30, 99)", color: "#fff" }
            },
            {
              "date": "2017",
              "title": "Intermediate",
              "subtitle": "Maharana Pratap Education Centre, Kalyanpur, Kanpur",
              "description": "Passed: 84%",
              "icon": <FaSchool/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" }
            },
            {
              "date": "2015",
              "title": "High School",
              "subtitle": "Maharana Pratap Education Centre, Kalyanpur, Kanpur",
              "description": "Passed: 9.6CGPA",
              "icon": <FaSchool/>,
              "iconStyle": { background: "rgb(33, 150, 243)", color: "#fff" }
            }
          ]  
    },
    "skills":{
        "salutation": "Hello Folks!"
    }
}

export default GLOBAL_CONSTANTS;