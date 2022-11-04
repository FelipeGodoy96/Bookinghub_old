import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Footer from "./components/Footer/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles/Anuncio.css";
export default function Anuncio() {
  const images = [
    {
      original:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ];
  return (
    <>
      <section className="subHeader">
        <Container className="d-flex flex-row justify-content-between">
          <div className="informacoesAnunciante">
            <p>categoria</p>
            <h3 className="nomeAnunciante">Nome</h3>
          </div>
          <Link>
            <div className="iconeSubHeader bi bi-arrow-return-left mb-1"></div>
          </Link>
        </Container>
      </section>

      <section className="mapSubHeader">
        <Container className="d-flex flex-row justify-content-between">
          <div className="bi bi-geo-alt p-1">
            Bairro
            <br />
            Ouro Preto
            <Link className="i bi-pin-map" to="/">
              Ver no mapa
            </Link>
          </div>

          <div className=" d-flex flex-column align-items-center">
            <div className="notaParceiro">8.0</div>
            <div className="classificacaoParceiro">Muito Bom</div>
          </div>
        </Container>
      </section>

      <section className="anuncioInfo d-flex flex-column">
        <Container className="d-flex flex-row justify-content-end socialShare">
          <div className="c-share">
            <input className="c-share__input" type="checkbox" id="checkbox" />
            <label className="c-share__toggler" htmlFor="checkbox">
              <span className="c-share__icon"></span>
            </label>

            <ul className="c-share_options shareOptions" data-title="Compartilhar">
              <li className="bi bi-facebook">Facebook</li>
              <li className="bi bi-twitter">Twitter</li>
              <li className="bi bi-whatsapp">WhatsApp</li>
              <li className="bi bi-envelope">Email</li>
            </ul>
          </div>
        </Container>
        <div className="galeriaDeImagens mt-3">
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={false}
            items={images}
            showIndex={true}
          />
        </div>

        <Container className="descripition  d-flex flex-column justify-content-end">
          <h3>Fique no coração de Buenos Aires</h3>
          <p>
            Está localizado a poucas quadras da Avenida Alvear, da Avenida
            Quintana, do Parque San Martín e do bairro da Recoleta. Nos
            arredores também existem vários locais de interesse, como a Rua
            Florida, o Centro Comercial Galerías Pacífico, a zona de Puerto
            Madero, a Plaza de Mayo e o Palácio Municipal. Nossos clientes
            afirmam que esta parte de Buenos Aires é a preferida, segundo
            avaliações independentes. O Hotel é um sofisticado hotel de 4
            estrelas que goza de uma localização tranquila, a poucos passos de
            prestigiadas galerias de arte, teatros, museus e áreas comerciais.
            Há também WiFi gratuito. A propriedade serve um café da manhã
            variado das 07:00 h às 10:30 h.
          </p>
        </Container>

        <Container className="descripition d-flex flex-column justify-content-end">
          <h3>O que esse lugar oferece?</h3>
          <p>aa</p>
        </Container>

        <Container className="descripition d-flex flex-column">
          <h3>O que você precisa saber ?</h3>
          <div className="row">
            <div className="col-lg col-md order-1">
              <h4>Regras da casa</h4>
              <p>Check-out:12:00</p>
              <p>Proibido Fumar</p>
              <p>Proibido Festas</p>
            </div>
            <div className="col-lg col-md order-2">
              <h4>Saúde e Segurança</h4>
              <p>Check-out:12:00</p>
              <p>Proibido Fumar</p>
              <p>Proibido Festas</p>
            </div>
            <div className="col-lg order-3">
              <h4>Politicas de Cancelamento</h4>
              <p>Check-out:12:00</p>
              <p>Proibido Fumar</p>
              <p>Proibido Festas</p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
