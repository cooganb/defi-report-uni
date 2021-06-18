const fetch = require('node-fetch');
const fastcsv = require('fast-csv');
const fs = require('fs');

// total blocks to snapshot:
var snapshot = [10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12476022, 12576022, 12658888]

// var blockNum = 10829331;

// var query = `
//   query {
//     pair(block: { number:` + blockNum.toString() + `} id:"0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f"){
//       reserveETH
//       reserveUSD
//       }
//   }
// `;

var url = "https://api.thegraph.com/subgraphs/name/sushiswap/exchange";

var results = [['block','numOfEth','numOfDai']]

async function series() {
  var snapshots = [10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12476022, 12576022, 12658888]

  // snapshots.forEach(handlePromise)
  for(i = 0;i < snapshots.length; i++){
    let ws = fs.createWriteStream("sushi-out.csv");
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
    id:"0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f"){
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