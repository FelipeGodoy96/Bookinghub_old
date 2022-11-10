import { useParams } from "react-router-dom";
import Context from "./Contexts/Context";
import Footer from "./components/Footer/Footer";
import { useContext, useEffect, useState } from "react";

export default function Categoria() {
  const { state, setState } = useContext(Context);
  const { nomecategoria } = useParams();
  const [produtos, setProdutos] = useState([])

  
  useEffect(() => {
    if (!!state){
      const categoriasList = state?.categoriasProd.filter(f => f.descricao === nomecategoria)
      setProdutos(categoriasList[0].produto)

    } 
  }, []);
  
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    {produtos.map(m =><h1>
      {m.nome}
    </h1>  )}
      <Footer />
    </>
  );
}
