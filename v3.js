const fetch = require('node-fetch');
const fastcsv = require('fast-csv');
const fs = require('fs');

// total blocks to snapshot:
var snapshots = [12376022, 12476022, 12576022, 12658888]


//token0 is dai

// var query = `
//   query {
//     pool(block: { number:` + blockNum.toString() + `} id:"0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8"){
//       token0{
//         symbol
//         totalValueLocked
//         totalValueLockedUSD
//       }
//       token1{
//         symbol
//         totalValueLocked
//         totalValueLockedUSD
//       }
//     }
//   }
// `;

const url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
var results = [['block','numOfEth','numOfDai']]

async function series() {
  var snapshots = [12376022, 12476022, 12576022, 12658888]

  // snapshots.forEach(handlePromise)
  for(i = 0;i < snapshots.length; i++){
    let ws = fs.createWriteStream("v3-out.csv");
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
//token 0 is dai

  var query = `
  query {
    pool(block: { number:` + blockNum + `}
    id:"0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8"){
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

  var opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };



  let promise1 = await fetch(url, opts);
  // console.log(promise1);
  let json1 = await promise1.json();
  let eth = json1.data.pool.token1.totalValueLocked
  let usd = json1.data.pool.token0.totalValueLocked
  // console.log(json1.data.exchange.combinedBalanceInUSD)
  return [eth, usd]

}

// handlePromise()
series()