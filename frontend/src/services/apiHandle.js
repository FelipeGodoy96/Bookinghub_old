import axios from 'axios';
import agruparAnuncios from '../utils/agruparAnuncios';

const apiLink = process.env.NODE_ENV === 'development' ? 'http://54.183.253.250:8080' : '';

const categoriasData = await axios.get(
  `${apiLink}/categorias`,
);
const cidadesData = await axios.get(
  `${apiLink}/cidade_produtos`,
);
const anunciosData = await axios.get(
  `${apiLink}/categoria_produtos`,
);
const anuncios = agruparAnuncios(anunciosData.data, cidadesData.data);

const apiHandle = {
  categorias: categoriasData.data,
  cidades: cidadesData.data,
  anuncios,
};

export default apiHandle;
