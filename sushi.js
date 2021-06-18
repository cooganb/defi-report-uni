const fetch = require('node-fetch');

// total blocks to snapshot:
var snapshot = [10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12754609, 13133196, 13511783]

var blockNum = 10829331;

var query = `
  query {
    pair(block: { number:` + blockNum.toString() + `} id:"0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f"){
      reserveETH
      reserveUSD
      }
  }
`;

var url = "https://api.thegraph.com/subgraphs/name/sushiswap/exchange";

var opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);