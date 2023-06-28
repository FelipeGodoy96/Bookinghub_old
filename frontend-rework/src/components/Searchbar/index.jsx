import "./styles.css";
import { Button } from "../Button";

export const Searchbar = () => {
  return (
    <div className="searchbar flex flex-col justify-center gap-2 text-center px-2 text-white font-bold h-auto">
      <div className="searchbar-text text-3xl lg:text-4xl py-4">
        <p>Buscar ofertas em hotéis, casas e muito mais</p>
      </div>
      <div className="searchbar-search flex flex-col justify-center md:flex-row gap-2 py-4 lg:mx-32 md:mx-6 relative">
        <input
          placeholder="Onde vamos?"
          className="search-location rounded h-10 pl-10 text-sm font-semibold lg:w-1/3"
        />
        <div className="location-icon absolute left-2 top-6">
        <svg className="icon-svg w-6" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64.00 64.00" enable-background="new 0 0 64 64" xml:space="preserve" fill="#545776" stroke="#545776" strokeWidth="0.00064"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#545776" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
        </div>
        <input
          placeholder="Check in - Checkout"
          className="search-date rounded h-10 pl-10 text-sm font-semibold lg:w-1/3"
        />
        <div className="date-icon absolute left-2 top-18">
        <svg className="icon-svg w-6" fill="#545776" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-calendar"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 20H3V19H2V3H3V2H5V0H7V2H15V0H17V2H19V3H20V19H19V20M4 4V6H18V4H4M4 8V18H18V8H4M12 12H16V16H12V12Z"></path></g></svg>
        </div>
        <div className="searchbar-button_responsive w-full lg:w-1/6 md:w-1/4">
          <Button text="Buscar" variant="primary" width="100%" />
        </div>
      </div>
    </div>
  );
};
