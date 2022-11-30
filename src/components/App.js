import styled from "styled-components";
import Footer from "./Footer";
import Logo from "./Logo";
export default function App() {
  return (
    <AppContainer>
      <div className="App">
        <Logo className="logo-container" />
      </div>
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
