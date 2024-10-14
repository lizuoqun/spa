<script setup lang="ts">
import {ref} from 'vue';
import router from '@/router/index';

const activeName = ref('list');

const handleClick = (tab: any) => {
  if (tab.paneName === 'react-app') {
    // window.location.href = '/react-app';
    window.history.pushState({}, '', '/react-app');
  } else {
    router.push({name: tab.paneName});
  }
};
</script>

<template>
  <div class="vue__app__title">这是一个vue3子应用</div>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="List" name="list"></el-tab-pane>
    <el-tab-pane label="Detail" name="detail"></el-tab-pane>
    <el-tab-pane label="Go React" name="react-app"></el-tab-pane>
  </el-tabs>
  <router-view/>
</template>
