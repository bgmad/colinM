import './App.css';
import Background from './components/Background';
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  z-index: 10;
`;

function App() {
  return (
    <div className="App">
      <Title>Colin J. Murray</Title>
      <Background />  
    </div>
  );
}

export default App;
