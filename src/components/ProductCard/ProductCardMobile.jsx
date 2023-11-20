import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Star } from "./Star";
import "./styles.css";

export const ProductCardMobile = ({product, expandedText, handleSeeMoreText}) => {
    const stars = [];
    for (let i = 0; i < product.estrelas; i++) {
      stars.push(i);
    }
    return (
        <div className="product-card__mobile bg-white rounded-b-lg drop-shadow-md shadow-lg max-h-fit overflow-hidden min-w-0 flex flex-row">
        <div className="c-image flex flex-col sm:flex-row max-w-full h-full">
          <img
            src={product.source}
            className="sm:w-1/2 sm:max-w-1/2 rounded-b-md"
          />
          <div className="c-content flex flex-col pt-4 pb-2 px-4 w-full flex-grow flex-shrink self-stretch">
            <div className="c-content__header">
              <article className="title flex justify-between h-8 text-center">
                <p className="text-md text-slate-400 flex gap-2 self-center">
                  {product.tipo.toUpperCase()}{" "}
                  <span className="flex gap-1">
                    {stars.map((star) => (
                      <Star key={star} />
                    ))}
                  </span>
                </p>
                <span className="c-content__score text-white font-semibold w-7 rounded-xl flex items-center justify-center">
                  {product.pontuacao}
                </span>
              </article>
              <h1 className="font-bold text-2xl flex justify-between items-center">
                {product.nome}{" "}
                <span className="text-sm font-semibold">
                  {product.pontuacao >= 9
                    ? "Excelente"
                    : product.pontuacao >= 8
                    ? "Muito bom"
                    : product.pontuacao >= 5
                    ? "Bom"
                    : product.pontuacao >= 3
                    ? "Regular"
                    : "Ruim"}
                </span>
              </h1>
            </div>
            <div className="c-content__body">
              <article className="body__showmap flex gap-2 my-3">
                <svg
                  className="icon-svg w-4"
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64.00 64.00"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#545776"
                  stroke="#545776"
                  strokeWidth="0.00064"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#545776"
                      d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                    ></path>{" "}
                  </g>
                </svg>
                <span className="">A {product.centro}m do centro -</span>
                {product.mapslink !== null &&
                product.mapslink !== undefined &&
                product.mapslink !== "" ? (
                  <Link className="body__showmap--link" to={product.mapslink}>
                    MOSTRAR NO MAPA
                  </Link>
                ) : (
                  ""
                )}
              </article>
              <span className="body__icons"> adsads</span>
            </div>
            <div
              className="c-content__body--description my-2"
              // style={{display: expandedText ? 'flex' : 'block', flexDirection: expandedText ? 'row' : 'column' }}
            >
              <p className="break-all">
                {expandedText
                  ? product.descricao + " "
                  : product.descricao.slice(0, 150) + "... "}
                <button
                  onClick={handleSeeMoreText}
                  className="body__showmoretext"
                >
                  {expandedText ? "ler menos" : "ler mais"}
                </button>
              </p>
            </div>
            <div className="c-content_button text-center my-2 mt-auto">
              <Button variant="primary" text="Ver mais" width="100%" />
            </div>
          </div>
        </div>
      </div>
    )
}