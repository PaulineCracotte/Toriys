<template>
  <div class="page">

    <div class="mix">
      <img class="layer l-1" :src="body.data" />
      <img class="layer l-2" :src="clothing.data" />
      <img class="layer l-3" :src="leftEye.data" />
      <img class="layer l-4" :src="rightEye.data" />
      <img class="layer l-5" :src="nose.data" />
      <img class="layer l-6" :src="mouth.data" />
      <img class="layer l-7" :src="hair.data" />
    </div>
    <div>
      <div class="button-randomize">
        <img
            @click="randomize"
            @mousedown="onMouseDown"
            @mouseup="onMouseUp"
             :src="buttonImage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Bodies, Clothings, Feature, Hairs, LeftEyes, Mouths, Noses, RightEyes} from '@/assets/features';
import buttonnotpressed from '@/assets/button-notpressed.png';
import buttonpressed from '@/assets/button-pressed.png';

@Component
export default class HelloWorld extends Vue {
  private leftEye: Feature = LeftEyes[0];
  private rightEye: Feature = RightEyes[0];
  private mouth: Feature = Mouths[0];
  private nose: Feature = Noses[0];
  private hair: Feature = Hairs[0];
  private body: Feature = Bodies[0];
  private clothing: Feature = Clothings[0];
  private buttonImage = '';

  mounted(): void {
    this.buttonImage = buttonnotpressed;
    this.randomize();
  }

  onMouseUp(): void {
    this.buttonImage = buttonnotpressed;
  }

  onMouseDown(): void {
    this.buttonImage = buttonpressed;
  }
  randomize(): void {
    this.leftEye = LeftEyes[Math.floor(Math.random() * 4)];
    this.rightEye = RightEyes[Math.floor(Math.random() * 4)];
    this.mouth = Mouths[Math.floor(Math.random() * 4)];
    this.nose = Noses[Math.floor(Math.random() * 4)];
    this.hair = Hairs[Math.floor(Math.random() * 4)];
    this.body = Bodies[Math.floor(Math.random() * 4)];
    this.clothing = Clothings[Math.floor(Math.random() * 4)];
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  image-rendering: auto;
  image-rendering: crisp-edges;
  image-rendering: pixelated;
}
.mix {
  position: relative;
  width: 600px;
  height: 600px;
  margin: 20px auto;
  border: 7px solid black;
  background: #ddd;
}
.layer {
  position: absolute;
  top: 0;
  left: 0;
  height: 600px;
}
.l-1 {
  z-index: 1;
}
.l-2 {
  z-index: 2;
}
.l-3 {
  z-index: 3;
}
.l-4 {
  z-index: 4;
}
.l-5 {
  z-index: 5;
}
.l-6 {
  z-index: 6;
}
.l-7 {
  z-index: 7;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.page {
  height: 100vh;
  width: 100%;
  background: url("~@/assets/bg-repeat.png") repeat-x;
  background-size: 16px 900px;
}
.button-randomize img {
  width: 300px;
  image-rendering: pixelated;
}
</style>
