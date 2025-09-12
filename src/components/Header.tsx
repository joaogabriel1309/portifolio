// components/Header.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-900 text-white">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">&lt;João/&gt;</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="#projetos" className="hover:text-cyan-400 transition-colors">
            Projetos
          </Link>
          <Link href="#servicos" className="hover:text-cyan-400 transition-colors">
            Serviços
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="https://github.com/joao" target="_blank" rel="noopener noreferrer" aria-label="Github">
          <FaGithub className="text-2xl hover:text-cyan-400 transition-colors" />
        </Link>
        <Link href="https://linkedin.com/in/joao" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-cyan-400 transition-colors" />
        </Link>
        <Link href="https://wa.me/seunumerodecelular" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
          <FaWhatsapp className="text-2xl hover:text-cyan-400 transition-colors" />
        </Link>
        <button className="bg-gray-700 w-12 h-6 rounded-full flex items-center p-1 focus:outline-none">
          <span className="w-4 h-4 rounded-full bg-gray-400 transition-transform transform translate-x-0"></span>
        </button>
      </div>
    </header>
  );
}