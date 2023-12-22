
/*const consts = require('./consts');


console.log(popularAttractions);
function handleComplaints(complaint) {
  const { text, type } = complaint;
  const complaintTypes = Object.values(consts);

  for (let complaintType of complaintTypes) {
    if (complaintType === type) {
      switch (type) {
        case consts.FINANCE:
          console.log("Money doesn't grow on trees, you know.");
          break;
        case consts.WEATHER:
          console.log("It is the way of nature. Not much to be done.");
          break;
        case consts.EMOTIONS:
          console.log("It'll pass, as all things do, with time.");
          break;
        default:
          console.log(`Unknown complaint type: ${type}`);
      }
      return; 
    }
  }

  console.log(`Unknown complaint type: ${type}`);
}

module.exports = {
  handleComplaints,
};

*/
const consts = require('./consts');

function handleComplaints(complaint) {
  const { text, type } = complaint;

  const messages = {
    [consts.FINANCE]: "Money doesn't grow on trees, you know.",
    [consts.WEATHER]: "It is the way of nature. Not much to be done.",
    [consts.EMOTIONS]: "It'll pass, as all things do, with time.",
  };

  for (let messageType in messages) {
    if (messageType === type) {
      console.log(messages[messageType]);
      return;
    }
  }

  console.log(`Unknown complaint type: ${type}`);
}

module.exports = {
  handleComplaints,
};
