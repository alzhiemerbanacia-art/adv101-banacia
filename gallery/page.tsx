export default function GalleryPage() {
  const images = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400',
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400',
    'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-slate-100 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#3b5030] mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="relative h-48 rounded-2xl overflow-hidden border-2 border-slate-100">
            <img 
              src={src} 
              alt={`Gallery item ${idx}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
