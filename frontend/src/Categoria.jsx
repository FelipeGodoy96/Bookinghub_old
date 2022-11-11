import { useNavigate, useParams } from "react-router-dom";
import Context from "./Contexts/Context";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import ProductCard from "./components/ProductCard/ProductCard";
import axios from "axios";
import "./styles/Categoria.css";

export default function Categoria() {
  const { state, setState } = useContext(Context);
  const { nomecategoria } = useParams();
  const [produtos, setProdutos] = useState([])

  
  // useEffect(() => {
  //   if (!!state){
  //     const categoriasList = state?.categoriasProd.filter(f => f.descricao === nomecategoria)
  //     setProdutos(categoriasList[0].produto)

  //   } 
  // }, []);

  const navigate = useNavigate();
  const [anuncio, setAnuncio] = useState([{
    idCategoria: 1,
    id: 1,
    categoria: "",
    descricaoProduto: "",
    nome: "",
    descricao: "",
    foto: "",
    cidade: "Cidade Teste"
  }]);

  async function buscarTodosAnuncios() {
    try {
      const anuncioRaw = await axios.get(
        "http://54.183.252.14:8080/categoria_produtos"
      );
      const anunciosAgrupados = agruparAnuncios(anuncioRaw.data);
      const anunciosFiltrados = anunciosAgrupados.filter(
        (item) => item.categoria === nomecategoria
      );
      if (anunciosFiltrados.length < 1) {
        throw "Anúncio nao encontrado";
      }
      setAnuncio(anunciosFiltrados);
    } catch (err) {
      console.log(err)
      navigate("/404-NaoEncontrado");
    }
  }
  function agruparAnuncios(anunciosRaw) {
    const ctx = [];
    anunciosRaw.forEach((category) => {
      category.produto.forEach((product) => {
        ctx.push({
          idCategoria: category.id,
          id: product.id,
          categoria: category.descricao,
          descricaoProduto: product.descricao,
          nome: product.nome,
          descricao: product.descricao,
          foto: category.imagem,
          cidade: "Cidade Teste"
        });
      });
    });
    return ctx;
  }

  useEffect(() => {
    buscarTodosAnuncios();
  }, []);
  // checar se existe um anuncio de id 99
  // navigate pra pagina 404 -> nao encontrado

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  });

  
 

  return (
    <>


    <Container
        fluid
        className="categoryPage d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center"> {nomecategoria}</h1>
        <div className="d-flex flex-column flex-lg-row gap-3 flex-wrap justify-content-center align-items-center">
          {anuncio.map((m, index) => (
            <ProductCard data={m} key={index} />
            ))}
        </div>
      </Container>
      <Footer />

    </>
  );
}
