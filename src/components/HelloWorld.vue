<template>
  <div class="page">
    <div class="logo">
      <img src="@/assets/ui/titlepixel02.png" />
    </div>
    <div class="frame">
      <div class="top">
        <div class="mix">
          <canvas ref="canvas" width="600" height="600"></canvas>
        </div>
        <div class="right">
          <div class="metadata">
            <h4>Metadata for Toriy #{{ tokenId }}:</h4>
            <ul>
              <li>Body: {{ configs[body] }}</li>
              <li>Clothing: {{ configs[clothing] }}</li>
              <li>Left Eye: {{ configs[leftEye] }}</li>
              <li>Right Eye: {{ configs[rightEye] }}</li>
              <li>Nose: {{ configs[nose] }}</li>
              <li>Mouth: {{ configs[mouth] }}</li>
              <li>Hair: {{ configs[hair] }}</li>
            </ul>
          </div>
          <div class="actions">
              <a :href="downloadLink" class="clickable save" :download="`toriy_${tokenId}`">
                <img src="@/assets/ui/floppy.png" /> Download
              </a>
            <div v-if="!checked">
              <div class="clickable" v-if="!checked" @click="check">
                <img src="@/assets/ui/eye.png" /> Check availability
              </div>
            </div>
            <div v-else-if="available">
              <h4>This NFT is available!</h4>
              <div class="clickable" @click="mint">
                <img src="@/assets/ui/coin.png" > Mint
              </div>
            </div>
            <div v-else>
              This NFT belongs to {{ ownerAddress }}
            </div>
            <Loading :class="{hidden: !loading}"/>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div v-if="errorMessage !== ''">{{errorMessage}}</div>
        <div v-if="tx">Transaction Hash: <a target="_blank" :href="`https://polygonscan.com/tx/${tx}`">{{ tx }}</a></div>
      </div>
    </div>
    <div class="button-randomize">
      <img
        @click="randomize"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"
        :src="buttonImage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop} from 'vue-property-decorator';
import Web3Component from '@/components/Web3Component.vue';
import NFTPortClient from '@/NFTPortClient';

import {Bodies, Clothings, Hairs, LeftEyes, Mouths, Noses, RightEyes} from '@/assets/features';
import buttonnotpressed from '@/assets/ui/button-notpressed.png';
import buttonpressed from '@/assets/ui/button-pressed.png';
import Loading from '@/components/Loading.vue';

@Component({
  components: {Loading}
})
export default class HelloWorld extends Web3Component {
  @Prop() configs!: Array<string>;
  private leftEye = 0;
  private rightEye = 0;
  private mouth = 0;
  private nose = 0;
  private hair = 0;
  private body = 0;
  private clothing = 0;
  private buttonImage = '';
  private checked = false;
  private available = false;
  private ownerAddress = '';
  private canvas: CanvasRenderingContext2D | null = null;
  private loading = false;
  private errorMessage = '';
  private tx = '';
  private downloadLink = '';

  mounted(): void {
    const canvas = this.$refs['canvas'] as HTMLCanvasElement;
    this.canvas = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.canvas.imageSmoothingEnabled = false;
    this.buttonImage = buttonnotpressed;
    this.randomize();
  }

  save(e: MouseEvent) {
    e.preventDefault();
  }
  private loadImage(src: string): any{
    return new Promise<any>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  async draw(): Promise<void> {
    if (this.canvas === null) {
      return;
    }
    const body = await this.loadImage(Bodies[this.body].data);
    const clothing = await this.loadImage(Clothings[this.clothing].data);
    const leftEye = await this.loadImage(LeftEyes[this.leftEye].data);
    const rightEye = await this.loadImage(RightEyes[this.rightEye].data);
    const nose = await this.loadImage(Noses[this.nose].data);
    const mouth = await this.loadImage(Mouths[this.mouth].data);
    const hair = await this.loadImage(Hairs[this.hair].data);
    this.canvas.clearRect(0, 0, 600, 600);
    this.canvas.drawImage(body, 0, 0, 100, 100, 0, 0, 600, 600);
    this.canvas.drawImage(clothing, 0, 0, 100, 100, 0, 0, 600, 600);
    this.canvas.drawImage(leftEye, 0, 0, 100, 100, 0, 0, 600, 600);
    this.canvas.drawImage(rightEye, 0, 0, 100, 100, 0, 0, 600, 600);
    this.canvas.drawImage(nose, 0, 0, 100, 100, 0, 0, 600, 600);
    this.canvas.drawImage(mouth, 0, 0, 100, 100, 0, 0, 600, 600);
    this.canvas.drawImage(hair, 0, 0, 100, 100, 0, 0, 600, 600);
    const canvas = this.$refs['canvas'] as HTMLCanvasElement;
    canvas.toBlob((blob) => {
      this.downloadLink = URL.createObjectURL(blob);
      console.log(this.downloadLink);
    },'image/png');
  }

  get tokenId(): number {
    return this.body << 12 |
      this.clothing << 10 |
      this.leftEye << 8 |
      this.rightEye << 6 |
      this.nose << 4 |
      this.mouth << 2 |
      this.hair || 0b0100000000000000;
  }

  onMouseUp(): void {
    this.buttonImage = buttonnotpressed;
  }

  onMouseDown(): void {
    this.buttonImage = buttonpressed;
  }

  async mint(): Promise<void> {
    this.errorMessage = '';
    if (this.loading) return;
    this.loading = true;
    if (!this.logged) {
      this.initWeb3Login();
      await this.awaitWeb3Login();
    }
    if (this.addresses.length === 0) {
      this.loading = false;
      this.logged = false;
      this.errorMessage = 'Login with metamask first and make sure you have your address connected';
    }
    const canvas = this.$refs['canvas'] as HTMLCanvasElement;
    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob === null) return reject();
        resolve(blob);
      });
    });
    const imageCid = await NFTPortClient.uploadFile(blob);
    const metadata = {
      name: "Random Toriys",
      description: "Random Avatars in the style of Akira Toriyama",
      file_url: `ipfs://${imageCid}`,
      external_url: `https://ipfs.io/ipfs/${imageCid}`,
      attributes: [
        {
          trait_type: "Body",
          value: this.configs[this.body]
        },
        {
          trait_type: "Clothing",
          value: this.configs[this.clothing]
        },
        {
          trait_type: "Left Eye",
          value: this.configs[this.leftEye]
        },
        {
          trait_type: "Right Eye",
          value: this.configs[this.rightEye]
        },
        {
          trait_type: "Nose",
          value: this.configs[this.nose]
        },
        {
          trait_type: "Mouth",
          value: this.configs[this.mouth]
        },
        {
          trait_type: "Hair",
          value: this.configs[this.hair]
        }
      ]
    };
    const metadataUri = await NFTPortClient.uploadMetadata(metadata);
    this.tx = await NFTPortClient.mint(this.tokenId, metadataUri, this.addresses[0]);
    this.loading = false;
    this.errorMessage = `Congratulation! You have successfully minted Toriy #${this.tokenId}!`;
  }

  async check(): Promise<void> {
    if (!this.logged) {
      this.initWeb3Login();
      await this.awaitWeb3Login();
    }
    if (this.loading || this.checked) return;
    this.loading = true;
    const metadata = await NFTPortClient.getMetadata(this.tokenId);
    this.loading = false;
    this.checked = true;
    if (metadata === null) {
      this.available = true;
    } else {
      this.ownerAddress = metadata.owner;
    }
  }

  randomize(): void {
    this.checked = false;
    this.available = false;
    // this.leftEye = Math.floor(Math.random() * 4);
    // this.rightEye = Math.floor(Math.random() * 4);
    // this.mouth = Math.floor(Math.random() * 4);
    // this.nose = Math.floor(Math.random() * 4);
    // this.hair = Math.floor(Math.random() * 4);
    // this.body = Math.floor(Math.random() * 4);
    // this.clothing = Math.floor(Math.random() * 4);
    this.leftEye = 0;
    this.rightEye = 0;
    this.mouth = 0;
    this.nose = 0;
    this.hair = 0;
    this.body = 0;
    this.clothing = 0;
    this.draw();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html {
  background-color: #fecc9e;
  background-image: url("~@/assets/ui/bg-repeat-flip.png");
  /*background-color: #a890b7;*/
  /*background-image: url("~@/assets/ui/bg-repeat.png");*/
  background-repeat: repeat-x;
  background-size: 16px 900px;
  image-rendering: pixelated;
}
.frame {
  max-width: 800px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  border: 56px solid transparent;
  image-rendering: pixelated;
  border-image: url("~@/assets/ui/border_bg_e3ab68.png") 20 round;
  background-color: #f4cca1;
  overflow: hidden;
  transition: all 1.5s;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  image-rendering: pixelated;
}
.logo {
  width: 450px;
  margin: 15px auto;
}
.logo img {
  width: 100%;
}
.clickable {
  /*display: block;*/
  cursor: pointer;
  user-select: none;
}
.actions {
  margin-top: 40px;
  text-align: left;
}
.actions .clickable {
  height: 100px;
  line-height: 100px;
}
.actions .clickable img {
  height: 100px;
  float: left;
  margin-right: 25px;
}
.actions .clickable:hover {
  color: #a05b53;
}
.clickable.save {
  display: block;
  height: 60px;
  line-height: 60px;
  text-align: center;
  text-align: left;
}
.clickable.save img {
  height: 60px;
  margin-left: 20px;
  margin-right: 45px;
}
a.clickable.save {
  color: #472d3c;
}
.mix {
  position: relative;
  width: 380px;
  height: 380px;
  border: 7px solid black;
  background: #dff6f5;
}
canvas {
  width: 380px;
  height: 380px;
  image-rendering: pixelated;
}
h3 {
  margin: 40px 0 0;
}
h4 {
  text-align: left;
}
ul {
  list-style-type: none;
  text-align: left;
  padding: 0;
}
li {
  margin: 5px;
}
a {
  color: #42b983;
  text-decoration: none;
}
.page {
  height: 100vh;
  width: 100%;
}
.button-randomize img {
  width: 300px;
  image-rendering: pixelated;
}
.hidden {
  visibility: hidden;
}
@media (max-width: 800px) {
  .top {
    flex-direction: column;
  }
}
</style>
