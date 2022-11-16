// import logo from './logo.svg'; 
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Formvalidation from './Pages/Formvalidation';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Formvalidation/>
      </ChakraProvider>
    </div>
  );
}

export default App;
