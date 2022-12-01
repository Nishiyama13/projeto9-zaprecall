import styled from "styled-components";
import seta_virar from "../assets/seta_virar.png";
import icone_certo from "../assets/icone_certo.png";
import icone_quase from "../assets/icone_quase.png";
import icone_erro from "../assets/icone_erro.png";

export default function FlashCard() {
  return (
    <>
      <PerguntaFechada>
        <p>Pergunta 1</p>
      </PerguntaFechada>
      <PerguntaAberta>
        <p>O que é o JSX?</p>
        <img src={seta_virar} alt="" />
      </PerguntaAberta>
      <PerguntaAberta>
        <p>JSX é uma sintaxe para escrever HTML dentro do JS </p>
        <ContainerButtons>
          <button>Não lembrei</button>
          <button>Quase nāo lembrei</button>
          <button>Zap!</button>
        </ContainerButtons>
      </PerguntaAberta>
    </>
  );
}

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
  p {
    font-family: "Recursive";
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
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

    font-family: Recursive;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
