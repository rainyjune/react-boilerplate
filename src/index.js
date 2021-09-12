import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '@ant-design/pro-layout/dist/layout.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root'),
);