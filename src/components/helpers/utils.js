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
