type hotel = {
  idCategoria: number
  id: number,
  categoria: string,
  nome: string,
  foto: string,
  cidade: string | null
}

type anunciosRaw = {
    id: number,
    qualificacao: string,
    descricao: string,
    imagem: string,
    produto: 
      {
        id: number,
        nome: string,
        descricao: string,
        caracteristica: []
      }[]
  }

