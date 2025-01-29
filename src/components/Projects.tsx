import React from 'react';
import Card from './Card';
import styles from  "../app/styles/projects.module.css";
import Heading from './Heading';

const data = [
  {
    id: 0,
    title: "Group Routing",
    desc: "A React Css & TypeScript Based App For Managing and organizing your Task efficiently.",
    img:"/login.PNG",
    tags: ["React", "Node.js", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: " Static Resume Builder",
    desc: "A React & TypeScript Based App For Managing and organizing your Task efficiently.",
    img:"/my.jpg",
    tags: ["React", "Node.js", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Dynamic Editable shareable Resume Builder",
    desc: "A basic HTML, TypeScript, and JavaScript-based App for Resumer.",
    img:"/dynamic.PNG",
    tags: ["React", "Node.js", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "My Portfolio",
    desc: "A personal portfolio website built with React,Tailwand CSS and TypeScript.",
    img:"/port.jpg",
    tags: ["React", "Node.js", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "E-Commerce Website",
    desc: "A basic E-Commerce site with React and Node.js.",
    img:"/e.commerce.jpg",
    tags: ["React", "Node.js", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "Responsive Website",
    desc: "A basic html and CSS project.",
    img:"/r.s.png",
    tags: ["React", "Node.js", "CSS", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className={styles.projectsContainer}>
      <Heading title='Projects' />
      <div className={`${styles.projectsGrid} ${styles.projectsCenter}`}>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
