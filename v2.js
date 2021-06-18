const fetch = require('node-fetch');

// total blocks to snapshot:
var snapshots = [10042267, 10239033, 10435799,10632565, 10829331, 10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12754609, 13133196, 13511783]

var blockNum = 10610232;

var query = `
  query {
    pair(block: { number:` + blockNum.toString() + `} id:"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){
      reserveETH
      reserveUSD
      }
  }
`;

const url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  // .then(console.log)
  .then(
    ({ data }) => {
    console.log("Token 0: " + data.results.pool.token0);
    console.log("Token 1: " + data.results.pool.token1)
    // console.log("combinedBalanceinEth for " +  data.results.pool.token0);
    // console.log(data.pool.token1)
    }
  )
  .catch(console.error);