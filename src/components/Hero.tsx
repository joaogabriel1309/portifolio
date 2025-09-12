// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-gray-900 text-white">
      <div className="flex-1 max-w-2xl text-center md:text-left mb-8 md:mb-0">
        <p className="text-lg">Olá, eu sou o</p>
        <h2 className="text-6xl font-bold mt-2">João Gabriel</h2>
        <h3 className="text-3xl font-light text-cyan-400 mt-2">Engenheiro da Computação</h3>
        <p className="mt-6 text-gray-300 leading-relaxed">
          A vida é uma jornada cheia de desafios e aprendizados. Cada dia traz novas oportunidades para crescer e evoluir. O importante é seguir em frente, mesmo diante das dificuldades. Pequenas conquistas nos aproximam dos nossos maiores sonhos. A persistência e a dedicação são essenciais para o sucesso. Valorizar cada momento faz toda a diferença. O futuro é construído com as escolhas de hoje!
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 justify-center md:justify-start">
          <button className="bg-cyan-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-cyan-700 transition-colors shadow-lg">
            Vamos Conversar
          </button>
          <button className="bg-transparent border border-cyan-600 text-cyan-600 py-3 px-8 rounded-full font-semibold hover:bg-cyan-600 hover:text-white transition-colors">
            Baixar CV ↓
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-cyan-400 shadow-xl">
          <Image
            src="/joao-gabriel.png" // Certifique-se de ter essa imagem em sua pasta 'public'
            alt="João Gabriel"
            width={320}
            height={320}
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}