/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');
/*
const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/

console.log("You see two boxes in front of you. Box1 has a money sign on it and Box2 has a sword on it.");
const optionBox = readline.question("Which box do you open? Box1 or Box2? ");

let health = 100;
let money = 5;
let weapon = [];

if( optionBox === "Box1"){ // You choose Box1. You get money.
  console.log(
  `You open Box1.
  You found 20 pieces of gold.
  You now have ${money+20} gold.`);
  money = money + 20;
} else if(optionBox === "Box2"){ // You choose Box2. You get a weapon.
  console.log("The box has a sword and a gun in it.")
  const optionWeaponBox =readline.question("Which weapon do you want? ");
  if(optionWeaponBox === "sword"){ // You get a sword.
    weapon.push("sword");
    console.log("You pick up the sword");
  } else if(optionWeaponBox === "gun"){ // You get a gun with ammo
    weapon.push("gun");
    weapon.push(6);
    console.log("You grab the gun. It has 6 bullets in it.");
  }

}
// If invalid options then nothing happens
console.log("Both boxes disappear.");

console.log("A Bandit has appeared. He demands gold.");
const optionBandit = readline.question("Give him money (1) or fight (2)? ");

if(optionBandit === "1" && money >= 10){ // Surrender with lots of money, lose some.
  money = money -10;
  console.log(
    `You give the bandit 10 Gold.
    You have ${money}
    The bandit leaves.`);
} else if(optionBandit === "1" && money <10){ // Surrender with little money, lose all.
  money = 0;
  console.log(`You give the bandit all your gold.
    You have ${money}
    The bandit leaves.`);
} else if(optionBandit === "2" && weapon[0] === "sword"){ // Fight with sword
  money = money + 5;
  console.log(`You attack the bandit. He flees.
    He drops 5 Gold
    You have ${money}`);
} else if(optionBandit === "2" && weapon[0] === "gun" && weapon[1] !== 0){ // Fight with gun that has ammo
  weapon[1] = weapon[1] - 1;
  money = money +10;
  console.log(`You shoot the bandit.
    He drops 10 Gold
    You have ${money}`);
} else if(optionBandit == "2"){ // Fight and take damage
  health= health -20;
  console.log(
    `You scuffle with the Bandit.
    You take 20 points of damage.
    You have ${health}.
    The bandit flees.`)
} else if (money >= 10){ // Invalid with lots of money
  money = money -10;
  console.log(
    `You give the bandit 10 Gold.
    You have ${money}
    The bandit leaves.`);
} else { // Invalid
  money = 0;
  console.log(`You give the bandit all your gold.
    You have ${money}
    The bandit leaves.`);
}

console.log(`
  Health: ${health} Points
  money: ${money} Gold
  weapon: ${weapon}`
); // Player Stats
