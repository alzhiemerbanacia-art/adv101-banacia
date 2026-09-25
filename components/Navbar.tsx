import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[#b5d39b] px-6 py-3 flex items-center justify-between rounded-t-2xl">
      
      <div className="flex items-center gap-3">
       
        <div className="w-12 h-12 bg-[#ffe79a] border-2 border-[#3d5229] rounded-full flex items-center justify-center relative overflow-hidden shadow-sm">
          
          <div className="relative flex items-center justify-center w-full h-full">
           
            <div className="absolute w-10 h-4 border-2 border-[#3d5229] rounded-full rotate-[-25deg]" />
           
            <div className="w-7 h-7 bg-[#ffd369] border border-[#3d5229] rounded-full flex items-center justify-center z-10">
             
              <div className="flex gap-1 items-center pt-1">
                <span className="w-1 h-1 bg-[#3d5229] rounded-full" />
                <span className="text-[8px] leading-none text-[#3d5229] font-bold">◡</span>
                <span className="w-1 h-1 bg-[#3d5229] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <span className="text-xl font-bold text-[#3d5229] tracking-wide">
          My Portfolio
        </span>
      </div>

      <nav className="flex items-center gap-2">
        <Link
          href="/"
          className="bg-[#fce1e8] text-[#3d5229] font-bold px-5 py-1.5 rounded-full shadow-sm text-base transition hover:opacity-90"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-[#3d5229] font-bold px-4 py-1.5 rounded-full text-base hover:bg-white/30 transition"
        >
          About
        </Link>
        <Link
          href="/gallery"
          className="text-[#3d5229] font-bold px-4 py-1.5 rounded-full text-base hover:bg-white/30 transition"
        >
          Gallery
        </Link>
        <Link
          href="/portfolio"
          className="text-[#3d5229] font-bold px-4 py-1.5 rounded-full text-base hover:bg-white/30 transition"
        >
          Portfolio
        </Link>
      </nav>
    </header>
  );
}
