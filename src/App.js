import styled from "styled-components";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ContainerPergunta from "./components/ContainerPergunta";

export default function App() {
  return (
    <AppContainer>
      <div className="App">
        <Logo className="logo-container" />
      </div>
      <ContainerPergunta className="pergunta" />
      <Footer />
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
