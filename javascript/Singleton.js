var Single = function(name){
  if (Single.__instance__){
    return Single.__instance__;
  }
  this.name = name || '';
  Single.__instance__ = this;
}

var s1 = new Single('1');
var s2 = new Single('2'); //What will happen here??

if (s1 === s2){
  console.log('true');
}

// How come
// s1.name is eq to s2.name
if (s1.name === s2.name){
 console.log('true');
}
