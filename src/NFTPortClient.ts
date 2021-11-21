import axios from 'axios';

class NFTPortHTTPClient {
  private axios = axios.create({
    baseURL: 'https://api.nftport.xyz/v0',
    headers: {
      Accept: 'application/json',
      Authorization: String(process.env.VUE_APP_NFTPORT_API_KEY)
    }
  });
  private contractAddress = String(process.env.VUE_APP_NFT_CONTRACT_ADDRESS);

  async getMetadata(tokenId: number): Promise<any> {
    const {data} = await this.axios.get(`/nfts/${this.contractAddress}/${tokenId}?chain=ethereum`);
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
    const { data } = await this.axios.post('/mints/customizable', {
      chain: 'rinkeby',
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
