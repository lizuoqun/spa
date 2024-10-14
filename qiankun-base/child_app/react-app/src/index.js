import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './public-path.js';

let root;

function render(props) {
  const {container} = props;
  const dom = container ? container.querySelector('#root') : document.querySelector('#root');
  root = createRoot(dom);
  root.render(
    <BrowserRouter basename="/react-app">
      <App/>
    </BrowserRouter>
  );
}

reportWebVitals();

// 判断是否在 qiankun 环境下运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}


// 生命周期。
// 1. bootstrap: 在主应用加载子应用之前，子应用的生命周期将被调用。
// 2. mount: 在主应用加载子应用之后，子应用的生命周期将被调用。
// 3. unmount: 当子应用被卸载时，子应用的生命周期将被调用。

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

// export async function unmount(props) {
//   const {container} = props;
//   ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
// }

export async function unmount(props) {
  root.unmount();
}
