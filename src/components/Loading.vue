<template>
  <div class="container">
    <div class="pixel p0"></div>
    <div class="pixel p1"></div>
    <div class="pixel p2"></div>
    <div class="pixel p3"></div>
    <div class="pixel p4"></div>
    <div class="pixel p5"></div>
    <div class="pixel p6"></div>
    <div class="pixel p7"></div>
    <div class="pixel p8"></div>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Loading extends Vue {

}
</script>

<style scoped>
.container {
  position: relative;
  width: 72px;
  height: 72px;
  margin: 0 auto;
}
.pixel {
  display: block;
  float: left;
  width: 24px;
  height: 24px;
  background-color: #00000000;
  animation: loading 1s infinite;
}
.p1 {
  animation-delay: .125s;
}
.p2 {
  animation-delay: .25s;
}
.p3 {
  animation-delay: .875s;
}
.p4 {
  animation: none;
}
.p5 {
  animation-delay: .375s;
}
.p6 {
  animation-delay: 0.75s;
}
.p7 {
  animation-delay: .675s;
}
.p8 {
  animation-delay: .5s;
}
@keyframes loading {
  0% { background-color: #000000FF}
  100% { background-color: #00000000}
}
</style>