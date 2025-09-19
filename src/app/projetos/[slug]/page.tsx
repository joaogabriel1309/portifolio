// src/app/projetos/[slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';

const projetos = [
  {
    slug: "projetoWorkLab",
    titulo: "AutomationWorkLab",
    data: "14/04/2023",
    tecnologias: ["C#", "Selenium", "SQLite"],
    detalhes: `Este projeto foi desenvolvido para o **Laboratório São José** com o objetivo de **automatizar a importação de resultados de exames** de arquivos PDF diretamente para o sistema interno da instituição. O sistema foi criado para solucionar a necessidade de otimizar a entrada de dados, que antes era feita de forma manual, e garantir maior eficiência e precisão no processo.

### Tecnologias e Ferramentas Utilizadas

* **C#**: Linguagem de programação principal, utilizada para construir a lógica robusta da aplicação.
* **Selenium**: Ferramenta-chave para a automação. O Selenium foi configurado para interagir com o sistema web do laboratório, navegando por telas, preenchendo formulários e realizando o upload das informações.
* **SQLite**: Banco de dados leve e eficiente, escolhido para armazenar dados essenciais como configurações do sistema, logs de importação e informações de usuários.

### Arquitetura do Projeto

O projeto segue uma arquitetura bem definida, baseada no padrão **Model-View-Controller (MVC)**, garantindo uma estrutura modular e fácil de manter.

* **View**: A interface gráfica foi construída para ser intuitiva e funcional, permitindo ao usuário interagir com o sistema de forma simples. Os formulários FormBeginning.cs, FormImport.cs e FormConfiguration.cs permitem a navegação e o controle das operações.
* **Controller**: Onde a lógica de negócio acontece. Controladores como archiveController gerenciam o tratamento de arquivos PDF, enquanto o browser utiliza o Selenium para a automação.
* **Model**: Responsável pela manipulação e persistência dos dados. As classes de entities definem a estrutura das informações, e a camada de repository abstrai o acesso ao banco de dados SQLite, facilitando a gestão dos dados.

### Funcionalidades e Impacto

O **AutomationWorkLab** entrega uma solução completa que engloba as seguintes funcionalidades:

* **Importação Automatizada**: O sistema escaneia diretórios, lê arquivos PDF de exames, extrai os dados relevantes e os insere no sistema interno do laboratório sem intervenção manual.
* **Configuração Flexível**: O usuário pode configurar o sistema de acordo com suas necessidades, como especificar o local dos arquivos de entrada e definir credenciais.
* **Registro de Atividades**: Um sistema de log de erros robusto foi implementado para registrar falhas durante a importação, facilitando a identificação e a correção de problemas.

O desenvolvimento deste projeto resultou em um aumento significativo da **produtividade** da equipe do laboratório, reduziu a **ocorrência de erros** humanos e permitiu que os colaboradores pudessem focar em atividades mais estratégicas. O projeto demonstra minha habilidade em criar soluções de automação eficientes e confiáveis para desafios do mundo real.`,
  },
];

export default function ProjetoDetalhe({ params }: { params: { slug: string } }) {
  const projeto = projetos.find((p) => p.slug === params.slug);
  if (!projeto) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl text-gray-800 font-bold mb-4">{projeto.titulo}</h1>
      <p className="text-sm text-gray-500 mb-2">Data: {projeto.data}</p>
      <div className="flex gap-2 mb-4">
        {projeto.tecnologias.map((tec) => (
          <span key={tec} className="text-white bg-blue-500 px-2 py-1 rounded text-xs">
            {tec}
          </span>
        ))}
      </div>
      <div className="prose max-w-none text-gray-600">
        <ReactMarkdown>{projeto.detalhes}</ReactMarkdown>
      </div>
    </div>
  );
}