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
  },
  {
    id: 2,
    qualificacao: "4",
    descricao: "Hotel Fazenda",
    imagem: HotelFazendaCapa
  },
  { id: 3, qualificacao: "4", descricao: "Hostel", imagem: HostelCapa },
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
    category: categorias.find((f) => f.id === 1),
    title: "Hotel Solar de Maria",
    location: "Ouro Preto",
    description:
      "O Hotel Solar de Maria está situado em ponto estratégico, a poucos passos da suntuosa Igreja de Nossa Senhora do Rosário e próximo aos principais atrativos turísticos, bem como a 700 mts do Centro de Artes e Convenções, sede dos mais importantes eventos e congressos da região."
  },
  {
    img: "https://magazine.zarpo.com.br/wp-content/uploads/2019/02/Belmond-Copacabana-Palace-Uma-estada-glamour-no-Rio-de-Janeiro-770x450.jpg",
    category: categorias.find((f) => f.id === 1),
    title: "Copacabana Palace, A Belmond Hotel,",
    location: "Rio de Janeiro",
    description:
      "Torne esta estação brilhante com uma estada tropical no Copacabana Palace. Com vistas cinematográficas durante o dia e comemorações lendárias à noite, saboreie caipirinhas à beira da piscina e bronzeie-se em areias douradas. Nosso hotel tem sido um símbolo brasileiro à beira-mar por quase um século, e a sensação de glamour histórico está viva a cada passo. Enquanto seu coração deseja um almoço tranquilo sob o sol ou coquetéis ardentes às 4 da manhã, ajudaremos a manter a chama acesa no nosso oásis cultural."
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/256819859.jpg?k=f9d82b5fa0bca259d4609b6368c531c13ceb5f7560c806bb3c9e7f36e599be98&o=&hp=1",
    category: categorias.find((f) => f.id === 2),
    title: "Balneário Rio de Pedras",
    location: "Itabirito",
    description:
      "Chalés Charmosos, Ótimo Restaurante, Parque Aquático Completo, Piscina Aquecida Coberta. Cheio de Opções de Lazer e Entretenimento com uma Represa de Mais de 15 km de Extensão. Diversão para Família. Lazer para a Família."
  },
  {
    img: "https://viverpampulha.com.br/wp-content/uploads/2021/03/belo-horizonte-minas-gerais-brasil-vista-aerea-da-lagoa-da-pampulha_70216-7568-2.jpg",
    category: categorias.find((f) => f.id === 4),
    title: "Apartamento na Pampulha",
    location: "Belo Horizonte",
    description:
      "Um quarto amplo, com varanda. Possui uma cama de casal e uma cama de solteiro. É um bom lugar para renovar a energia. Roupas de cama, toalhas e uma coberta de casal estão inclusas na reserva."
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/12/9c/32/7e/hotel-solar-do-rosario.jpg",
    category: categorias.find((f) => f.id === 1),
    title: "Hotel Solar do Rosário",
    location: "Ouro Preto",
    description:
      "O Hotel Solar do Rosário está localizado em Ouro Preto – cidade tombada como Patrimônio Cultural da Humanidade pela UNESCO e mundialmente famosa por suas histórias e sua magnífica arquitetura colonial. O casarão, datado do século XIX foi reformado e reestruturado, para alocar os hóspedes com todo o conforto e sofisticação, com a elegância e a tradição da arquitetura colonial. Composto por 41 quartos, as acomodações do Solar são preparadas para oferecer uma grande experiência de hospedagem e a oportunidade de viver a história de Ouro Preto."
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/393580884.jpg?k=c34ef3a49b56ee6c2fa7a0c5c6180cb958a1eadaf345cc802512f114ad9b1893&o=&hp=1",
    category: categorias.find((f) => f.id === 3),
    title: "Uai Hostel",
    location: "Ouro Preto",
    description:
      "O Uai Hostel é interessante para quem gosta de musica, arte, interação e conforto por estar localizado em um lugar privilegiado e por ter uma vista impressionante do conjunto arquitetônico histórico , quem se hospedar aqui poderá fazer o passeio turístico é ou acadêmico todo caminhando pois estamos ao lado dos restaurantes, Igrejas, Museus, Centro de convenções da UFOP, Praça Tiradentes, Cinema, Teatro , Rodoviária , bancos, estação de trem, Mina de Ouro e Bares. Nossa area de convivência possui joguinhos de mesa, vitrolas e discos para escutar Musica."
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/227597002.jpg?k=665328d3edce6ec3158588dec0e4e0a3e691fb32bb3e4cb6a5bf945c2715d530&o=&hp=1",
    category: categorias.find((f) => f.id === 1),
    title: "Ibis Budget São Paulo Paulista",
    location: "São Paulo",
    description:
      "O ibis budget São Paulo situa-se perto dos principais pontos turísticos da capital. A Avenida Paulista, cheia de museus como o MASP, Japan House e SESC, centros comerciais e edifícios comerciais, situam-se a apenas 9 minutos de carro. Outro local que merece mesmo a pena visitar é o bairro da Liberdade com a sua decoração japonesa, lojas e restaurantes (10 minutos de carro). Visite também o Mercado Municipal, a 15 minutos de carro."
  },
  {
    img: "https://www.paraisodasaguashotel.com.br/x/cdn/?https://storage.googleapis.com/production-sitebuilder-v1-0-8/628/202628/5PNbWJ7O/364df026e7a946baa9e0e685aa060749",
    category: categorias.find((f) => f.id === 2),
    title: "Pousada Trijunção",
    location: "Ituberá",
    description:
      "Localizada em uma propriedade no marco que divide os Estados de Minas Gerais, Bahia e Goiás, a Pousada Trijunção tem como missão apoiar a redescoberta do Cerrado, e estimular a sua preservação."
  },
  {
    img: "http://www.eventoaqui.com.br/uploads/suppliers/7029/imagem_1.jpg",
    category: categorias.find((f) => f.id === 1),
    title: "Novotel Salvador Hangar Aeroporto",
    location: "Salvador ",
    description:
      "O Novotel Salvador Hangar Aeroporto Hotel tem como meta proporcionar a você uma visita relaxante e agradável, motivo pelo qual vários hóspedes retornam todos os anos."
  }
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
