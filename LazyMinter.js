const ethers = require("ethers");

// These constants must match the ones used in the smart contract.

/**NFTVoucher(uint256 tokenId,uint256 minPrice,string uri)
 * JSDoc typedefs.
 * 
 * @typedef {object} NFTVoucher
 * @property {ethers.BigNumber | number} tokenId the id of the un-minted NFT
 * @property {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT
 * @property {string} uri the metadata URI to associate with this NFT
 * @property {ethers.BytesLike} signature an EIP-712 signature of all fields in the NFTVoucher, apart from signature itself.
 * @property {ethers.BigNumber | number} royalty the metadata URI to associate with this NFT
 * @property {boolean} isNative the metadata URI to associate with this NFT

 */

/**
 * LazyMinter is a helper class that creates NFTVoucher objects and signs them, to be redeemed later by the LazyNFT contract.
 */
class LazyMinter {
  /**
   * Create a new LazyMinter targeting a deployed instance of the LazyNFT contract.
   *
   * @param {Object} options
   * @param {ethers.Contract} contract an ethers Contract that's wired up to the deployed contract
   * @param {ethers.Signer | ethers.Wallet} signer a Signer whose account is authorized to mint NFTs on the deployed contract
   * @param {String} domain a Signer whose account is authorized to mint NFTs on the deployed contract
   */
  constructor(contract, signer, domain) {
    this.contract = contract;
    this.signer = signer;
    this.domain = domain;
  }

  /**
   * Creates a new NFTVoucher object and signs it using this LazyMinter's signing key.
   * 
   * @param {ethers.BigNumber | number} tokenId the id of the un-minted NFT
   * @param {string} uri the metadata URI to associate with this NFT
   * @param {ethers.BigNumber | number} minPrice the minimum price (in wei) that the creator will accept to redeem this NFT. defaults to zero
   * @param {ethers.BigNumber | number} royalty the minimum price (in wei) that the creator will accept to redeem this NFT. defaults to zero

   * 
   * @returns {NFTVoucher | undefined}
   */
  async createVoucher(
    tokenId,
    address,
    uri,
    royalty = 0,
    minPrice = 0,
    isNative = true
  ) {
    // let mint = await this.signer.getAddress()
    const amount = 1;
    const fungible = false;

    const voucher = {
      tokenId,
      owner: ethers.utils.getAddress(address),
      minPrice,
      royalty,
      isNative,
      amount,
      fungible,
      uri,
    }; //mint }

    const domain = await this._signingDomain();
    const types = {
      NFTVoucher: [
        { name: "tokenId", type: "uint256" },
        { name: "owner", type: "address" },
        { name: "minPrice", type: "uint256" },
        { name: "royalty", type: "uint96" },
        { name: "isNative", type: "bool" },
        { name: "amount", type: "uint256" },
        { name: "fungible", type: "bool" },
        { name: "uri", type: "string" },
      ],
    };

    try {
      const signature = await this.signer._signTypedData(
        domain,
        types,
        voucher
      );

      return {
        ...voucher,
        signature,
      };
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  /**
   * @private
   * @returns {object} the EIP-721 signing domain, tied to the chainId of the signer
   */
  async _signingDomain() {
    if (this._domain != null) {
      return this._domain;
    }
    const chainId = (await this.signer.provider.getNetwork()).chainId;
    this._domain = {
      name: this.domain,
      version: "1",
      verifyingContract: this.contract.address,
      chainId: chainId,
    };
    return this._domain;
  }
}

module.exports = {
  LazyMinter,
};
