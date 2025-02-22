import { GraduationCap, Code, Translate } from "@phosphor-icons/react";
export const frontSkills = [
   "HTML",
   "CSS",
   "JavaScript",
   "React",
   "TypeScript",
   "Tailwind-CSS",
   "SASS",
 ];
export default function About() {
  //   const backSkills = []

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all duration-200">
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            culpa, nulla sunt ab maiores nam? Reiciendis dolor perspiciatis sint
            qui.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <div className="flex gap-2 items-center mb-4">
                <Code size={20} />
                <h3 className="text-lg font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* For BackEnd Skills */}
            {/* <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">BackEnd</h3>
              <div className="flex flex-wrap gap-2">
                {frontSkills.map((skill, key) => {
                return  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>;
                })}
              </div>
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-200">
            <div className="flex gap-2 items-center mb-4">
              <GraduationCap size={20} weight="duotone" />
              <h3 className="text-lg font-bold">Education</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Dip in Computer Software</strong> (2022)
              </li>
              <li>
                <strong>Associate Degree</strong> (2025)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-200">
            <div className="flex gap-2 items-center mb-4">
              <Translate size={20} />
              <h3 className="text-lg font-bold">Languages</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong className="font-semibold">Persian (Native)</strong>
                  </li>
                  <li>
                    <strong className="font-semibold">English (Native)</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
