import { CategoryCard } from "../../components/CategoryCard";
import { ProductCard } from "../../components/ProductCard";
import { Searchbar } from "../../components/Searchbar";
import "./styles.css";

const categories = [
  {
    id: 1,
    categoria: "Hotéis",
    quantidade: 304203,
    source:
      "https://img.freepik.com/fotos-gratis/piscina_74190-2109.jpg?w=1380&t=st=1687478809~exp=1687479409~hmac=76d4cea62ba557a64cfa360551ad678d9dc504877867002f704f679914577165",
  },
  {
    id: 2,
    categoria: "Hostels",
    quantidade: 782384,
    source:
      "https://img.freepik.com/fotos-gratis/mochileiro-usando-seu-telefone-em-um-albergue-em-varanasi-india_53876-65346.jpg?w=1380&t=st=1687992252~exp=1687992852~hmac=a1975659496fe60ad897bab7709635346ebda4d5d22d4370bc2ccccab11cd478",
  },
  {
    id: 3,
    categoria: "Apartamentos",
    quantidade: 82304,
    source:
      "https://img.freepik.com/fotos-gratis/apartamento-estudio-acolhedor-com-quarto-e-sala-de-estar_1262-12323.jpg?w=1380&t=st=1687480924~exp=1687481524~hmac=7d5314ad95086ae90d2c2ea5b7844cf3d08b91370740a702c4ff631b6355ecb4",
  },
  {
    id: 4,
    categoria: "Cama e café da manhã",
    quantidade: 200242,
    source:
      "https://img.freepik.com/fotos-gratis/cha-biscoitos-e-um-buque-de-tulipas-frescas-na-cama-copie-o-espaco_169016-10619.jpg?w=1380&t=st=1687481025~exp=1687481625~hmac=e59c90f9a614132526b813d0653be5f3479d2f0ec88e802b59f381b3c047c0b1",
  },
];

const products = [{id: 1, nome: 'Hermitage Hotel', tipo: 'hotel', pontuacao: 8, estrelas: 5, centro: 800, mapslink: " sa", descricao: 'No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires, com 2 piscinas impressionantes, uma no terraço e outra ao ar livre; quartos privados (alguns Lorem Ipsum sit Amet )', source: 'https://img.freepik.com/fotos-gratis/luxo-classico-moderno-quarto-suite-em-hotel_105762-1787.jpg?w=1380&t=st=1687564479~exp=1687565079~hmac=c93b429cfef584600b5205cf4ede95a089a83798015e36e388de68507e074b3e'}]

export const Home = () => {
  return (
    <>
      <Searchbar />
      <section className="category my-8 mx-2 flex flex-col gap-6 p-2">
        <h1 className="category-title font-semibold text-2xl text-slate-500">
          Buscar por tipo de acomodação
        </h1>
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </section>
      <section className="recommendations my-8 mx-2 flex flex-col gap-6 p-2 h-auto">
            <h1 className="recommendation-title font-semibold text-2xl text-white pt-4">Recomendações</h1>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
      </section>
    </>
  );
};
