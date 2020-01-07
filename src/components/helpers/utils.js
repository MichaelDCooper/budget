export const getNames = values => {
  let names = [];
  for (let name in values) {
    names.push(name);
  }
  return names;
};

export const auditValues = values => {
  for (let value in values) {
    if (values[value][0] === "$") {
      values[value] = values[value].substr(1);
    }
    if (!values[value] || isNaN(values[value])) {
      values[value] = 0;
    }
  }
  return values;
};

export const objToArr = obj => {
  let arr = [];
  for (let items in obj) {
    let toInt = parseInt(obj[items], 10);
    arr.push(toInt);
  }
  return arr;
};

export const objNameToArr = obj => {
  let arr = [];
  for (let names in obj) {
    arr.push(names);
  }
  return arr;
};

export const getExpenseData = arr => {
  const expenseData = [];
  const totalIncome = arr[0] + arr[1];
  let totalExpenses = 0;

  for (let i = 2; i < arr.length; i++) {
    totalExpenses += arr[i];
  }

  expenseData.push(totalIncome, totalExpenses);

  return expenseData;
};
