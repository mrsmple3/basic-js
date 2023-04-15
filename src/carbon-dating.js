const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let k = 0.693 / HALF_LIFE_PERIOD;
  let age = false;
  if (typeof sampleActivity !== "string") {
    return age;
  }
  age = Math.ceil(Math.log(MODERN_ACTIVITY / parseInt(sampleActivity)) / k);
  return age;
}
let number = "2";
console.log(dateSample(number));
module.exports = {
  dateSample,
};
