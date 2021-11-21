<template>
  <div id="app">
    <HelloWorld :configs="configs" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  private configs: Array<string> = [
    'Khizo',
    'Fala',
    'Denjil',
    'Kana'
  ];
}
</script>

<style>
@font-face {
  font-family: SuperLegendBoy;
  src: local("SuperLegendBoy"),
  url("../src/fonts/SuperLegendBoy-4w8Y.ttf") format('truetype');
}
#app {
  font-family: SuperLegendBoy, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #472d3c;
}
</style>
