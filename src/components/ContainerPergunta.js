import styled from "styled-components";
export default function ContainerPergunta() {
  return (
    <>
      <PerguntaFechada>
        <p>Pergunta 1</p>
      </PerguntaFechada>
    </>
  );
}
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
`;
