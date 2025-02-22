import { CodeSimple, GithubLogo } from "@phosphor-icons/react";
import { frontSkills } from "./About";

const rickAndMortySkills = frontSkills.slice(0, 4);

export default function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2 flex gap-2 items-center">
              {" "}
              <CodeSimple size={20} />
              Rick and morty{" "}
            </h3>
            <p className="text-gray-400 mb-4">
              A React-based web application for exploring Rick and Morty
              characters, episodes, and locations using the Rick and Morty API
            </p>
            <div>
              {rickAndMortySkills.map((skill, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <a
                href="https://github.com/AmirHossein-Kargar/rick-and-morty-react-app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex gap-2 items-center"
              >
                <GithubLogo size={20} weight="bold" /> View Project
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2 flex gap-2 items-center">
              {" "}
              <CodeSimple size={20} />
              Rick and morty{" "}
            </h3>
            <p className="text-gray-400 mb-4">
              A React-based web application for exploring Rick and Morty
              characters, episodes, and locations using the Rick and Morty API
            </p>
            <div>
              {rickAndMortySkills.map((skill, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <a
                href="https://github.com/AmirHossein-Kargar/rick-and-morty-react-app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex gap-2 items-center"
              >
                <GithubLogo size={20} weight="bold" /> View Project
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2 flex gap-2 items-center">
              {" "}
              <CodeSimple size={20} />
              Rick and morty{" "}
            </h3>
            <p className="text-gray-400 mb-4">
              A React-based web application for exploring Rick and Morty
              characters, episodes, and locations using the Rick and Morty API
            </p>
            <div>
              {rickAndMortySkills.map((skill, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <a
                href="https://github.com/AmirHossein-Kargar/rick-and-morty-react-app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex gap-2 items-center"
              >
                <GithubLogo size={20} weight="bold" /> View Project
              </a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl font-bold mb-2 flex gap-2 items-center">
              {" "}
              <CodeSimple size={20} />
              Rick and morty{" "}
            </h3>
            <p className="text-gray-400 mb-4">
              A React-based web application for exploring Rick and Morty
              characters, episodes, and locations using the Rick and Morty API
            </p>
            <div>
              {rickAndMortySkills.map((skill, key) => {
                return (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <a
                href="https://github.com/AmirHossein-Kargar/rick-and-morty-react-app"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex gap-2 items-center"
              >
                <GithubLogo size={20} weight="bold" /> View Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
