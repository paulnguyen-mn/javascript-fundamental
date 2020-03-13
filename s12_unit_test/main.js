
function missingNum(arr) {
  const missingList = new Array(10).fill(true);

  for (const number of arr) {
    missingList[number - 1] = false;
  }

  return missingList.findIndex(x => x) + 1;
}

const utils = {
  missingNum
};
// module.exports = utils;
export default utils;