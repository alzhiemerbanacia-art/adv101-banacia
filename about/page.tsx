export default function AboutPage() {
  const skills = [
    { name: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML'] },
    { name: 'Backend', items: ['Node.js', 'SQL Server', 'REST APIs', 'Javascript'] },
    { name: 'Tools', items: ['Git / GitHub', 'VS Code', 'SSMS', 'Figma'] },
  ];

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">About Me</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-300 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg font-light leading-relaxed">
            <p>
              I’m Alzhiemer B. Bañacia, a 19-year-old BS Information Technology student at Holy Cross of Davao College. I’m interested in technology, web design, programming, photography, graphic design, and video editing. I enjoy learning new skills and creating digital projects that help me improve as an IT student.

            </p>
            <p>
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-6 glass-panel rounded-2xl">
                <p className="text-emerald-500 text-3xl font-bold font-serif">3</p>
                <p className="text-sm mt-1 opacity-80">Projects Crafted</p>
              </div>
              <div className="p-6 glass-panel rounded-2xl">
                <p className="text-emerald-500 text-3xl font-bold font-serif">100%</p>
                <p className="text-sm mt-1 opacity-80">Dedication</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold flex items-center gap-2">
               Skills & Capabilities
            </h2>

            <div className="space-y-4">
              {skills.map((category, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl">
                  <h3 className="text-emerald-500 font-medium mb-3">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3.5 py-1.5 glass-panel text-sm rounded-xl font-medium"
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
      </div>
    </section>
  );
}
