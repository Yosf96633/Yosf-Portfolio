import React from 'react'
import {Voting , Cinepop , Auranest} from "../../Public/image"
const Projects = () => {
    const projects = [
        {
          name: "DemocraSys",
          description: "A web application that helps users to create polls and manage voting processes.",
          tech: ["React", "Tailwind CSS", "React Router DOM", "Redux"],
          img: Voting, // Image imported from the folder
          liveDemo: "https://votingapp98.netlify.app/", // Live Demo link for Democrasys
        },
        {
          name: "Cinepop",
          description: "A movie search and recommendation platform that uses the TMDB API to fetch data on movies and TV shows.",
          tech: ["React", "Tailwind CSS", "Framer Motion", "React Router DOM", "Redux"],
          img: Cinepop, // Image imported from the folder
          liveDemo: "https://cinepop23yosf.netlify.app/", // Live Demo link for Cinepop
        },
        {
          name: "Auranest",
          description: "A real-time collaborative e-commerce platform powered by dummy JSON data, allowing users to interact and manage products.",
          tech: ["React", "React Router DOM", "Redux", "Tailwind CSS", "Ant Design", "Framer Motion"],
          img: Auranest, // Image imported from the folder
          liveDemo: "https://auranest.netlify.app/", // Live Demo link for Auranest
        },
      ];
  return (
    <div className=' min-h-[90vh] max-md:min-h-[70vh] py-16 w-full bg-black text-[#EEEEEE] flex flex-col space-y-8  items-center border-b-[0.5px] selection:bg-[#AA14F0] selection:text-black border-[#BC8CF2]'>
          <h1 className=" text-7xl max-md:text-5xl text-center text-white font-bold overflow-hidden">
        My <span className=" text-[#AA14F0]">Projects.</span>
      </h1>
      <section className="projects-section">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={project.img} alt={project.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="tech-stack flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge bg-purple-500 text-white px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>

    </div>
  )
}

export default Projects