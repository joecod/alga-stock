import React from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Header from '../Header';
import './App.css';

function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" 
    alt="search icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <Button
          onClick={() => window.alert('Dead Cells')} 
          appendIcon={<TestComponent />}
        >          
          Alert
        </Button>        
      </Container>      
    </div>
  );
}

export default App;
