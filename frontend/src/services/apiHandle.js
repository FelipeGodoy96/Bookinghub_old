/* eslint-disable no-return-await */
import axios from 'axios';

export const apiLink = process.env.NODE_ENV === 'development' ? '13.57.207.104:8080' : '';
const apiLinkLogin = process.env.NODE_ENV === 'development' ? '13.57.207.104:8080' : '';

const login = async (user) => {
  const { username, password } = user;
  try {
    const response = await axios.post(`${apiLinkLogin}/api/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.trace(error);

    return null;
  }
};
const getAnuncios = async () => {
  const anunciosData = await axios.get(`${apiLink}/produtos`);
  return anunciosData.data.map((m) => ({
    idCategoria: m.categoria.id,
    idAnuncio: m.id,
    descricaoAnuncio: m.descricao,
    nomeAnuncio: m.nome,
    fotosAnuncio: m.imagens,
    idCidade: m.cidades.id,
  }));
};
const getCategorias = async () => {
  const categoriasData = await axios.get(`${apiLink}/categorias`);
  return categoriasData.data.map((m) => ({
    idCategoria: m.id,
    fotoCategoria: m.imagem,
    descricaoCategoria: m.descricao,
  }));
};

const getCidades = async () => {
  const cidadesData = await axios.get(`${apiLink}/cidades`);
  return cidadesData.data.map((m) => ({
    idCidade: m.id,
    nomeCidade: m.nome,
    pais: m.pais,
  }));
};

const cadastro = async (newuser) => {
  try {
    const response = await axios.post(
      `${apiLinkLogin}/api/auth/register`,
      newuser,
    );
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
const getReservasUsuario = async () => {
  let userData = null;
  const sessionUserData = sessionStorage.getItem('localUser');
  const locaStorageUserData = localStorage.getItem('localUser');
  if (sessionUserData) {
    userData = JSON.parse(sessionUserData);
  } else {
    userData = JSON.parse(locaStorageUserData);
  }

  try {
    const response = await axios.get(`${apiLinkLogin}/reservas/usuario_id/${userData.id}`);
    return response.data;
  } catch (error) {
    return null;
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

const apiHandle = {
  getCategorias,
  getCidades,
  getAnuncios,
  login,
  cadastro,
  fazerReserva,
  listarReserva,
  getReservasUsuario,
};

export default apiHandle;
