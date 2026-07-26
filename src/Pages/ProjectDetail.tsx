import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <Link to="/#projects" className="text-blue-400 hover:text-blue-300">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen px-6 py-32">
      <div className="w-full max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-12 font-medium group"
        >
          <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {/* Header Section */}
        <div className="mb-24">
          <div className="inline-flex px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-blue-300 text-xs font-bold tracking-widest uppercase shadow-sm mb-6">
            {project.type}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mb-10">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-4">
            {project.techStack.map((tech, idx) => (
              <span key={idx} className="px-5 py-2 bg-slate-800/60 text-slate-300 text-sm font-medium rounded-full border border-slate-700/50 shadow-sm">
                {tech}
              </span>
            ))}
          </div>
          {project.tools && (
            <div className="flex flex-wrap gap-4">
              {project.tools.map((tool, idx) => (
                <span key={`tool-${idx}`} className="px-5 py-2 bg-slate-800/60 text-slate-300 text-sm font-medium rounded-full border border-slate-700/50 shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-24">
          {project.documentation.map((doc, idx) => {
            const isEven = idx % 2 === 0;
            const isMobile = project.type === 'Mobile App';
            
            return (
              <div key={idx} className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'} ${isMobile ? 'justify-center' : ''}`}>
                <div className={`w-full ${isMobile ? 'max-w-[320px] mx-auto md:mx-0 shrink-0' : 'md:w-3/5'} rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40 border border-slate-700/50 bg-slate-800`}>
                  <img 
                    src={doc.image} 
                    alt={doc.title} 
                    className={`w-full ${isMobile ? 'h-auto object-contain' : 'max-h-[600px] object-contain'} hover:scale-105 transition-transform duration-700`}
                  />
                </div>
                
                <div className={`w-full ${isMobile ? 'md:w-1/2' : 'md:w-2/5'} p-8 lg:p-12 rounded-[2rem] bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-xl`}>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {doc.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {doc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
