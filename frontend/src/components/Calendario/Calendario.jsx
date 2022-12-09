/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { ptBR } from 'date-fns/locale';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getDateRangeReserva from '../../utils/getDateRangeReserva';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import apiHandle from '../../services/apiHandle';

export default function Calendario({ ...props }) {
  const { id } = useParams();
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const { width, height, viewPort } = useWindowDimensions();
  const [disabledDates, setDisabledDates] = useState([]);
  useEffect(() => {
    const todasReservas = async () => {
      const response = await apiHandle.listarReserva();
      if (response) {
        const reservaDatas = response.reservaData
          .filter((f) => f.produtos.id === parseInt(id));
        const getRange = reservaDatas
          .map((m) => getDateRangeReserva(m.d_inic_reser, m.d_fin_reser, 'days'));
        const flatdates = getRange.flat();

        setDisabledDates(flatdates);
      }
    };
    todasReservas();
  }, []);

  return (
    <Container className="d-flex  flex-lg-row flex-column justify-content-center align-items-center">
      <Card>
        <DateRange
          disabledDates={disabledDates.map((date) => new Date(date))}
          minDate={new Date()}
          locale={ptBR}
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
  );
}
