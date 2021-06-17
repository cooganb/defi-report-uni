var blockNum = 12647855;

var query = `
  query {
    pool(block: { number:` + blockNum.toString() + `} id:"0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8"){
      token0{
        symbol
        totalValueLocked
        totalValueLockedUSD
      }
      token1{
        symbol
        totalValueLocked
        totalValueLockedUSD
      }
    }
  }
`;

const url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);