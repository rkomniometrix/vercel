import html from '../../public/skills icon/html5.png';
import cLang from "../../public/skills icon/c.png";
import css from "../../public/skills icon/css-3.png";
import javascript from "../../public/skills icon/javascript.png";
import nodejs from "../../public/skills icon/node.jpg";
import express from "../../public/skills icon/express.png";
import mongo from "../../public/skills icon/mongo.jpg";
import bootstrap from "../../public/skills icon/bootstrap.jpg";
import mysql from "../../public/skills icon/mysql.jpg";
import materialUI from "../../public/skills icon/materialUI.png";
import reactjs from "../../public/skills icon/reactjs.png";
import sass from "../../public/skills icon/sass.png";

import vscode from "../../public/skills icon/visual.png";
import sublime from "../../public/skills icon/sublime.png";
import codepen from "../../public/skills icon/codepen.png";
import anaconda from "../../public/skills icon/anaconda.png";
import spyder from "../../public/skills icon/spyder.png";
import git from "../../public/skills icon/git.png";
import github from "../../public/skills icon/github.png";


import styles from './styles.module.scss';
import Image from 'next/image';


const posts = [
  {
    id: 1,
    title: "HTML",
    source: html,
    href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    alt: "HTML5",
  },
  {
    id: 2,
    title: "C/C++",
    source: cLang,
    href: "https://www.learn-c.org/",
    alt: "C/C++",
  },
  {
    id: 4,
    title: "MongoDB",
    source: mongo,
    href: "https://www.mongodb.com/",
    alt: "",
  },
  {
    id: 6,
    title: "Expressjs",
    source: express,
    href: "https://expressjs.com/",
    alt: "",
  },
  {
    id: 7,
    title: "Nodejs",
    source: nodejs,
    href: "https://nodejs.org/en/",
    alt: "",
  },
  {
    id: 9,
    title: "Bootstrap",
    source: bootstrap,
    href: "https://getbootstrap.com/",
    alt: "",
  },
  {
    id: 10,
    title: "CSS3",
    source: css,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    alt: "",
  },
  {
    id: 11,
    title: "MySQL",
    source: mysql,
    href: "https://www.tutorialspoint.com/sql/",
    alt: "",
  },
  {
    id: 12,
    title: "ReactJS",
    source: reactjs,
    href: "https://reactjs.org/docs/getting-started.html",
    alt: "",
  },
  {
    id: 13,
    title: "Sass",
    source: sass,
    href: "https://sass-lang.com/documentation",
    alt: "",
  },
  {
    id: 14,
    title: "Material UI",
    source: materialUI,
    href: "https://mui.com/getting-started/usage/",
    alt: "",
  },
  {
    id: 15,
    title: "Javascript",
    source: javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    alt: "",
  },
];

function SkillsThumbnail(props){ 
    const content = props.posts.map((post) =>
        <div className={styles.skills_thumbnail} key={post.id}>
            <Image src={post.source} alt={post.alt} className={styles.skills_logo} />
            <h3 className={styles.skills_title}>{post.title}</h3>
            <a href={post.href} className={styles.learnMore}  title="Click here to learn" rel="noreferrer" target="_blank">Learn More &rarr;</a>
        </div>
    )
    return(
        <div className={styles.skills_coding}>
            {content}
        </div>
    )
 }

 const ToolsPosts = [
   {
     id: 1,
     title: "VS Code",
     source: vscode,
     href: "https://code.visualstudio.com/",
     alt: "HTML5",
   },
   {
     id: 3,
     title: "Sublime Text 3",
     source: sublime,
     href: "https://download.sublimetext.com/Sublime%20Text%20Build%203211%20x64%20Setup.exe",
     alt: "",
   },
   {
     id: 4,
     title: "Codepen",
     source: codepen,
     href: "https://codepen.io/pen/",
     alt: "",
   },
   {
     id: 6,
     title: "Anaconda",
     source: anaconda,
     href: "https://www.anaconda.com/products/individual#Downloads",
     alt: "",
   },
   {
     id: 8,
     title: "Spyder",
     source: spyder,
     href: "https://www.spyder-ide.org/#",
     alt: "",
   },
   {
     id: 9,
     title: "Github",
     source: github,
     href: "https://desktop.github.com/",
     alt: "",
   },
   {
     id: 9,
     title: "Git",
     source: git,
     href: "https://git-scm.com/downloads",
     alt: "",
   },
 ];

function ToolsThumbnail(props){ 
    const content = props.ToolsPosts.map((post) =>
        <div className={styles.skills_thumbnail} key={post.id}>
            <Image src={post.source} alt={post.alt} className={styles.skills_logo} />
            <h3 className={styles.skills_title}>{post.title}</h3>
            <a href={post.href} className={styles.learnMore}  title="Click here to learn" rel="noreferrer" target="_blank">Download &darr;</a>
        </div>
    )
    return(
        <div className={styles.skills_coding}>
            {content}
        </div>
    )
 }

function Skills() {
    return(
        <main className={`${styles.container} ${styles.typography}`}>  
            <section className={styles['section-skills']} id="skills">
                <div className={styles.skills}>
                    <div className="about_skills-title myinfo">
                        <h6 className={styles['heading-secondary']}>Here are some my skills</h6>
                        <h1 className={styles['heading-primary']}>My Skills</h1>
                    </div>
                    <SkillsThumbnail  posts={posts}/>
                    <h1 className={styles['heading-1']}>Development Tools &rarr;</h1>
                    <ToolsThumbnail  ToolsPosts={ToolsPosts}/>
                </div>
            </section>
        </main>
    );
}
export default Skills;