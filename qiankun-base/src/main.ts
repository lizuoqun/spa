import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {registerMicroApps, start, initGlobalState} from 'qiankun';

// 注册的所有子应用
const QIANKUN_APPS = [
  {
    name: 'react app',
    entry: '//localhost:3000',
    activeRule: '/react-app',
    container: '#reactAppContainer'
  },
  {
    name: 'vue app', // 子应用名称
    entry: '//localhost:3001',
    activeRule: '/vue-app', // 匹配的路由
    container: '#reactAppContainer'// 加载的容器
  }
];
// qiankun生命周期
const QIANKUN_LIFECYCLE = {
  beforeLoad: [async (app: any) => {
    console.log('before load =====', app.name);

  }],
  beforeMount: [async (app: any) => {
    console.log('before mount =====', app.name);
  }],
  afterUnmount: [async (app: any) => {
    console.log('after unmount =====', app.name);
  }]
};
registerMicroApps(QIANKUN_APPS, QIANKUN_LIFECYCLE);

start();

// 全局状态管理
const state = {count: 1};

const action = initGlobalState(state);

action.onGlobalStateChange((value, prev) => {
  console.log('main app change', value, prev);
});

action.setGlobalState(state);

createApp(App).mount('#app');
