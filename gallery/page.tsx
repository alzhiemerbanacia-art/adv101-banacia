'use client';

import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Photoshoot work',
      category: 'Workspace',
      src: 'https://uploads.onecompiler.io/43zvj4fst/1790440255778/Screenshot%202026-09-27%20003049.png',
    },
    {
      id: 2,
      title: 'Photo Works!',
      category: 'Photoshoot',
      src: 'https://uploads.onecompiler.io/43zvj4fst/1790440270790/Screenshot%202026-09-27%20003105.png',
    },
    {
      id: 3,
      title: 'Photoshoot Session!',
      category: 'Photoshoot',
      src: 'https://uploads.onecompiler.io/43zvj4fst/1790440301165/Screenshot%202026-09-27%20003135.png',
    },
  ];

  return (
    <section className="py-16 min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
         Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-300 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer group glass-panel glass-panel-hover"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 backdrop-blur-xs">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full glass-panel rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 text-emerald-500 hover:text-emerald-400 glass-panel rounded-full transition-colors z-10"
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full max-h-[70vh] object-contain bg-black/20" 
            />
            <div className="p-6">
              <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h2 className="text-xl font-serif font-bold mt-1">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
