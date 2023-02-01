const players = [
    {
        id: 1,
        name: "Ivan",
        scorePoints: 4500
     },
    {
        id: 2,
        name: "Petr",
        scorePoints: 3600
    },
    {
        id: 3,
        name: "Vadim",
        scorePoints: 3433
    },
    {
        id: 4,
        name: "Olga",
        scorePoints: 8356
    },
    ];
    

    let maxScore = []

for (let player of players) {
  maxScore.push(player.scorePoints)
}

console.log(Math.max(...maxScore)) 


// let maxScore = 0

// for (let player of players) {
//   maxScore = Math.max(maxScore, player.scorePoints) // тут Math.max() принимает 2 параметра 0 и наше значение player.scorePoints
// }
// console.log(maxScore)

//     players.sort (function(a,b) {
// return a.scorePoints - b.scorePoints;
//     })

//     console.log(players)

//     function maxArray(array) {
//         return Math.max.apply(null, array)
//     }
//     console.log(maxArray)
//     // )
    // let maxScoreArray = players.

    // for(let player of players){
    //     maxScore= Math.max(player.scorePoints)

    // }
    // console.log(maxScore)

    let bestScore = [];
let playerName = ''

for (let player of players) {
bestScore.push(player.scorePoints);

let maxScore = Math.max(...bestScore) // переменная доступная только внутри цикла, для вспомогательных вычислений

if (player.scorePoints === maxScore) {
playerName = player.name
}
}
console.log('Best score is ' + Math.max(...bestScore) + ' and name is ' + playerName);
// Попробуйте разобрать пошагово данный пример)