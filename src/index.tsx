import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, ApolloProvider,InMemoryCache} from '@apollo/client';
import './index.css';
import App from './App';
import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
import Test from './Test';
import Graphql from './Graphql';
const clinet=new ApolloClient({uri:'http://localhost:3030',cache:new InMemoryCache()})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/"  element={<Test />} />
      <Route path="/login" element={<ChakraProvider><App /></ChakraProvider>} />
      <Route path="/home" element={<ChakraProvider><Home /></ChakraProvider>} />
       <Route path="/graphql" element={<ApolloProvider client={clinet}><Graphql /></ApolloProvider>}></Route>
    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
