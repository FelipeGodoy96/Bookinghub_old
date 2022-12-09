import moment from 'moment';

export default function getDateRangeReserva(startDate, endDate, type) {
  const fromDate = moment(startDate);
  const toDate = moment(endDate);
  const diff = toDate.diff(fromDate, type);
  const range = [];
  for (let i = 1; i <= diff; i++) {
    range.push(moment(startDate).add(i, type).format('YYYY-MM-DD'));
  }
  return range;
}
