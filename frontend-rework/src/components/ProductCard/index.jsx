import "./styles.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card flex flex-col sm:flex-row bg-white rounded-b-lg overflow-hidden drop-shadow-md shadow-lg w-full">
      <img src={product.source} className="w-full sm:w-1/3 rounded-b-md" />
      <div className="card-description flex flex-col">
        <div className="title">
          <article>
            <h3 className="text-slate-500">
              {product.tipo.toUpperCase()} <span>{product.estrelas}</span>
            </h3>
            <h1 className="font-bold">{product.nome}</h1>
          </article>
        </div>
        <div className="text"></div>
      </div>
    </div>
  );
};
