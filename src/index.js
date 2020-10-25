import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// App의 상위 컴포넌트를 가져온다
// react-redux에서 제공하는 Provider를 통해서
// UI가 아니다
import { Provider } from 'react-redux';
import store from './store'

// Provider라는 component는 반드시 store props를 받아야한다.
// Provider 하위에 있는 모든 component들은 import 없이 store에 접근 할 수 있다 
ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
