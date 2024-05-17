const { database } = require("./database.js");

const hireDrovers = (herdSize) => {
  const drovers = [];
  const allDrovers = database.drovers;
  const numberNeeded = herdSize / 10; //replaced cattleToDrive with "herdSize"

  for (let counter = 0; counter < numberNeeded; counter++) {
    const randomHerderId = Math.floor(Math.random() * allDrovers.length);
    drovers.push(allDrovers[randomHerderId]);
  }
  return drovers; //added return drovers
};

module.exports = { hireDrovers };
