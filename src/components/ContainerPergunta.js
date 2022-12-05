import { useState } from "react";
import styled from "styled-components";
//import seta_virar from "../assets/seta_virar.png";
//import icone_certo from "../assets/icone_certo.png";
//import icone_quase from "../assets/icone_quase.png";
//import icone_erro from "../assets/icone_erro.png";
import FlashCard from "./FlashCard";
import cards from "./mock";

export default function ContainerPergunta() {
  const [deck, setDeck] = useState(cards);
  console.log(deck);
  return (
    <>
      <FlashCard />
    </>
  );
}

/* Fazer um .map() para replicar o modelo de cards  
   <FlashCard></FlashCard>
      <FlashCard></FlashCard>
      <FlashCard></FlashCard>*/
