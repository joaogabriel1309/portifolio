"use client";
import React, { useState } from "react";
import Link from "next/link";

interface ProjetoCardProps {

  titulo: string;
  tecnologias: string[];
  data: string;
  descricao: string;
  imagens: string[];
  botoes: { texto: string; link: string; tipo?: "primario" | "secundario" }[];
}

const coresTecnologias: Record<string, string> = {
  Java: "bg-yellow-600",
  Angular: "bg-red-600",
  Docker: "bg-blue-600",
  Csharp: "bg-purple-600",
  Flutter: "bg-cyan-600",
  Nextjs: "bg-gray-600",
  React: "bg-blue-500",
  Selenium: "bg-green-600",
  sqlite: "bg-glay-600",
};

export default function ProjetoCard({
  titulo,
  tecnologias,
  data,
  descricao,
  imagens,
  botoes,
}: ProjetoCardProps) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const irParaProximaImagem = () => {
    setImagemAtual((prevIndex) =>
      prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

  const irParaImagemAnterior = () => {
    setImagemAtual((prevIndex) =>
      prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="flex flex-col md:flex-row bg-black dark:bg-gray-50 shadow rounded-2xl overflow-hidden mb-6">
      <div className="p-5 flex-1">

        <h2 className="text-xl text-gray-800 font-semibold">{titulo}</h2>
        <div className="flex gap-2 mt-2 flex-wrap">
          <p className="text-sm text-gray-600">Tecnologias utilizadas: </p>
          {tecnologias.map((tec) => (
            <span
              key={tec}
              className={`text-white text-xs px-2 py-1 rounded ${
                coresTecnologias[tec] || "bg-gray-500"
              }`}
            >
              {tec}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">Data: {data}</p>
        <p className="mt-2 text-gray-600">{descricao}</p>

        <div className="flex gap-3 mt-4 flex-wrap">
          {/* dentro do map botoes */}
          {botoes.map((btn) =>
            btn.tipo === "primario" ? (
              <Link
                key={btn.texto}
                href={btn.link} 
                className="px-4 py-2 rounded-full font-medium bg-blue-600 hover:bg-blue-700 text-white"
              >
                {btn.texto}
              </Link>
            ) : (
              <a
                key={btn.texto}
                href={btn.link}
                className="px-4 py-2 rounded-full font-medium bg-gray-200 hover:bg-gray-300 text-gray-800"
              >
                {btn.texto}
              </a>
            )
          )}
        </div>
      </div>

      {/* Carrossel de Imagens */}
      <div className="relative w-full md:w-1/3 ">
        <img
          src={imagens[imagemAtual]}
          alt={titulo}
          className="h-full w-full object-cover"
        />
        {imagens.length > 1 && (
          <>
            {/* Botão para Imagem Anterior */}
            {imagemAtual > 0 && (
              <button
                onClick={irParaImagemAnterior}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
                aria-label="Imagem anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
            {/* Botão para Próxima Imagem */}
            {imagemAtual < imagens.length - 1 && (
              <button
                onClick={irParaProximaImagem}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors duration-200"
                aria-label="Próxima imagem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
