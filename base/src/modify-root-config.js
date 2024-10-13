import {registerApplication, start} from 'single-spa';

// 服务注册
registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: location => location.pathname === '/'
});

registerApplication({
  name: '@modify/vue-app',
  app: () =>
    System.import(
      '@modify/vue-app'
    ),
  activeWhen: location => location.pathname === '/vue',
  customProps: {
    a: 1
  },
});

registerApplication({
  name: '@modify/react-app',
  app: () =>
    System.import(
      '@modify/react-app'
    ),
  activeWhen: location => location.pathname === '/react'
});

start({
  urlRerouteOnly: true
});
