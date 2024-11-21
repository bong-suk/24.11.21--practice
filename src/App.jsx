import styled from "styled-components";

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  width: 200px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

function App() {
  return (
    <>
      <Container>
        <div>hello</div>
        <BlueButton>파란색 버튼</BlueButton>
      </Container>
    </>
  );
}

export default App;
