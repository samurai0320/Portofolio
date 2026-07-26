const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "Laravel (PHP)", "MySQL", "PostgreSQL", "React", "Next.js"],
  },
  {
    title: "Mobile Development",
    skills: ["Kotlin", "Jetpack Compose", "Android Studio", "Material Design"],
  },
  {
    title: "Programming Language",
    skills: ["C++", "Python"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Android Studio", "Visual Studio Code", "Figma"],
  }
];

export default function Skills() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I've been working with to build web and mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900/40 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/30"
            >
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {category.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-800/60 text-slate-300 text-sm font-medium rounded-lg border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
