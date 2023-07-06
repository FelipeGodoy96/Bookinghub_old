import "./styles.css";
import { Button } from "../Button";
import { useState } from "react";
import { useEffect } from "react";

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // This will be used when the implementation on backend is finished
  // useEffect(() => {
  //   fetch("/api/frequentsearchterms")
  //     .then((response) => response.json())
  //     .then((data) => setSuggestions(data));
  // }, []);

  const frequentSearchTerms = [
    {
      destino: "San Carlos de Bariloche",
      pais: "Argentina",
    },
    {
      destino: "Buenos Aires",
      pais: "Argentina",
    },
    {
      destino: "Mendoza",
      pais: "Argentina",
    },
    {
      destino: "Córdoba",
      pais: "Argentina",
    }
  ];


  // Used to test 
  useEffect(() => {
    setSuggestions(frequentSearchTerms);
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Filtering the frequent search terms based on the user's input
    const filteredSuggestions = frequentSearchTerms.filter((term) => term.destino.toLowerCase().includes(value.toLowerCase()))
    setSuggestions(filteredSuggestions)
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setShowDropdown(false);
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option.target.textContent);
    setShowDropdown(false);
  };

  return (
    <div className="searchbar flex flex-col justify-center gap-2 text-center px-2 text-white font-bold h-auto">
      <div className="searchbar-text text-3xl lg:text-4xl py-4">
        <p>Buscar ofertas em hotéis, casas e muito mais</p>
      </div>
      <div className="searchbar-search flex flex-col justify-center md:flex-row gap-2 py-4 lg:mx-32 md:mx-6 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          // onBlur={handleInputBlur}
          placeholder="Onde vamos?"
          className="search-location rounded h-10 pl-10 text-sm font-semibold lg:w-1/3 text-slate-500"
        />
        {showDropdown && (
          <div className="dropdown relative overflow-hidden z-10 bg-white rounded-b-lg shadow-lg w-full">
            <ul className="mx-2 text-center">
              {suggestions.map((option, index) => (
                <>
                  <li
                    className="text-black flex justify-start gap-4 items-center my-4"
                    key={index}
                    onClick={handleOptionClick}
                  >
                    <svg
                      key={index}
                      className="icon-svg w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.37584 4.85915C8.65549 3.61971 10.1969 3 12 3C13.8031 3 15.3372 3.61267 16.6023 4.83803C17.8675 6.06339 18.5 7.54929 18.5 9.29577C18.5 10.169 18.2746 11.169 17.8238 12.2958C17.373 13.4225 16.8277 14.4789 16.1879 15.4648C15.5481 16.4507 14.9156 17.3732 14.2903 18.2324C13.665 19.0916 13.1342 19.7746 12.698 20.2817L12 21C11.8255 20.8028 11.5928 20.5423 11.302 20.2183C11.0112 19.8944 10.4877 19.2465 9.73154 18.2746C8.97539 17.3028 8.31376 16.3592 7.74664 15.4437C7.17953 14.5282 6.66331 13.493 6.19799 12.338C5.73266 11.1831 5.5 10.169 5.5 9.29577C5.5 7.54929 6.12527 6.07043 7.37584 4.85915Z"
                          stroke="#545776"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                        <path
                          d="M13 9.5C13 10.0523 12.5523 10.5 12 10.5C11.4477 10.5 11 10.0523 11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5Z"
                          stroke="#545776"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <p className="text-slate-700">
                      {option.destino}
                    </p>
                    
                  </li>
                  <hr
                    className={
                      index + 1 == suggestions.length
                        ? "hidden"
                        : "" + "mx-1 bg-cyan-500 h-0.5 "
                    }
                  />
                </>
              ))}
            </ul>
          </div>
        )}

        <div className="location-icon absolute left-2 top-6">
          <svg
            className="icon-svg w-6"
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
        </div>
        <input
          placeholder="Check in - Checkout"
          className="search-date rounded h-10 pl-10 text-sm font-semibold lg:w-1/3"
        />
        <div className="date-icon absolute left-2 top-18">
          <svg
            className="icon-svg w-6"
            fill="#545776"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            id="memory-calendar"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M19 20H3V19H2V3H3V2H5V0H7V2H15V0H17V2H19V3H20V19H19V20M4 4V6H18V4H4M4 8V18H18V8H4M12 12H16V16H12V12Z"></path>
            </g>
          </svg>
        </div>
        <div className="searchbar-button_responsive w-full lg:w-1/6 md:w-1/4">
          <Button text="Buscar" variant="primary" width="100%" />
        </div>
      </div>
    </div>
  );
};
