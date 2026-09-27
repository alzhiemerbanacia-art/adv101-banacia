import type { Metadata } from 'next';
import './globals.css';
import Header from './header';

export const metadata: Metadata = {
  title: 'Ate Tokyo',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="w-full py-8 border-t border-emerald-900/30 bg-[var(--bg-primary)] text-center text-sm opacity-70">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold font-serif text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          
        </div>
        <p className="text-emerald-200/60">© 2026 All rights reserved.</p>
      </div>
    </footer>
  );
}
