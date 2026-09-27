export default function ProjectsPage() {
  const projects = [
    {
      title: 'Redesigning foodpanda!',
      description: 'A modern UI/UX redesign concept focused on a cleaner layout, intuitive navigation, and an elevated food delivery ordering experience.',
      tags: ['Figma'],
      image: 'https://uploads.onecompiler.io/43zvj4fst/1790440128854/Screenshot%202026-09-27%20002836.png',
    },
    {
      title: 'Users behavior monitoring',
      description: 'An intuitive mobile application concept engineered to track daily task workflows and analyze user interaction habits seamlessly.Monitoring the users behavior.',
      tags: [' Kotlin', 'Java'],
      image: 'https://uploads.onecompiler.io/43zvj4fst/1790439790170/Screenshot%202026-09-27%20002304.png',
    },
    {
      title: 'Cuddle Fluff Website Project',
      description: 'A charming, responsive e-commerce web interface tailored for cute lifestyle products with a smooth and delightful shopping experience.',
      tags: [' HTML', 'CSS', 'Javascipt'],
      image: 'https://uploads.onecompiler.io/43zvj4fst/1790472111147/Screenshot%202026-09-27%20092111.png',
    },



  ];

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-300 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-emerald-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 opacity-80">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-emerald-500/20">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-medium text-emerald-500 glass-panel px-3 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
