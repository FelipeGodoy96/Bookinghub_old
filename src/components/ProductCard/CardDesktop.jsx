import swimmingManIcon from "../../assets/img/layout/UI Kits/Cards/swimmingman.svg";
import starIcon from "../../assets/img/layout/UI Kits/Cards/icon Star.svg";
import innerSpace from "../../assets/img/layout/UI Kits/Cards/innerspace.jpg";
import localizadorIcon from "../../assets/img/layout/UI Kits/Cards/localizador.svg";

export const CardDesktop = () => {
  return (
    <div className="relative md:w-[635px] md:h-[283px] cursor-pointer text-left text-sm text-slate-600 font-botton-2">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[1px] border-solid border-gainsboro" />
        <b className="absolute top-[14.13%] left-[51.65%] text-5xl">
          Hermitage Hotel
        </b>
        <b className="absolute h-[10.25%] w-[29.76%] top-[7.42%] left-[51.65%] inline-block font-quicksand opacity-[0.5]">
          HOTEL
        </b>
        <div className="absolute h-[7.77%] w-[47.24%] top-[31.45%] left-[54.17%] font-medium inline-block">
          <span>A 940 m do centro -</span>
          <span className="text-b-db-color-principal"> MOSTRAR NO MAPA</span>
        </div>
        <img
          className="absolute h-[4.95%] w-[2.3%] top-[7.77%] right-[38.49%] bottom-[87.28%] left-[59.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={starIcon}
        />
        <img
          className="absolute h-[4.95%] w-[2.3%] top-[7.77%] right-[36.13%] bottom-[87.28%] left-[61.57%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={starIcon}
        />
        <img
          className="absolute h-[4.95%] w-[2.3%] top-[7.77%] right-[33.76%] bottom-[87.28%] left-[63.94%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={starIcon}
        />
        <img
          className="absolute h-[4.95%] w-[2.3%] top-[7.77%] right-[29.04%] bottom-[87.28%] left-[68.66%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={starIcon}
        />
        <img
          className="absolute h-[4.95%] w-[2.3%] top-[7.77%] right-[31.4%] bottom-[87.28%] left-[66.3%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={starIcon}
        />
        <img
          className="absolute h-[9.89%] w-[4.41%] top-[39.22%] right-[40%] bottom-[50.88%] left-[55.59%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={swimmingManIcon}
        />
        <img
          className="absolute h-[6.36%] w-[2.83%] top-[40.28%] right-[45.51%] bottom-[53.36%] left-[51.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/atomo-icon-wifi-1.svg"
        />
        <img
          className="absolute h-[4.95%] w-[1.57%] top-[31.45%] right-[46.77%] bottom-[63.6%] left-[51.65%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={localizadorIcon}
        />
      </div>
      <img
        className="absolute h-full w-[48.98%] top-[0%] right-[51.02%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={innerSpace}
      />
      <div className="absolute h-[14.13%] w-[46.61%] top-[81.98%] right-[2.2%] bottom-[3.89%] left-[51.18%] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.12)] text-center text-base text-blanco">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-b-db-color-principal shadow-[0px_2px_4px_rgba(0,_0,_0,_0.12)]" />
          <div className="absolute h-[57.5%] w-[65.24%] top-[30%] right-[17.47%] bottom-[12.5%] left-[17.3%]">
            <b className="absolute h-full w-full top-[0%] left-[0%] inline-block">
              Ver mais
            </b>
          </div>
        </div>
      </div>
      <div className="absolute h-[15.9%] w-[15.8%] top-[7.07%] right-[2.31%] bottom-[77.03%] left-[81.89%] text-center text-xl text-b-db-color-4">
        <div className="absolute h-3/5 w-[33.9%] top-[0%] right-[1.3%] bottom-[40%] left-[64.81%] rounded-3xs bg-darkslategray box-border border-[1px] border-solid border-darkslategray" />
        <b className="absolute h-[52%] w-[37.19%] top-[4.44%] left-[62.81%] inline-block">
          8
        </b>
        <b className="absolute h-[35.56%] w-[98.7%] top-[64.44%] left-[0%] text-sm inline-block text-darkslategray text-right">
          Muito bom
        </b>
      </div>
      <div className="absolute h-[18.37%] w-[46.46%] top-[60.42%] left-[51.34%] font-medium inline-block">
        <span>{`No coração de San Telmo, desfrute de uma pousada inspirada nas paixões de Buenos Aires. `}</span>
        <span className="text-b-db-color-principal">mais...</span>
      </div>
    </div>
  );
};
