import Header from "@/components/Header";
import ProjetoCard from "@/components/ProjetoCard";

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <ProjetoCard
          titulo="AutomationWorkLab projeto realizado para um laboratório clinico"
          tecnologias={["Csharp", "SQLite", "Selenium"]}
          data="14/04/2023"
          descricao="Este projeto foi desenvolvido para o Laboratório São José, com o objetivo de atender à demanda de importação de arquivos PDF contendo resultados de exames e inseri-los no sistema interno da instituição. Para automatizar esse processo e garantir maior eficiência, foi utilizada a ferramenta Selenium."
          imagens={[
            "/image/projetos/workLab/pagina_home.png",
            "/image/projetos/workLab/pagina_cadastro_usuario.png",
            "/image/projetos/workLab/pagina_configuracao.png",            
            "/image/projetos/workLab/pagina_importacao.png",
            "/image/projetos/workLab/pagina_notificacao.png",
          ]}
          botoes={[
            { texto: "Saber mais", link: "/projetos/projetoWorkLab", tipo: "primario" },
            { texto: "Código Fonte", link: "https://github.com/joaogabriel1309/AutomationWorkLab" },
          ]}
        />
        
      </div>
    </>
  );
}
