// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-white text-gray-600">
      <div className="flex-1 max-w-2xl text-center md:text-left mb-8 md:mb-0">
        <p className="text-lg">Olá, eu sou o</p>
        <h2 className="text-6xl font-bold mt-2">João Gabriel</h2>
        <h3 className="text-3xl font-light text-cyan-500 mt-2">Desenvolvedor full stack | mobile | desktop</h3>
        <p className="mt-6 text-gray-600 leading-relaxed">
        Sou desenvolvedor com 4 anos de experiência criando soluções digitais que ajudam empresas a crescer e otimizar seus processos. Já participei do desenvolvimento de diversos projetos — desde sistemas internos até aplicações completas — que estarão disponíveis aqui no meu portfólio. Meu objetivo é entender as necessidades do seu negócio e transformá-las em soluções funcionais, seguras e bem estruturadas. Com foco em qualidade e prazos, posso apoiar sua empresa no desenvolvimento de novas ideias ou na evolução de sistemas já existentes.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 justify-center md:justify-start">
          <button className="cursor-pointer bg-cyan-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-cyan-700 transition-colors shadow-lg">
            Vamos Conversar
          </button>
          <a
    href="curriculo/cv.pdf"
    download="JoaoGabriel-CV.pdf"
    className="bg-transparent border border-gray-600 text-gray-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-200 hover:text-gray-900 transition-colors text-center"
  >
    Baixar CV ↓
  </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="rounded-full overflow-hidden w-94 h-94 md:w-95 md:h-95 border-4 border-cyan-400 shadow-xl">
          <Image
            src="/image/joao-gabriel.jpeg" // Certifique-se de ter essa imagem em sua pasta 'public'
            alt="João Gabriel"
            width={620}
            height={620}
            layout="responsive"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}