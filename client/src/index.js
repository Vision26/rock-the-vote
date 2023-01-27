import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProviderAuth } from './context/UserContextAuth'
import { IssueProvider } from './appcontext/IssueContext'
import { CommProvider } from './commcontext/CommContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CommProvider>
    <IssueProvider>
    <UserProviderAuth>
      <App />
      </UserProviderAuth>
      </IssueProvider>
      </CommProvider>
    </BrowserRouter>
  </React.StrictMode>
);