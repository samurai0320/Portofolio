export default function About() {
  return (
    <div className="relative z-10 min-h-screen px-6 py-12 flex items-center justify-center overflow-hidden">
      <style>{`
      `}</style>

      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            About Me
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="group">
              <p className="text-lg text-white leading-relaxed">
                I am a <span className="font-semibold text-white">Junior Developer</span> passionate 
                about Web and Android Mobile App Development, and an active student at 
                <span className="font-semibold text-white"> Jakarta State University</span>.
              </p>
            </div>

            <div className="group">
              <p className="text-lg text-white leading-relaxed">
                I bring <span className="font-semibold text-white">high motivation for growth</span> and 
                <span className="font-semibold text-white"> solid teamwork capabilities</span> to every project.
              </p>
            </div>

            <div className="group">
              <p className="text-lg text-white leading-relaxed">
                Ready to step into the professional world, I'm committed to transforming my 
                <span className="font-semibold text-white"> learning spirit into productive contributions</span> for the team.
              </p>
            </div>
          </div>
          <div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Key Strengths
              </h2>

              {[
                { icon: "•", title: "High Motivation", desc: "Eager to learn and grow continuously" },
                { icon: "•", title: "Team Collaboration", desc: "Communication & Leadership" },
                { icon: "•", title: "Problem Solving", desc: "Logical thinking & Creativity" },
                { icon: "•", title: "Adaptability", desc: "Quick to adjust and embrace new challenges" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm hover:border-gray-500 hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-lg text-white transition-colors">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white ml-11 transition-colors">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}