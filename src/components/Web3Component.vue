<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Web3 from "web3";

@Component
export default class Web3Component extends Vue {
  protected web3: Web3 | null = null;
  protected addresses: Array<string> = [];
  protected logged = false;
  protected bus = new EventTarget();

  initWeb3Login(): void {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(async (data: any) => {
      this.addresses = data;
      const loginEvent = new Event('login', data);
      this.bus.dispatchEvent(loginEvent);
      this.logged = true;
    }).catch(console.error);
  }

  awaitWeb3Login(): Promise<any> {
    return new Promise<any>(resolve => {
      if (this.logged) resolve(this.addresses);
      this.bus.addEventListener('login', resolve);
    })
  }

  mounted(): void {
    console.log('mts');
    if (window.ethereum) {
      window.web3 = window.ethereum;
    }
    if (window.web3 == null) {
      return;
    }
    this.web3 = new Web3(window.web3.currentProvider);
    console.log(this.web3);
  }
}
</script>
