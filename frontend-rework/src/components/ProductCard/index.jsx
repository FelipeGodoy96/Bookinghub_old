import "./styles.css";


export const ProductCard = ({ product }) => {
    const stars = []
    for (let i = 0; i < product.estrelas; i++) {
        stars.push(<svg className="w-3" fill="#1dbeb4" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#1dbeb4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1915.918 737.475c-10.955-33.543-42.014-56.131-77.364-56.131h-612.029l-189.063-582.1v-.112C1026.394 65.588 995.335 43 959.984 43c-35.237 0-66.41 22.588-77.365 56.245L693.443 681.344H81.415c-35.35 0-66.41 22.588-77.365 56.131-10.955 33.544.79 70.137 29.478 91.03l495.247 359.831-189.177 582.212c-10.955 33.657 1.13 70.25 29.817 90.918 14.23 10.278 30.946 15.487 47.66 15.487 16.716 0 33.432-5.21 47.775-15.6l495.134-359.718 495.021 359.718c28.574 20.781 67.087 20.781 95.662.113 28.687-20.668 40.658-57.261 29.703-91.03l-189.176-582.1 495.36-359.83c28.574-20.894 40.433-57.487 29.364-91.03" fill-rule="evenodd"></path> </g></svg>)
    }
  return (
    <div className="product-card flex flex-col md:flex-row bg-white rounded-b-lg overflow-hidden drop-shadow-md shadow-lg w-full">
      <img src={product.source} className="w-full sm:w-1/3 rounded-b-md" />
      <div className="card-description flex flex-col pt-4 pb-2 px-4">
        <div className="title">
          <article className="flex justify-between h-8 text-center">
            <p className="text-md text-slate-400 flex gap-2 self-center">
              {product.tipo.toUpperCase()} <span className="flex gap-1">{stars.map((star) => (star))}</span>
            </p>
            <span className="score text-white font-semibold w-7 rounded flex items-center justify-center">{product.pontuacao}</span>
          </article>
          <h1 className="font-bold text-2xl flex justify-between items-center">{product.nome} <span className="text-sm font-semibold">{
           (product.pontuacao >= 8 ? 'Muito bom' : product.pontuacao >= 5 ? 'Bom' : product.pontuacao >= 3 ? 'Regular' : 'Ruim')
          }</span></h1>
        </div>
        <div className="text"></div>
      </div>
    </div>
  );
};
