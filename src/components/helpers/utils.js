export const getNames = values => {
  let names = [];
  for (let name in values) {
    names.push(name);
  }
  return names;
};
