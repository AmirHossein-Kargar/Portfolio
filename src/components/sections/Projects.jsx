/* eslint-disable react/prop-types */
import { CodeSimple, GithubLogo } from "@phosphor-icons/react";

// * List of my Projects
const projects = [
  {
    title: "Rick and Morty",
    description:
      "A React-based web application for exploring Rick and Morty characters, episodes, and locations using the Rick and Morty API",
    skills: ["React", "Tailwind-Css"],
    github: "https://github.com/AmirHossein-Kargar/rick-and-morty-react-app",
  },
  {
    title: "Note App",
    description:
      "A simple and efficient note-taking app that allows you to create, edit, and delete notes. It stores your notes locally in the browser, so no backend is needed. Perfect for keeping your ideas organized on any device.",
    skills: ["React",],
    github: "https://github.com/AmirHossein-Kargar/note-app",
  },
  // {
  //   title: "Lorem Ipsum",
  //   description:
  //     "A minimalistic to-do list app with local storage and React hooks.",
  //   skills: ["HTML", "CSS", "JavaScript", "React"],
  //   github: "",
  // },
  // {
  //   title: "Lorem Ipsum",
  //   description:
  //     "An admin dashboard for managing products and orders in an e-commerce system.",
  //   skills: ["HTML", "CSS", "JavaScript", "React"],
  //   github: "https://github.com/yourgithub/ecommerce-dashboard",
  // },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group max-sm:flex max-sm:flex-col max-sm:items-center p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] flex flex-col h-full">
    <h3 className="group-hover:text-blue-500 text-xl font-bold mb-2 flex gap-2 items-center">
      <CodeSimple size={20} />
      {project.title}
    </h3>
    <p className="text-gray-400 mb-4 flex-grow">{project.description}</p> 
    <div className="mb-4">
      {project.skills.map((skill, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="mt-auto">
      <a
        href={project.github}
        className="text-blue-400 hover:text-blue-300 transition-colors flex gap-2 items-center"
      >
        <GithubLogo size={20} weight="bold" /> View Project
      </a>
    </div>
  </div>
  
  );
};

export default function Projects() {
  return (
    <section className="h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="max-sm:text-center grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
