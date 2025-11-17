import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validCreds = [
  {
    username: "andi",
    password: "root",
    firstName: "Anjay",
    lastName: "Yadi",
    fullName: "Anjayadi",
    birthPlace: "Madagascar"
  },
  {
    username: "cindy",
    password: "rOOt",
    firstName: "Cindy",
    lastName: "Ramata",
    fullName: "Cindiyramata",
    birthPlace: "Ohio"
  },
];

async function login() {
  try {
    let percobaan = 3;
    let nameUser = [];
    let username;
    let loginInfo = {};
    let i = 0
    while (percobaan > 0) {
      let answer = await rl.question("username: ");
      let inputUsername = answer
      for(; i < validCreds.length; i++){
        username = validCreds[i].username;
        nameUser.push(username);
      }
      let validUser = nameUser.includes(inputUsername);
      if(validUser){
        while(percobaan > 0){
          percobaan + 1;
          loginInfo.username = inputUsername;
          answer = await rl.question("password: ");
          loginInfo.password = answer;
          let validLogin = validCreds.some(item => 
            item.username === loginInfo.username && item.password === loginInfo.password);
          if(validLogin){
            console.log(`selamat datang ${inputUsername}!`);
            return rl.close();
          }else{
            console.log(`invalid password`);
            percobaan = percobaan - 1;
          }
        }
      }else{
        console.log(`invalid username`);
        percobaan = percobaan - 1;
      }
    }
    console.log(`your attemp's has run out`);
    rl.close();
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
}
login();