import './App.css';
import Background from './components/Background';
import styled from 'styled-components';

const Title = styled.Title`
  color: white;
  font-size: 4rem;
  z-index: 10;
`;

const Square = styled.div`
  background: red;
  width: 50px;
  height: 50px;
`;

function App() {
  return (
    <div className="App">
      <Square />
      <Title>Colin J. Murray</Title>
      <Background />  
    </div>
  );
}

export default App;
