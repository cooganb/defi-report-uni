const fetch = require('node-fetch');


// total blocks to snapshot:
// [8939330, 9159917, 9380504, 9601091, 9821678, 10042265, v2:10042267, 10239033, 10435799,10632565, 10829331, sushi:10829331, 10835799, 10842267, 10848735, 10855203, 10861671, uni:10861674, 11240261, 11618848, 11997435, v3: 12376022, 12754609, 13133196, 13511783, current?]

var snapshots = [8939330, 9380504, 9601091, 9821678, 10042265, 10042267, 10239033, 10435799,10632565, 10829331, 10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12476022, 12576022, 12658888]

var url = "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap";

// 
// iterator - forEach
async function handlePromise() {
  var snapshots = [8939330, 9380504, 9601091, 9821678, 10042265, 10042267, 10239033, 10435799,10632565, 10829331, 10829331, 10835799, 10842267, 10848735, 10855203, 10861671, 10861674, 11240261, 11618848, 11997435, 12376022, 12476022, 12576022, 12658888]
  
  var query = `
  query {
    exchange(block: { number: 9380504} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
        combinedBalanceInEth
        combinedBalanceInUSD
        tokenName
        tokenBalance
        ethBalance
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
  console.log(json1.data.exchange.combinedBalanceInUSD)
}

handlePromise()


// snapshots.forEach(element => {

//   var query = `
//   query {
//     exchange(block: { number:` + element.toString() + `} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
//         combinedBalanceInEth
//         combinedBalanceInUSD
//         tokenName
//         tokenBalance
//         ethBalance
//       }
//   }
// `;

// results = []

//   var opts = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query })
//   };

// // async function handlePromise() {  
// //   let promise1 = await // SOMETHING that resolves
// //   await functionX(); // 1
// //   await functionY(); // 2
// //   await functionZ(); // 3
// //   // await = .then()
// // }


//   fetch(url, opts)
//   .then(res => res.json())
//   .then(
//     ({ data }) => {
//       entry = []
//       await entry.push(element)
//       await entry.push(data.exchange.combinedBalanceInUSD)
//       await results.push(entry)
//       await console.log(results)
//       // data.exchange.combinedBalanceInUSD
//     }
//   )




//   // .then(
//   //   ({ data }) => {
//     // console.log(data.exchange.token0);
//   //   // console.log("Token 1: " + data.pool.token1)
//   //   console.log("combinedBalanceinEth for: " + data.exchange.combinedBalanceinEth);
//   //   // console.log(data.pool.token1)
//   //   }
//   // )
//   .catch(console.error);

// })


// hello!

// snapshots.forEach(element => {

//   var query = `
//   query {
//     exchange(block: { number:` + element.toString() + `} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
//         combinedBalanceInEth
//         combinedBalanceInUSD
//         tokenName
//         tokenBalance
//         ethBalance
//       }
//   }
// `;

//   var opts = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query })
//   };

//   fetch(url, opts)
//   .then(res => res.json())
//   .then(
//     ({ data }) =>
//       data.exchange.combinedBalanceInUSD
//   )
//   .then(console.log)
  
//   .catch(console.error);

// })

// const control = async () => {

// var url = "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap";
  
// var query = `
//     query {
//       exchange(block: { number:` + snapshots[i].toString() + `} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
//           combinedBalanceInEth
//           combinedBalanceInUSD
//           tokenName
//           tokenBalance
//           ethBalance
//         }
//     }
//   `;
  
// var opts = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query })
//     };

// const response = await fetch(url, opts)
// const data = await response.json()
// console.log("Combined USD value at block " 
//               + snapshots[i].toString() 
//               + ": "
//               + data.exchange)

// }

// snapshots.forEach(element => {

//   var query = `
//   query {
//     exchange(block: { number:` + element.toString() + `} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
//         combinedBalanceInEth
//         combinedBalanceInUSD
//         tokenName
//         tokenBalance
//         ethBalance
//       }
//   }
// `;

//   var opts = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ query })
//   };

//   fetch(url, opts)
//   .then(res => res.json())
//   .then(
//     ({ data }) =>
//       data.exchange.combinedBalanceInUSD
//   )
//   .then(console.log)
  
//   // .then(
//   //   ({ data }) => {
//     // console.log(data.exchange.token0);
//   //   // console.log("Token 1: " + data.pool.token1)
//   //   console.log("combinedBalanceinEth for: " + data.exchange.combinedBalanceinEth);
//   //   // console.log(data.pool.token1)
//   //   }
//   // )
//   .catch(console.error);

// })


// var blockNum = 10610232;

// var query = `
//   query {
//     exchange(block: { number:` + blockNum.toString() + `} id:"0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667"){
//         combinedBalanceInEth
//         combinedBalanceInUSD
//         tokenName
//         tokenBalance
//         ethBalance
//       }
//   }
// `;

// var opts = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ query })
// };
// fetch(url, opts)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);