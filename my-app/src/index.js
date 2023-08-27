import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const gialogsItem = [
  { id: '1', name: 'Valeriy' },
  { id: '2', name: 'Valeriy2' },
  { id: '3', name: 'Valeriy3' },
]

const messages = [
  { text: 'how are you' },
  { text: 'how are you1111' },
  { text: 'how are you2' }
]

const postsInfo = [
  { name: 'Hello everyone it is my first post', text: 'i love you' },
  { name: 'Hello 22', text: 'i love you 2' }
]

root.render(
  <React.StrictMode>
    <App gialogsItem={gialogsItem}
      messages={messages}
      postsInfo={postsInfo}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
