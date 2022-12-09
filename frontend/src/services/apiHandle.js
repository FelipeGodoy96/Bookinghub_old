/* eslint-disable no-return-await */
import axios from 'axios';
import agruparAnuncios from '../utils/agruparAnuncios';

const apiLink = process.env.NODE_ENV === 'development' ? 'http://13.57.207.104:8080' : '';
const apiLinkLogin = process.env.NODE_ENV === 'development' ? 'http://13.57.207.104:8080' : '';

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
    const response = await axios.post(`${apiLinkLogin}/api/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    console.trace(error);

    return null;
  }
};

const cadastro = async (newuser) => {
  try {
    const response = await axios.post(`${apiLinkLogin}/api/auth/register`, newuser);
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

const fazerReserva = async (newReserva) => {
  try {
    const response = await axios.post(`${apiLinkLogin}/reservas`, newReserva);
    return {
      reservaData: response.data,
    };
  } catch (error) {
    console.trace(error);

    return {
      reservaData: null,
    };
  }
};

const listarReserva = async (newReserva) => {
  try {
    const response = await axios.get(`${apiLinkLogin}/reservas`, newReserva);
    return {
      reservaData: response.data,
    };
  } catch (error) {
    console.trace(error);

    return {
      reservaData: null,
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
  fazerReserva,
  listarReserva,
};

export default apiHandle;
