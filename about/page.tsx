export default function AboutPage() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-slate-100 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[#3b5030] mb-6 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden shrink-0 border-4 border-[#b2d398]">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[#556b2f] space-y-3">
          <p>Hello! I'm Alzhiemer.</p>
          <p>
            Welcome to my personal page. I build cute, functional modern web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
