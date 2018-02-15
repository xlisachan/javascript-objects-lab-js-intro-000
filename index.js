var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, object, {[key]: value});
  return object;
}


function deleteFromObjectByKey(object, key){
/*  deletes `key` from a clone of object and returns the new object (it is non-destructive)
does not modify the original object (it is non-destructive)*/
}

function destructivelyDeleteFromObjectByKey(object, key){
/*  returns object without the delete key/value pair
modifies the original object*/
}
