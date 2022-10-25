require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food plunge robot pizza around ice light army general'; 
let testAccounts = [
"0x463cf34d03118f9904ff782471ee50201e9f7b1b0085ddde4b9d83d80dd5c893",
"0xb13a2fda7411c16f62346a574a6f06256f5588d03d41ce73166920732d6925eb",
"0x1a31a071d56cf7e624992a8262f9d3affbf23cc10253ad3e7324da4340f581a7",
"0x5b7adee00d9077147a2a9b7bfc344f390390e9c10f037e87d0f17ef19f4781c4",
"0x72b13048a01acd90addec97f9dccdc135cc4b0d891da30ea41a784b89be50879",
"0xb43363ac41098d08fa9c7f773ba3b47a9f97e3fab5e688bb725d000a32dcb5df",
"0x423e95a767f30f0ca335d04284cc576abd7b7b3f269776fd335e976726c71f1b",
"0xc79fb350f749e350f52ae570faa5634864730917f2e2141fbdd47a5759d1310a",
"0xd3f36c182877879d8c1ee5de66f01c33d9ee4ddc221e56ff5409325ccb66f6d2",
"0xa24d4e1c3c7c73518607136a88c44c48037dc546e36b41bd503675cd95ca2b90"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

