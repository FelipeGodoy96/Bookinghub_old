import { useParams } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useState,useEffect } from "react";

export default function Cidade() {
  const { nomecidade }= useParams();

  const [cidade, setCidade] = useState({

  })


  useEffect(() => {
    const FetchResp = async () => {
      try{
        const api = await fetch('http://54.183.252.14:8080/cidade_produtos')
        const data = await api.json();
       // console.log(data);
        const teste = data.find(cidade => cidade.nome === 'Ouro Preto')


        
        setCidade(teste)
        console.log(teste)
        //Repos(data);
        //repos(data);
      } catch (error) {
        console.log(error);
      }
    }
    FetchResp();
  }, []);

  //cidades.map(cidade => {
    //cidade.produto.map(produto => <p>{produto.nome}</p>)
  //})
 
  return(<>
  <br /><br /><br />
  {
    cidade?.produto?.map((produto) => <p>{produto.nome}</p>)
  }
  <Footer/>
  </>)};