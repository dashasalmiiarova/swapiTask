import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from './App';
import { store } from './redux/store';
import './index.css';

const client = new ApolloClient({
  uri: "https://swapi-api-graphql.herokuapp.com/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);

