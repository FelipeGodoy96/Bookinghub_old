import { format } from 'date-fns'
import { ptBR } from "date-fns/locale";

export default function (date, formatStr) {
    return format(
        date, formatStr, {
        locale: ptBR}
    )
}