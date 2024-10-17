<script setup lang="ts">
import {onMounted, ref} from 'vue';
// @ts-ignore
import router from '@/router/index';
import axios from 'axios';
// @ts-ignore
import actions from '@/action.js';

const activeName = ref('list');

const handleClick = (tab: any) => {
  if (tab.paneName === 'react-app') {
    // window.location.href = '/react-app';
    window.history.pushState({}, '', '/react-app');
  } else {
    router.push({name: tab.paneName});
  }
};

const sendRequest = () => {
  axios.get('/api/test').then((res) => {
    console.log(res);
  });
};

onMounted(() => {
  actions.onGlobalStateChange((state: any) => {
    console.log('我是子应用，我检测到数据了：', state);
  }, true);

  console.log('vue page onmoued ==-===', actions)
});
</script>

<template>
  <div class="vue__app__title">这是一个vue3子应用</div>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="List" name="list"></el-tab-pane>
    <el-tab-pane label="Detail" name="detail"></el-tab-pane>
    <el-tab-pane label="Go React" name="react-app"></el-tab-pane>
  </el-tabs>
  <router-view/>
  <hr/>
  <el-button @click="sendRequest">发个请求</el-button>
</template>
