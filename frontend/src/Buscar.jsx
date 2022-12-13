/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useParams } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import SearchNotFound from './components/LottieAnimations/SearchNotFound';
import Searchbar from './components/Searchbar/Searchbar';
import SearchCard from './components/Searchbar/SearchCard';
import Context from './Contexts/Context';

export default function Buscar() {
  const { parametro } = useParams();
  const { state, filters } = useContext(Context);
  const { anuncios, filtroParametros } = state;

  const [resultadoBuscar, setResultadoBuscar] = useState([]);

  const condicaoFiltro = (cidade, categoria, anunciosTodos) => {
    const dataSearch = anunciosTodos.filter((f) => (categoria !== '' ? filters.getCategoriaByID(f.idCategoria).descricaoCategoria.toLowerCase().replaceAll(' ', '').includes(categoria.toLowerCase().replaceAll(' ', '')) : true)
    && (categoria !== cidade ? (cidade !== '' ? filters.getCidadeByID(f.idCidade).nomeCidade.toLowerCase().replaceAll(' ', '').includes(cidade.toLowerCase().replaceAll(' ', '')) : true) : true));
    return dataSearch;
  };

  const filtroAnuncios = (
    categoriaSelecionada,
    cidadeSelecionada,
    todosAnuncios,
    buscaparametro,
  ) => {
    let anunciosFiltrados = todosAnuncios;
    if (buscaparametro === 'todos') return anunciosFiltrados;

    if (categoriaSelecionada === null) return;
    if (cidadeSelecionada === null) return;
    if (todosAnuncios === null) return;
    if (buscaparametro === 'filtro') {
      anunciosFiltrados = condicaoFiltro(cidadeSelecionada, categoriaSelecionada, todosAnuncios);
    } else {
      anunciosFiltrados = condicaoFiltro(buscaparametro, buscaparametro, todosAnuncios);
    }
    return anunciosFiltrados;
  };

  // useEffect(() => {
  //   if (parametro) {
  //     const buscaEfetuada = filtroAnuncios('', '', anuncios, parametro);
  //     setResultadoBuscar(buscaEfetuada);
  //   }
  // }, []);

  useEffect(() => {
    const { categoriaFilter, cidadeFilter } = filtroParametros;
    const buscaEfetuada = filtroAnuncios(categoriaFilter, cidadeFilter, anuncios, parametro);
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
          {resultadoBuscar?.length === 0 ? <SearchNotFound /> : resultadoBuscar?.map((m, index) => (
            <SearchCard data={m} key={index} />
          ))}

        </Container>
      </div>

      <Footer />
    </>

  );
}
