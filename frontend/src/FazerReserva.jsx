/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
  useContext, useEffect, useState,
} from 'react';
import Form from 'react-bootstrap/Form';
import { Card, Container } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { pt } from 'date-fns/locale';
import ProductCardReserva from './components/ProductCard/ProductCardReserva';
import Footer from './components/Footer/Footer';
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'react-date-range/dist/styles.css'; // main style file
import LoginContext from './Contexts/LoginContext';
import useWindowDimensions from './hooks/useWindowDimentions';
import getDateRangeReserva from './utils/getDateRangeReserva';
import apiHandle from './services/apiHandle';

export default function Reserva() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loginState } = useContext(LoginContext);
  const { viewPort } = useWindowDimensions();
  const [disabledDates, setDisabledDates] = useState([]);

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const dadosDoAnuncioReserva = useLocation();

  const fazerReservaData = {
    h_inic_reser: '12:00:00',
    d_inic_reser: date.startDate,
    d_fin_reser: date.endDate,
    produtos: {
      id,
    },
    usuario: {
      id: loginState.user.id,
    },
  };

  useEffect(() => {
    const todasReservas = async () => {
      const response = await apiHandle.listarReserva();
      if (response) {
        const reservaDatas = response.reservaData
          .filter((f) => f.produtos.id === parseInt(id, 10));
        const getRange = reservaDatas
          .map((m) => getDateRangeReserva(m.d_inic_reser, m.d_fin_reser, 'days'));
        const flatdates = getRange.flat();

        setDisabledDates(flatdates);
      }
    };
    todasReservas();
    if (!dadosDoAnuncioReserva || !dadosDoAnuncioReserva.state) {
      if (id) {
        navigate(`/anuncio/${id}`);
      } else {
        navigate('/*');
      }
    }
  }, []);

  if (dadosDoAnuncioReserva && dadosDoAnuncioReserva.state) {
    return (
      <>
        <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-content-center">

          <div className="formContainer d-flex flex-column">
            <Container className=" d-flex align-items-center justify-content-center flex-column align-content-start flex-wrap">
              <Card className="cardForm w-100">
                <Card.Title>
                  <h1>Títular da Reserva</h1>
                </Card.Title>

                <Form>
                  <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between">
                    <Form.Group className="w-100">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" placeholder="Nome" required />
                    </Form.Group>

                    <Form.Group className="w-100">
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control type="text" placeholder="Sobrenome" required />
                    </Form.Group>
                  </div>

                  <div className="d-flex flex-column flex-lg-row flex-md-row justify-content-between mt-3">
                    <Form.Group className="w-100">
                      <Form.Label>Confirmar endereço de e-mail</Form.Label>
                      <Form.Control type="email" placeholder="Email" required />
                      <Form.FloatingLabel className="emailObs mt-1  ">
                        *A confirmação será enviada para esse e-mail
                      </Form.FloatingLabel>
                    </Form.Group>

                    <Form.Group className="w-100">
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control type="city" placeholder="Cidade" required />
                    </Form.Group>
                  </div>
                  <div className="checkBox">
                    <label className="mb-3 ">Para quem é esta reserva?</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label className="form-check-label">
                        Eu sou o hóspede principal
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label className="form-check-label">
                        Reservando para outra pessoa
                      </label>
                    </div>
                  </div>

                </Form>
              </Card>
            </Container>

            <Container className="d-flex align-items-center justify-content-center flex-column align-content-start flex-wrap mt-3">
              <Card className="cardForm w-100">
                <Card.Title>
                  <h1 className="text-center">Selecione a data da reserva</h1>
                </Card.Title>
                <Container className="d-flex  flex-lg-row flex-column justify-content-center align-items-center">
                  <Card>
                    <DateRange
                      disabledDates={disabledDates.map((todasDatas) => new Date(todasDatas))}
                      minDate={new Date()}
                      locale={pt}
                      editableDateInputs
                      moveRangeOnFirstSelection={false}
                      ranges={[date]}
                      onChange={(ranges) => setDate(ranges.selection)}
                      showSelectionPreview
                      months={2}
                      direction={`${viewPort === 'lg' ? 'horizontal' : 'vertical'}`}
                    />
                  </Card>
                </Container>

                <Form />
              </Card>
            </Container>
          </div>

          <ProductCardReserva
            dadosDoAnuncioReserva={dadosDoAnuncioReserva.state}
            dadosDaReserva={fazerReservaData}
          />

        </div>
        <Footer />
      </>
    );
  }
  return null;
}
