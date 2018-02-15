var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({key: value});
  /*  returns an object with the orignal key value pairs and the new key value pair
it does not modify the original object, but rather returns a clone with the new data*/

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  /*updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object*/
}

function deleteFromObjectByKey(object, key){
/*  deletes `key` from a clone of object and returns the new object (it is non-destructive)
  does not modify the original object (it is non-destructive)*/
}

function destructivelyDeleteFromObjectByKey(object, key){
/*  returns object without the delete key/value pair
  modifies the original object*/
}
