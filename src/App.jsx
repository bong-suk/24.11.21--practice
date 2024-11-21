import "./App.css";
import styled from "styled-components";

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  width: 200px;
`;

function App() {
  return (
    <>
      <div>hello</div>
      <BlueButton>파란색 버튼</BlueButton>
    </>
  );
}

export default App;
