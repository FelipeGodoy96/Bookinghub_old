/* eslint-disable no-return-await */
import axios from 'axios';
import agruparAnuncios from '../utils/agruparAnuncios';

const apiLink = process.env.NODE_ENV === 'development' ? 'http://54.219.171.212:8080' : '';

const categoriasData = await axios.get(
  `${apiLink}/categorias`,
);
const cidadesData = await axios.get(
  `${apiLink}/cidade_produtos`,
);
const anunciosData = await axios.get(
  `${apiLink}/categoria_produtos`,
);

const login = async (user) => {
  const { username, password } = user;
  try {
    const response = await axios.post(`${apiLink}/auth`, { username, password });
    return {
      token: response.data,
    };
  } catch (error) {
    console.trace(error);

    return {
      token: null,
    };
  }
};

const cadastro = async (newuser) => {
  try {
    const response = await axios.post(`${apiLink}/usuarios`, newuser);
    return {
      user: response.data,
    };
  } catch (error) {
    console.trace(error);

    return {
      user: null,
    };
  }
};

const anuncios = agruparAnuncios(anunciosData.data, cidadesData.data);

const apiHandle = {
  categorias: categoriasData.data,
  cidades: cidadesData.data,
  anuncios,
  login,
  cadastro,
};

export default apiHandle;
