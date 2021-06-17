var blockNum = 10610232;

var query = `
  query {
    pair(block: { number:` + blockNum.toString() + `} id:"0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f"){
      reserveETH
      reserveUSD
      }
  }
`;

var url = "https://api.thegraph.com/subgraphs/name/uniswap/sushiswap/graphql";

var opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);