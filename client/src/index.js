import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProviderAuth } from './context/UserContextAuth'
import { IssueProvider } from './appcontext/IssueContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <IssueProvider>
    <UserProviderAuth>
      <App />
      </UserProviderAuth>
      </IssueProvider>
    </BrowserRouter>
  </React.StrictMode>
);