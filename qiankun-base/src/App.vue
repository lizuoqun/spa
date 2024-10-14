<script setup lang="ts">
// 重写history的pushState方法，触发自定义事件，并返回原方法的返回值
const write = (type: string) => {
  const orig = (window as any).history[type];
  return function () {
    const rv = orig.apply(this, arguments);
    const e: any = new Event(type);
    e.arguments = arguments;
    window.dispatchEvent(e);
    return rv;
  };
};

window.history.pushState = write('pushState');

window.addEventListener('pushState', () => {
  console.log('base 基座监听到了pushState事件=====');
});
</script>

<template>
  <div class="title">这是主应用</div>
  <div id="reactAppContainer"></div>
</template>

<style>
.title {
  color: red;
}
</style>
