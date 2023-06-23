import { CategoryCard } from "../../components/CategoryCard";
import { Searchbar } from "../../components/Searchbar";
import "./styles.css";

const products = [
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
      "https://img.freepik.com/fotos-gratis/quarto-do-hotel-com-cama-de-casal-mesa-e-tv_1262-3034.jpg?w=1380&t=st=1687480751~exp=1687481351~hmac=741105c9f487d9a3e85dd47e024fdde5e6741870a1c734531014a4a709f30513",
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

export const Home = () => {
  return (
    <>
      <Searchbar />
      <section className="category my-8 mx-2 flex flex-col gap-6">
        <h1 className="title font-semibold text-2xl text-slate-500">
          Buscar por tipo de acomodação
        </h1>
        {products.map((product) => (
          <CategoryCard product={product} key={product.id} />
        ))}
      </section>
      <section className="recommendations my-8 mx-2 flex flex-col gap-6">
            <h1 className="title font-semibold text-2xl text-white bg-slate-900">Recomendações</h1>
      </section>
    </>
  );
};
