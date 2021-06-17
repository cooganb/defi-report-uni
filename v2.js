var blockNum = 10610232;

var query = `
  query {
    pair(block: { number:` + blockNum.toString() + `} id:"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){
      reserveETH
      reserveUSD
      }
  }
`;

const url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2/graphql";

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);