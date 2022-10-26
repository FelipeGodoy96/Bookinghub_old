import React, { createContext, useState } from "react";
import HotelCapa from "../assets/img/HotelCapa.jpg";
import HostelCapa from "../assets/img/HostelCapa.jpg";
import HotelFazendaCapa from "../assets/img/HotelFazendaCapa.jpg";
import ApartamentosCapa from "../assets/img/ApartamentosCapa.jpg";

const categorias = [
  { 
    id: 1, 
    qualificacao: "5", 
    descricao: "Hotel", 
    imagem: HotelCapa 
  }
  ,
  {
    id: 2,
    qualificacao: "4",
    descricao: "Hotel Fazenda",
    imagem: HotelFazendaCapa
  }
  ,
  { id: 3, 
    qualificacao: "4", 
    descricao: "Hostel", 
    imagem: HostelCapa 
  }
  ,
  {
    id: 4,
    qualificacao: "3",
    descricao: "Apartamentos",
    imagem: ApartamentosCapa
  }
];

const anuncios = [
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Hotel Solar de Maria",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },  
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://hotelsolardemaria.com.br/images/fachada-externa.jpg",
    category: categorias.find( f => f.id === 1),
    title: "Novo Hotel",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  ];

const DEFAULT_VALUE = {
  state: { anuncios, categorias },
  setState: () => {} //função de inicialização
};
const Context = createContext(DEFAULT_VALUE);

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export { ContextProvider };
export default Context;
