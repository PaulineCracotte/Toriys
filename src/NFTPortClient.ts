import axios from 'axios';
import Timer from '@/utils/Timer';
import App from '@/App.vue';

class NFTPortHTTPClient {
  private axios = axios.create({
    baseURL: 'https://api.nftport.xyz/v0',
    headers: {
      Accept: 'application/json',
      Authorization: String(process.env.VUE_APP_NFTPORT_API_KEY)
    }
  });
  private contractAddress = '';

  async retrieveContractAddress(tx: string): Promise<string> {
    await Timer(400);
    const { data } = await this.axios.get(`/contracts/${tx}?chain=${App.chain}`);
    if (typeof data.contract_address === 'string') return data;
    return await this.retrieveContractAddress(tx);
  }

  async deployContract(): Promise<any> {
    const { data } = await this.axios.post('/contracts', {
      chain: App.chain,
      name: App.contractName,
      symbol: App.contractSymbol,
      owner_address: String(process.env.VUE_APP_NFT_CONTRACT_OWNER)
    });
    const tx = data.transaction_hash;
    return await this.retrieveContractAddress(tx);
  }

  async loadContract(): Promise<void> {
    if (this.contractAddress !== '') return;
    const { data } = await this.axios.get('/me/contracts');
    const contract = data.contracts.find((c: any) =>
      c.symbol === App.contractSymbol &&
      c.chain === App.chain &&
      c.name === App.contractName
    ) ?? await this.deployContract();
    this.contractAddress = contract.address;
  }

  async getMetadata(tokenId: number): Promise<any> {
    await this.loadContract();
    const {data} = await this.axios.get(`/nfts/${this.contractAddress}/${tokenId}?chain=${App.chain}`);
    console.log({data});
    if (data.response === 'NOK') {
      return null;
    }
    return data;
  }

  async uploadFile(file: Blob): Promise<string> {
    const form = new FormData();
    form.append('file', file);
    const { data } = await this.axios.post('/files', form);
    return data.ipfs_url.split('/').pop();
  }

  async uploadMetadata(metadata: any): Promise<string> {
    const { data } = await this.axios.post('/metadata', metadata);
    return data.metadata_uri;
  }

  async mint(token_id: number, metadata_uri: string, mint_to_address: string): Promise<string> {
    await this.loadContract();
    const { data } = await this.axios.post('/mints/customizable', {
      chain: App.chain,
      contract_address: this.contractAddress,
      metadata_uri,
      token_id,
      mint_to_address
    });
    return data.transaction_hash;
  }
}

const NFTPortClient = new NFTPortHTTPClient();

export default NFTPortClient;
