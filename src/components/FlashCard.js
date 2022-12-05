import styled from "styled-components";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_quase from "../assets/icone_quase.png";
import icone_erro from "../assets/icone_erro.png";

export default function FlashCard(props) {
  const { deck, naoLembrei, quase, zap, setNaoLembrei, setQuase, setZap } =
    props;
  const { question, answer } = deck;
  console.log(deck);
  function abrirPergunta() {
    //trocar visibiliti da PerguntaFechada para hidden
    //trocar visibiliti da PerguntaAberta para visible
    alert(`Clicou na pergunta`);
  }
  function mostrarResposta() {
    alert(`Mostar Resposta`);
  }
  function addNaoLembro() {
    alert(` nao lembrou, fazer um setContador +1 nao lembrou`);
  }

  //Fazer o button mudando o value e cor com .map() pra fazer uma lista
  return (
    <>
      <Card>
        <PerguntaFechada onClick={abrirPergunta}>
          <p>Pergunta 1</p>
        </PerguntaFechada>
        <PerguntaAberta>
          <p>{question}</p>
          <img onClick={mostrarResposta} src={seta_virar} alt="" />
        </PerguntaAberta>
        <PerguntaAberta>
          <p>{answer}</p>
          <ContainerButtons>
            <button onClick={addNaoLembro}>Não lembrei</button>
            <button>Quase nāo lembrei</button>
            <button>Zap!</button>
          </ContainerButtons>
        </PerguntaAberta>
      </Card>
    </>
  );
}

const Card = styled.div`
  background-color: #ff922e;
`;
/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/
// .pergunta-fechada {}
const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //visibility: visible; //hidden;
  p {
    font-family: "Recursive", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`;
//.pergunta-aberta {}
const PerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  visibility: visible; //hidden;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    height: 38px;
    width: 85px;
    border-radius: 5px;
    color: white;
    background-color: red;

    font-family: "Recursive", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
/*
//container-botoes > button
const ContainerButtons = styled.div`
  width: 90px;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: 1px solid blue;
  padding: 5px;
`;
*/
