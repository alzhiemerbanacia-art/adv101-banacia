import React from 'react';

interface Project {
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'About',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
    link: '/about',
  },
  {
    title: 'Home',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=400',
    link: '/',
  },
  {
    title: 'Portfolio',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400',
    link: '/portfolio',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
  'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400',
  'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
];

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', color: '#333', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ backgroundColor: '#c5e1a5', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #aed581' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #ffcc80' }}>
            <span style={{ color: '#333', fontWeight: 'bold' }}>MP</span>
          </div>
          <h1 style={{ margin: 0, fontSize: '1.2rem', color: '#333' }}>My Portfolio</h1>
        </div>
        <nav style={{ display: 'flex', gap: '15px', color: '#333' }}>
          {['Home', 'About', 'Gallery', 'Portfolio'].map((item, index) => (
            <a key={index} href={`/${item === 'Home' ? '' : item.toLowerCase()}`} style={{ textDecoration: 'none', color: '#333', padding: '5px 10px', borderRadius: '5px', backgroundColor: index === 0 ? '#ffcdd2' : 'transparent', fontWeight: index === 0 ? 'bold' : 'normal' }}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        <section style={{ backgroundColor: '#fff8e1', padding: '30px', borderRadius: '15px', display: 'flex', gap: '30px', alignItems: 'center', border: '2px solid #ffe082' }}>
          <div style={{ flex: 1, color: '#333' }}>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Hello!</p>
            <h2 style={{ margin: '5px 0 15px', fontSize: '2.5rem', color: '#333' }}>I'm Alzhiemer</h2>
            <p style={{ margin: 0, lineHeight: '1.6', color: '#555' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor leo eget pretium ornare. Nulla id lobortis dui.
            </p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#e3f2fd', display: 'inline-block', padding: '20px', border: '5px solid #a5d6a7' }}>
              <img src="https://uploads.onecompiler.io/43zvj4fst/43zvjq68g/406.avif" alt="Alzhiemer Avatar" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#fce4ec', marginTop: '20px', padding: '30px', borderRadius: '15px', border: '2px solid #f8bbd0' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
            <h2 style={{ margin: 0, fontSize: '1.8rem' }}>My Projects</h2>
            <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#555' }}>Here are some of the things I've created.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', textAlign: 'center', border: '2px solid #eeeeee' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '5px', marginBottom: '10px' }} />
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>{project.title}</h3>
                <a href={project.link} style={{ display: 'inline-block', marginTop: '10px', textDecoration: 'none', color: '#333', backgroundColor: '#aed581', padding: '5px 15px', borderRadius: '5px', fontSize: '0.8rem' }}>
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '15px', color: '#333' }}>
            <h2 style={{ margin: 0, fontSize: '1.8rem', display: 'inline-block', backgroundColor: '#fff', padding: '5px 20px', borderRadius: '10px', border: '2px solid #eeeeee' }}>
              --- Gallery ---
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {galleryImages.map((image, index) => (
              <img key={index} src={image} alt={`Gallery item ${index}`} style={{ width: '100%', height: '110px', objectFit: 'cover', borderRadius: '10px' }} />
            ))}
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#c5e1a5', padding: '15px 20px', textAlign: 'center', marginTop: '20px', borderTop: '2px solid #aed581', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: '0.8rem', color: '#333' }}>Thank you for visiting! ♡</p>
        <div style={{ display: 'flex', gap: '10px', fontSize: '0.8rem' }}>
          <a href="https://github.com" style={{ color: '#333', textDecoration: 'none' }}>GitHub</a>
          <a href="https://instagram.com" style={{ color: '#333', textDecoration: 'none' }}>Instagram</a>
          <a href="mailto:email@example.com" style={{ color: '#333', textDecoration: 'none' }}>Email</a>
        </div>
      </footer>
    </div>
  );
}
