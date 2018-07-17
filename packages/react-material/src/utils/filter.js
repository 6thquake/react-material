const findInObject = (object, value) => {
  let keys = Object.keys(object);
  let result = keys.some(key => {
    return String(object[key]).indexOf(value) !== -1;
  });
  return result;
};

const find = (content, value) => {
  const type = typeof content;
  if (type === 'object') {
    return findInObject(content, value);
  } else {
    return String(content).indexOf(String(value)) !== -1;
  }
};

const filter = (data, value) => {
  const type = typeof value;
  let callback = type === 'function' ? value : find;
  let result = data.filter(item => {
    return callback(item, value);
  });
  return result;
};

export { filter, find };
export default filter;
