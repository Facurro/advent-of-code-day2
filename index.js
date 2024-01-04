import fs from "fs";

let arr = fs.readFileSync("./input.txt", "utf-8").split("\r\n");

const cubosDisponibles = {
  red: 12,
  green: 13,
  blue: 14,
};

let total = 0;

for (let k = 0; k < arr.length; k++) {
  let isValid = true
  let part = arr[k].split(":");

  
  let numgame = parseInt(part[0].replace('Game ', ''))
  console.log(numgame)
  let hands = part[1];



  let hand = hands.split(";");
  for (let j = 0; j < hand.length; j++) {
    let cubes = hand[j].split(",");
    for (let i = 0; i < cubes.length; i++) {
      // let cubes1 = cubes[0]
      //console.log(cubes1)

      let splitCube = cubes[i].split(" ");
      
      let color = splitCube[2];
      let cantidad = parseInt(splitCube[1]);

      if (cantidad > cubosDisponibles[color]) {
        isValid = false ;
       
      }
      
    }
    
  }
  console.log(numgame , isValid)
  if (isValid == true){
    total += numgame
  }
  
}

console.log(total)
//let hand1 = hand[0]
//console.log(hand1)
