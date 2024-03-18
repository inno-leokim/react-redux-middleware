import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

/** redux 미들웨어 */
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';
//redux devtools 설치 참고 블로그: https://happy-jjang-a.tistory.com/253

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
); //applyMiddleware함수에 여러개의 미들웨어를 적용할 수 있다.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
