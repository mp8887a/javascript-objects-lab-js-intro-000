var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},objet,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  rturn newObj

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
