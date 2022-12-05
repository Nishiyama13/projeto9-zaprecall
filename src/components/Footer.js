import styled from "styled-components";
import icone_certo from "../assets/icone_certo.png";
import icone_quase from "../assets/icone_quase.png";
import icone_erro from "../assets/icone_erro.png";

export default function Footer(props) {
  const { naoLembrei, quase, zap, deck } = props;
  const respondidas = naoLembrei + quase + zap;
  const totalPerguntas = deck.length;
  console.log(respondidas, totalPerguntas);

  return (
    <FooterConcluidos>
      {" "}
      <p>
        {respondidas}/{totalPerguntas} CONCLUÍDOS
      </p>
    </FooterConcluidos>
  );
}

//.footer-concluidos {}
const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

/*      <ContainerBotoes>
        <img src={icone_certo} />
        <img src={icone_quase} />
        <img src={icone_erro} />
      </ContainerBotoes>


const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
`;
*/
