import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-5 text-center">
      <p className="text-xl text-slate-300 mb-0">Hello, I'm</p>
      <h1 className="text-5xl font-extrabold text-white mt-1 mb-4">
        Adhitya Wardhana
      </h1>
      <p className="text-lg text-slate-300 mb-10 max-w-2xl">
        Junior Developer | Web & Android Enthusiast
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
        <Link to="/#projects" className="px-7 py-3 rounded-full border-2 border-slate-600 text-white font-semibold transition hover:border-slate-400">
          View Projects
        </Link>
        <Link to="/#contact" className="px-7 py-3 rounded-full border-2 border-slate-600 text-white font-semibold transition hover:border-slate-400">
          Contact Me
        </Link>
      </div>
    </div>
  )
}