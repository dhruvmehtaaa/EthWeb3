require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/AMdmeFU8bqV5XwyoxZIfvsPjW8gaYJ80',
      accounts: ['208cbd4d28269232f7d26a67bf7c471401cea318d5dd5b666be348f836f3bc2e'],
    },
  },
};