import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function ProjectCard({ project }: { project: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-6 lg:p-8 transition-all hover:shadow-2xl hover:shadow-blue-900/10 hover:border-slate-600/50 group">
      
      {/* Left Column: Image & Badge */}
      <div className="w-full lg:w-5/12 flex flex-col gap-5">
        <div className="inline-flex w-max px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-300 text-xs font-semibold tracking-wide shadow-sm">
          {project.type}
        </div>
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg shadow-black/20">
          {project.coverImage ? (
             <img 
               src={project.coverImage} 
               alt={project.title} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
          ) : (
             <div className="w-full h-full flex items-center justify-center bg-slate-800 border border-slate-700/50">
               <svg className="w-16 h-16 text-slate-700 group-hover:text-blue-500/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
             </div>
          )}
        </div>
      </div>

      {/* Right Column: Details */}
      <div className="w-full lg:w-7/12 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h2>
          <p className="text-slate-300 mb-5 leading-relaxed text-base">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {project.techStack.map((tech: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-slate-800/60 text-blue-300 text-xs font-medium rounded-full border border-slate-700/50">
                {tech}
              </span>
            ))}
          </div>
          {project.tools && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool: string, idx: number) => (
                <span key={`tool-${idx}`} className="px-3 py-1 bg-slate-800/60 text-blue-300 text-xs font-medium rounded-full border border-slate-700/50">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5 mt-auto pt-4">
          <div className="relative">
            <p className={`text-slate-400 text-sm leading-relaxed ${expanded ? 'block' : 'hidden'} transition-all duration-300 mb-4`}>
              {project.whatIDid}
            </p>
            <div className="flex justify-between items-center">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <button 
                onClick={() => setExpanded(!expanded)} 
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center gap-1 transition-colors"
              >
                {expanded ? 'Show Less ᐱ' : 'Read More ᐯ'}
              </button>
            </div>
          </div>
          
          <Link 
            to={`/project/${project.id}`} 
            className="w-full py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-center text-sm font-semibold rounded-xl text-slate-200 transition-colors border border-slate-700 shadow-md"
          >
            View Full Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="relative z-10 flex flex-col items-center min-h-screen px-6 py-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A collection of work that showcases my passion for building clean, performant, and user-centric digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
