import React, { useState } from "react";
import "./App.css"
import Perfil from "./Components/Perfil/index"
import Biografia from "./Components/Biografia/index"
import Titulo from "./Components/Titulo/index"
import SideArea from "./Components/SideArea"
import Experiencia from "./Components/Experiencia";


function App() {


  
  const fakeAPI =
  {
    nome: 'Zerli S.F. de Lima  ',
    ocupacao: 'React Developer Jr.',
    resumo:'Em busca de redirecionar a carreira busquei na área de desenvolvimento uma nova inspiração' ,
    perfilProfissional: 'Experiência em acompanhamento, planejamento e controle de atividades. Acompanhamento em auditorias internas (ISO9001).',
    contatos: [
      {
        id: 1,
        tipo: 'telefone',
        contato: '19 98232-5443'
      },
      {
        id: 2,
        tipo: 'email',
        contato: 'zerllys@hotmail.com'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'Universidade São Francisco',
        curso: 'Tecnologia em Processos Gerenciais'
      },
      {
        id: 2,
        instituicao: 'SENAI - Prof. Dr. Euryclides de Jesus Zerbini',
        curso: 'Técnico em Desenvolvimento de Sistemas'
      },
      {
        id: 3,
        instituicao: 'Digital Inovation One',
        curso: 'Bootcamp React'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Técnica em Planejamento',
        periodo: '11/2008 - 02/2015',
        empresa: 'Andritz Hydro Inepar',
        local: 'Araraquara',
        conteudo: 'Atendimento técnico e gestão de projetos e materiais'
      },
      {
        id: 2,
        cargo: 'Auxiliar Técnica',
        periodo: '11/2007 - 11/2008',
        empresa: 'Hirsa Sistemas de Automação e Controle LTDA',
        local: 'Paulínia',
        conteudo: 'Atendimento ao cliente e gestão de projetos, acompanhamento em processos auditados'
      } 
    ],
  }

  const [respAPI] = useState(fakeAPI)

  return (
    <main>
      <Perfil perfil={respAPI} />
      <Biografia bio={respAPI}/>
      <Titulo tit={respAPI}/>
      <SideArea side={respAPI}/>
      <Experiencia exp={respAPI}/>
    </main>
  );
}

export default App;