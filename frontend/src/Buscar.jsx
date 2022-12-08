/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer/Footer';
import SearchNotFound from './components/LottieAnimations/SearchNotFound';

import Searchbar from './components/Searchbar/Searchbar';
import SearchCard from './components/Searchbar/SearchCard';
import Context from './Contexts/Context';

export default function Buscar() {
  const { state } = useContext(Context);
  const { anuncios, filtroParametros } = state;

  const [resultadoBuscar, setResultadoBuscar] = useState([]);

  const filtroAnuncios = (categoriaSelecionada, cidadeSelecionada, todosAnuncios) => {
    if (categoriaSelecionada === null) return;
    if (cidadeSelecionada === null) return;
    if (todosAnuncios === null) return;

    const anunciosFiltrados = todosAnuncios.filter((f) => (
      categoriaSelecionada !== '' ? (f.categoria.toLowerCase().replaceAll(' ', '').includes(categoriaSelecionada.toLowerCase().replaceAll(' ', ''))) : true)
      && (cidadeSelecionada !== '' ? (f.cidade.toLowerCase().replaceAll(' ', '').includes(cidadeSelecionada.toLowerCase().replaceAll(' ', ''))) : true));

    return anunciosFiltrados;
  };

  useEffect(() => {
    const { categoriaFilter, cidadeFilter } = filtroParametros;
    const buscaEfetuada = filtroAnuncios(categoriaFilter, cidadeFilter, anuncios);
    setResultadoBuscar(buscaEfetuada);
  }, [filtroParametros]);

  return (
    <>
      <div className="d-flex flex-column">
        <section className="d-flex flex-column align-items-center text-center SearchBar ">
          <h1>Buscar ofertas em hotéis, casas e muito mais</h1>
          <Searchbar />
        </section>

        <Container className="d-flex flex-column mt-5 mb-5 vh-100 ">

          <SearchNotFound />

          {resultadoBuscar?.map((m, index) => (
            <SearchCard data={m} key={index} />
          ))}

        </Container>
      </div>

      <Footer />
    </>

  );
}
