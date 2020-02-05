
function sum(a, b) {
  return a + b;
}

function classifyStudent(mark) {
  // Validate mark: should be between 0 and 10
  if (mark < 0 || mark > 10) return 'Invalid mark';

  let type = '';

  if (mark < 5) type = 'Not good'
  else if (mark <= 8) type = 'Good'
  else type = 'Excellent!!!';

  return type;
}

const utils = {
  sum,
  classifyStudent,
};

module.exports = utils;
