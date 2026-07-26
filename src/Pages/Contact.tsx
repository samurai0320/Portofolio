const contactInfo = [
  {
    name: "Location",
    value: "Jakarta, Indonesia",
    link: "https://maps.google.com/?q=Jakarta",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    name: "Email",
    value: "@adhitya.wardhana0320@gmail.com", 
    link: "mailto:adhitya.wardhana0320@gmail.com", 
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: "GitHub",
    value: "github.com/samurai0320", 
    link: "https://github.com/samurai0320",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    value: "Adhitya Wardhana", 
    link: "https://www.linkedin.com/in/adhitya-wardhana-50315b361/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    name: "Instagram",
    value: "adhitya.wardhana.92", 
    link: "https://www.instagram.com/adhitya.wardhana.92/",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  }
];

export default function Contact() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
      <div className="w-full max-w-2xl mx-auto bg-slate-900/50 border border-slate-700/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/10 text-center">
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
          Get In Touch
        </h1>
        
        <p className="text-md md:text-lg text-slate-300 mb-10 leading-relaxed">
          Have a project in mind, a job opportunity? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {contactInfo.map((info, index) => (
            <a 
              key={index} 
              href={info.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20 hover:border-blue-500/40 hover:bg-slate-800/80 ${index === 0 ? 'sm:col-span-2' : ''}`}
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-slate-900/80 text-blue-400 transition-colors group-hover:bg-blue-500/20 group-hover:text-blue-300">
                {info.icon}
              </div>
              <div className="overflow-hidden">
                <h3 className="text-base font-semibold text-white mb-0.5">{info.name}</h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors truncate">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </div>
  );
}
