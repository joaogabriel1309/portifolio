// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}