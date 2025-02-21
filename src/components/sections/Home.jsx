/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 select-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Amir
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto text-center">
        Front-End Developer passionate about building clean, user-friendly websites. Let’s create something amazing together
        </p>
        <div className="flex justify-center space-x-4">
        <a
  href="#projects"
  className="relative bg-blue-800 text-white py-2.5 px-5 rounded-lg font-normal text-sm transition-all overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/10 before:transition-all before:duration-300 hover:before:left-0 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
>
  View Projects
</a>
<a
  href="#contact"
  className="relative border border-blue-500 text-blue-500 py-2.5 px-5 rounded-lg font-normal text-sm transition-all overflow-hidden before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-blue-500/10 before:transition-all before:duration-300 hover:before:left-0 hover:shadow-[0_0_10px_rgba(37,99,235,0.2)]"
>
  Contact Me
</a>


        </div>
      </div>
    </section>
  );
}
