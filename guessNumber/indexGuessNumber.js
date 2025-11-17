import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function makeRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("==Guess Number==");
async function guessNumber() {
  try{
      let guess = true;
        let randomNumber = makeRandomNumber(1, 100);
        let count = 0;
        while(guess){
          const answer = await rl.question(`input guess: `);
          let userGuess = parseInt(answer);
          count++
          if(userGuess == randomNumber){
            console.log(`tebakan anda benar`);
            console.log(`anda menebak sebanyak ${count} kali`);
            guess = false;
          }
          if(userGuess < randomNumber){
            console.log(`tebakan anda terlalu kecil`);
          }
          if(userGuess > randomNumber){
            console.log(`tebakan anda terlalu besar`);
          }
        }
        rl.close();
  }catch(error){
    console.log(error);
    rl.close();
  }
  
}

guessNumber();