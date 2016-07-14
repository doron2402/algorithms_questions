var john = function(name){
  if (john.SINGLETON) {
    return john.SINGLETON
  }
  this.name = name;
  john.SINGLETON = this;
  return this;
}

var a1 = new john('a1');
var a2 = new john('a2');
if (a1 === a2){
  console.log('object are the same');
} else {
  console.log('object are NOT the same');
}

if (a1.name === a2.name) {
  console.log('name is the same');
} else {
  console.log('name is NOT the same');
}
