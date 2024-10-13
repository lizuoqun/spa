import {h, createApp} from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';


// 通过vue-cli-single-spa-plugin改写router
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        a: this.a
      });
    }
  }
});


// single-spa 需要返回三个生命周期函数，分别对应 bootstrap、mount 和 unmount。
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
