const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
  },
  removeLink(position) {
    if (
      position &&
      typeof position === "number" &&
      position > 0 &&
      position <= this.chain.length
    ) {
      this.chain.splice(position - 1, 1);
      return true;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};
chainMaker.addLink(1);
chainMaker.addLink(2);
chainMaker.addLink(3);
chainMaker.addLink(4);
chainMaker.addLink(5);
chainMaker.addLink(6);
console.log(chainMaker.getLength());
module.exports = {
  chainMaker,
};
