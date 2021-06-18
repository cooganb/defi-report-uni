const fetch = require('node-fetch');
const fastcsv = require('fast-csv');
const fs = require('fs');

// total blocks to snapshot:
var snapshots = [10042267, 10239033, 10435799,10632565, 10829331, 10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12476022, 12576022, 12658888]

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

var results = [['block','numOfEth','numOfDai']]

async function series() {
  var snapshots = [10042267, 10239033, 10435799,10632565, 10829331, 10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12476022, 12576022, 12658888]

  // snapshots.forEach(handlePromise)
  for(i = 0;i < snapshots.length; i++){
    let ws = fs.createWriteStream("v2-out.csv");
    var array = []
    var pairs = await handlePromise(snapshots[i])
    array.push(snapshots[i])
    array.push(pairs[0])
    array.push(pairs[1])
    results.push(array)
    fastcsv
      .write(results, { headers: true })
      .pipe(ws);
  }




  // create an array object with block and price
  // for each block, get the combinedpriceUSD and block number and write to the json object
  // write that json object to csv file

}
// 
// iterator - forEach
async function handlePromise(blockNum) {


  // pluck from snapshot - n+1 till snapshot.length

  var blockNum = blockNum.toString();

  // convert to string 

  // var blockNumString = blockNum.toString();

  // form query
  // pass through function

  var query = `
  query {
    pair(block: { number:` + blockNum + `}
    id:"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){
      reserveETH
      reserveUSD
    }
  }
  `;

  var opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };



  let promise1 = await fetch(url, opts);
  // console.log(promise1);
  let json1 = await promise1.json();
  let eth = json1.data.pair.reserveETH
  let usd = json1.data.pair.reserveUSD
  // console.log(json1.data.exchange.combinedBalanceInUSD)
  return [eth, usd]

}

// handlePromise()
series()

// const opts = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query })
// };
// fetch(url, opts)
//   .then(res => res.json())
//   // .then(console.log)
//   .then(
//     ({ data }) => {
//     console.log("Token 0: " + data.results.pool.token0);
//     console.log("Token 1: " + data.results.pool.token1)
//     // console.log("combinedBalanceinEth for " +  data.results.pool.token0);
//     // console.log(data.pool.token1)
//     }
//   )
//   .catch(console.error);