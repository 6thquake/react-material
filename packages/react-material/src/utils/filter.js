const findInObject = (object, value) => {
  const keys = Object.keys(object);
  const result = keys.some(key => {
    return String(object[key]).indexOf(value) !== -1;
  });
  return result;
};

const find = (content, value) => {
  const type = typeof content;
  if (type === 'object') {
    return findInObject(content, value);
  }
  return String(content).indexOf(String(value)) !== -1;
};

const filter = (data, value) => {
  const type = typeof value;
  const callback = type === 'function' ? value : find;
  const result = data.filter(item => {
    return callback(item, value);
  });
  return result;
};

export { filter, find };
export default filter;
