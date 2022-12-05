import styled from "styled-components";
import CARDS from "./components/mock";
//import CORES from "./components/CORES";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ContainerPergunta from "./components/ContainerPergunta";
import { useState } from "react";
import seta_play from "./assets/seta_play.png";
import seta_virar from "./assets/seta_virar.png";
import icone_certo from "./assets/icone_certo.png";
import icone_quase from "./assets/icone_quase.png";
import icone_erro from "./assets/icone_erro.png";

export default function App() {
  const cardsList = CARDS;
  const [deck, setDeck] = useState(cardsList);
  //console.log(deck);
  //const [icone, setIcone] = useState([]);
  const [naoLembrei, setNaoLembrei] = useState(0); //contador esquecidas
  const [quase, setQuase] = useState(0); //contador migue
  const [zap, setZap] = useState(0); //contador acerto

  const [icone, setIcone] = useState([]);
  console.log(`nao lembro: ${naoLembrei}  quase: ${quase} Zap: ${zap} app`); //contadores
  console.log(icone);
  return (
    <AppContainer>
      <Logo className="logo-container" />
      <ContainerPergunta
        className="pergunta"
        deck={deck}
        naoLembrei={naoLembrei}
        quase={quase}
        zap={zap}
        setNaoLembrei={setNaoLembrei}
        setQuase={setQuase}
        setZap={setZap}
        icone={icone}
        setIcone={setIcone}
      />
      <Footer naoLembrei={naoLembrei} quase={quase} zap={zap} deck={deck} />
    </AppContainer>
  );
}

//className="screen-container"
const AppContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
