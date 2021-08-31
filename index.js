const record = [
   {year: "2018", result: "L"},
   {year: "2017", result: "W"},
   {year: "2016", result: "N/A"}
   //...
 ]
// function superbowlWin(record) {
//    record.find((record) => {
//       if (record.result === 'W') {
//          return result.year
//       } else {
//          return undefined
//       }
//    })
// }

superbowlWin = (record) => {
   let result = record.find( record => record.result === "W" )
   return !!result ? result.year : undefined
 }
