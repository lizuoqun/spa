import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import {renderWithQiankun, qiankunWindow} from 'vite-plugin-qiankun/dist/helper';
// @ts-ignore
import actions from './action.js';

let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).use(ElementPlus).mount('#app');
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App).use(router).use(ElementPlus);
      app.mount(props.container?.querySelector('#app'));
      console.log('vue app mount get props', props);
      // props.onGlobalStateChange((state: any, prev: any) => console.log(`vue 子应用 [onGlobalStateChange - ${props.name}]:`, state, prev));
      // props.setGlobalState({count: 100});
      actions.setActions(props);
    },
    bootstrap() {
      console.log('vue app bootstrap');
    },
    update() {
      console.log('vue app update');
    },
    unmount(props) {
      console.log('vue app unmount', props);
      app.unmount();
    }
  });
}