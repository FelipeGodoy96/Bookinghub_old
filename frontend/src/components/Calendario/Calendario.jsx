import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { ptBR } from 'date-fns/locale';
import { Button, Card, Container } from 'react-bootstrap';
import { useState } from 'react';

export default function Calendario() {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  return (
    <Container className="d-flex  flex-lg-row flex-column justify-content-center align-items-center">
      <Card>
        <DateRange
          locale={ptBR}
          editableDateInputs
          moveRangeOnFirstSelection={false}
          ranges={[date]}
          onChange={(ranges) => setDate(ranges.selection)}
        />
      </Card>
      <Card className="confirmReserva">
        <h6 className="p-3 ">
          Adicione as datas da sua estadia para obter a tarifa de hospedagem
        </h6>
        <Button onClick={() => console.log(date)}>Reservar agora</Button>
      </Card>
    </Container>
  );
}
