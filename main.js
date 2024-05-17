const { roundup } = require("./cattle.js");
const { hireDrovers } = require("./drovers.js");
const { journeyMaker } = require("./journey.js");

const cattleToDrive = 50;
const drovers = hireDrovers(cattleToDrive);
const cattle = roundup(cattleToDrive);
const journey = journeyMaker();

console.log(`
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\\|/         (__)
     '\------(oo)
       ||   (__)               \\|/
       ||w--||     \\|/
   \\|/
            \\|/                     (__)
                             '\------(oo)
                               ||   (__)
                               ||w--||     \\|/
`);

console.log(
  `You will be accompanying ${drovers.length} drovers as they drive ${cattleToDrive} cattle to Old Red's Ranch for grazing`
);
console.log(`\nThe herd is made of up the following types cattle:`);

//added for loop

const breedInfo = [];
for (const cow of cattle) {
  breedInfo.push(cow.breed);
}
const concatenatedBreeds = breedInfo.join(", "); // I NEEEEEEED TO CONCATENATE I THINK!
console.log(`${concatenatedBreeds}\n`);

// next step below

console.log("Here is the team of drovers you will be joining");
for (const drover of drovers) {
  console.log(`\t* ${drover.first_name} ${drover.last_name}`);
}

console.log(
  "\n\nYour journey will take you through the wildness of the American Midwest and across the following terrain"
);

// we're probably looking at adding a conditional - booleans
// if area === "plain"
// then return plain

const terrainTypes = new Set(); // this only lets me keep unique items in it. I have to say new first otherwise it fires like a normal function

for (const area of journey) {
  if (!terrainTypes.has(area)) {
    console.log(`\t* ${area}`);
    terrainTypes.add(area);
  }
}
