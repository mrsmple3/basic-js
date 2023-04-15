const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
let team = ["Matt", "Ann", "Dmitry", "Max"];

function createDreamTeam(members) {
  let teamName = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      teamName += members[i][0];
    }
  }
  return teamName;
}
console.log(createDreamTeam(team));
module.exports = {
  createDreamTeam,
};
