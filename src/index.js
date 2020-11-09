import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createAuthLink } from 'aws-appsync-auth-link';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, ApolloProvider } from '@apollo/client';
import config from './config';
import App from './App';
import reportWebVitals from './reportWebVitals';

const region = config.appSyncConfig.aws_appsync_region;
const url = config.appSyncConfig.aws_appsync_graphqlEndpoint;
const auth = {
  type: config.appSyncConfig.aws_appsync_authenticationType,
  apiKey: config.appSyncConfig.aws_appsync_apiKey
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url })
]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
