/* eslint-disable react/prop-types */
import { CodeSimple, GithubLogo } from "@phosphor-icons/react";

// * List of my Projects
const projects = [
  {
    title: "Rick and Morty",
    description:
      "A React-based web application for exploring Rick and Morty characters, episodes, and locations using the Rick and Morty API",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/AmirHossein-Kargar/rick-and-morty-react-app",
  },
  {
    title: "Weather App",
    description:
      "A simple weather app that fetches real-time weather data from an API.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/yourgithub/weather-app",
  },
  {
    title: "Todo List",
    description:
      "A minimalistic to-do list app with local storage and React hooks.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/yourgithub/todo-app",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "An admin dashboard for managing products and orders in an e-commerce system.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/yourgithub/ecommerce-dashboard",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group max-sm:flex max-sm:flex-col max-sm:items-center p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
      <h3 className="group-hover:text-blue-500 text-xl font-bold mb-2 flex gap-2 items-center">
        <CodeSimple size={20} />
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div>
        {project.skills.map((skill, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <a
          href={project.github}
          className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex gap-2 items-center"
        >
          <GithubLogo size={20} weight="bold" /> View Project
        </a>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
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
