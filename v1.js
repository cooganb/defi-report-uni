const fetch = require('node-fetch');

var blockNum = 10610232;

var query = `
  query {
    exchange(block: { number:` + blockNum.toString() + `} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
        combinedBalanceInEth
        combinedBalanceInUSD
        tokenName
        tokenBalance
        ethBalance
      }
  }
`;

var url = "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap";

var opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);