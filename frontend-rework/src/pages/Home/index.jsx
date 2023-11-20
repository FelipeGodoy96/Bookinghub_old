import { CategoryCard } from "../../components/CategoryCard";
import { ProductCard } from "../../components/ProductCard";
import { Searchbar } from "../../components/Searchbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./styles.css";
import { useWindowSize } from "../../hooks/custom/useWindowSize";
import { useEffect, useRef } from "react";

const categories = [
  {
    id: 1,
    categoria: "Hotéis",
    quantidade: 3003,
    source: "./assets/img/hotels.jpg",
  },
  {
    id: 2,
    categoria: "Hostels",
    quantidade: 7884,
    source: "./assets/img/hostels.jpg",
  },
  {
    id: 3,
    categoria: "Apartamentos",
    quantidade: 804,
    source: "./assets/img/apartments.jpg",
  },
  {
    id: 4,
    categoria: "Cama e café da manhã",
    quantidade: 2002,
    source: "./assets/img/bedbreakfast.jpg",
  },
  {
    id: 5,
    categoria: "Resorts",
    quantidade: 283,
    source: "./assets/img/resorts.jpg"
  },
  {
    id: 6,
    categoria: "Cabanas",
    quantidade: 857,
    source: "./assets/img/cabanas.jpg"
  }
];

const products = [
  {
    id: 1,
    nome: "Hermitage Hotel",
    tipo: "hotel",
    pontuacao: 8,
    estrelas: 5,
    centro: 800,
    mapslink: " sa",
    descricao:
      "No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires, com 2 piscinas impressionantes, uma no terraço e outra ao ar livre; quartos privados (alguns Lorem Ipsum sit Amet )",
    source:
      "https://img.freepik.com/fotos-gratis/luxo-classico-moderno-quarto-suite-em-hotel_105762-1787.jpg?w=1380&t=st=1687564479~exp=1687565079~hmac=c93b429cfef584600b5205cf4ede95a089a83798015e36e388de68507e074b3e",
  },
  {
    id: 2,
    nome: "Lorem Ipsum Hotel",
    tipo: "sit amet",
    pontuacao: 3,
    estrelas: 5,
    centro: 900,
    mapslink: " saasda",
    descricao:
      "No coraçãoraço e ou wtf caralho de Buenos Aires, com 2 piscinas impressionantes, uma no terraço e ou impressionantes, uma no  impressionantes, uma no  impressionantes, uma no  impressionantes, uma no  impressionantes, uma no  impressionantes, uma no  impressionantes, uma no  impressionantes, uma no  impressionantes, uma no )",
    source:
      "https://img.freepik.com/fotos-gratis/luxo-classico-moderno-quarto-suite-em-hotel_105762-1787.jpg?w=1380&t=st=1687564479~exp=1687565079~hmac=c93b429cfef584600b5205cf4ede95a089a83798015e36e388de68507e074b3e",
  },
];

register()

export const Home = () => {
  const swiperElRef = useRef(null)
  const { windowSize } = useWindowSize()

  useEffect(() => {
    swiperElRef.current.addEventListener('swiperprogress', (e) => {const [swiper, progress] = e.detail})
    swiperElRef.current.addEventListener('swiperslidechange', (e) => {console.log('slide changed')})
}, [])
  return (
    <>
      <Searchbar />
      <section className="category mt-2 md:my-4 lg:my-8 px-2 flex flex-col gap-6 py-2 md:px-8 lg:px-12">
        <h1 className="category-title font-semibold text-2xl text-slate-500">
          Buscar por tipo de acomodação
        </h1>
        <Swiper
          ref={swiperElRef}
          className="w-full h-full pt-2 bg-transparent lg:pb-6"
          spaceBetween={25}
          slidesPerView={windowSize == 'sm' ? 1 : windowSize == 'md' ? 2 : 4}
          mousewheel-force-to-axis="true"
          navigation={true}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="recommendations mt-2 md:my-4 lg:my-8 px-2 flex flex-col gap-6 py-2 md:px-8 lg:px-12">
        <h1 className="recommendation-title font-semibold text-2xl text-white pt-4">
          Recomendações
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full min-h-0 min-w-0 items-stretch">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};
