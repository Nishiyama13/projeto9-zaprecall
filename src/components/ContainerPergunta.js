import { useState } from "react";
import styled from "styled-components";
//import seta_virar from "../assets/seta_virar.png";
//import icone_certo from "../assets/icone_certo.png";
//import icone_quase from "../assets/icone_quase.png";
//import icone_erro from "../assets/icone_erro.png";
import FlashCard from "./FlashCard";

export default function ContainerPergunta(props) {
  const { deck, naoLembrei, quase, zap, setNaoLembrei, setQuase, setZap } =
    props;

  return (
    <>
      {deck.map(p => (
        <FlashCard
          key={p.question}
          deck={p}
          naoLembrei={naoLembrei}
          quase={quase}
          zap={zap}
          setNaoLembrei={setNaoLembrei}
          setQuase={setQuase}
          setZap={setZap}
        />
      ))}
    </>
  );
}

/* Fazer um .map() para replicar o modelo de cards  
   <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>*/
