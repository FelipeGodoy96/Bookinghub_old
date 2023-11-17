import { CategoryCard } from "../../components/CategoryCard";
import { ProductCard } from "../../components/ProductCard";
import { Searchbar } from "../../components/Searchbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";

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
    nome: "Hermitage Hotel",
    tipo: "hotel",
    pontuacao: 3,
    estrelas: 4,
    centro: 900,
    mapslink: " saasda",
    descricao:
      "No coraçãoraço e ouAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)",
    source:
      "https://img.freepik.com/fotos-gratis/luxo-classico-moderno-quarto-suite-em-hotel_105762-1787.jpg?w=1380&t=st=1687564479~exp=1687565079~hmac=c93b429cfef584600b5205cf4ede95a089a83798015e36e388de68507e074b3e",
  },
];

export const Home = () => {
  return (
    <>
      <Searchbar />
      <section className="category my-8 mx-2 flex flex-col gap-6 py-2 md:px-12">
        <h1 className="category-title font-semibold text-2xl text-slate-500">
          Buscar por tipo de acomodação
        </h1>
        <Swiper
          className="w-full h-full pt-2 bg-transparent pb-6"
          spaceBetween={25}
          slidesPerView={4}
          mousewheel-force-to-axis="true"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))} */}
      </section>
      <section className="recommendations my-8 mx-2 flex flex-col gap-6 py-2 md:px-12">
        <h1 className="recommendation-title font-semibold text-2xl text-white pt-4">
          Recomendações
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
};
