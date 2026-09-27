import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-12">

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden dark:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
        >
          <source src="/adv101-banacia/public/night-forest.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none block dark:hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 transition-opacity duration-500"
        >
          <source src="/day-forest.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-950/60 via-emerald-950/40 to-[var(--bg-primary)] pointer-events-none" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
          
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-emerald-400/40 glass-panel p-1.5 shadow-xl">
            <img
              src="https://uploads.onecompiler.io/43zvj4fst/1790438318347/received_1818693479488596.jpeg" 
              alt="Allie Bañacia"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <span className="absolute bottom-1 right-1 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-300/40 shadow-lg flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            Developer
          </span>
        </div>

        <div className="inline-block px-5 py-2 glass-panel rounded-full text-emerald-500 font-medium text-sm mb-6 shadow-sm">
          Allie's World!
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-wide mb-6 leading-tight">
          Hello!, I'm Alzhiemer{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400 bg-clip-text text-transparent text-glow">
            Bañacia!
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-10 leading-relaxed font-light opacity-90">
          Welcome to my little corner of the internet. Here you’ll find my interests, skills, projects, designs, and other things I enjoy creating.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Explore Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-4 glass-panel glass-panel-hover font-semibold rounded-2xl transition-all"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
