const findInObject = (object, value) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      return String(element).indexOf(String(value))
    }
  }
  return false
}

const find = (content, value) => {
  const type = typeof content
  if (type === 'object'){
    return findInObject(content, value)
  }else{
    return String(content).indexOf(String(value))
  }
}

const compare = (item, value) =>{
  return find(item, value)
}

const filter = (data, value) => {
  const type = typeof value
  let callback = type === 'function' ? value : compare
  let result = data.filter(callback)
  return result
}