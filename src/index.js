//import ReactDOM from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom'
import ChatProvider from './Context/ChatProvider';


// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <ChatProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </BrowserRouter>
  </ChatProvider>,
  document.getElementById('root')
);

//ChakraProvider();
BrowserRouter();




