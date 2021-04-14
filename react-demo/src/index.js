import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // StrictMode 检查react中不合理的写法
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// 用于记录页面性能
reportWebVitals();
