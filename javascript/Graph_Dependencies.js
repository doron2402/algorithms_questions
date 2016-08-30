/*
  ********************************************************************************************

            THIS IS NOT WORKING - WORING PROGRESS

  ********************************************************************************************
*/
var map = {
  1: [3],
  2: [],
  3: [5],
  4: [1],
  5: [2,3]
};


// Expected Value
// [2,3,1,5,4];

/*  
  Steps
    - find the root (array length is 0);
    - build a graph
    - sort it by dependencies
*/

function Node(name) {
  this.name = name;
  this.edges = [];
};

Node.prototype.addEdge = function (node) {
  this.edges.push(node);
};

var Graph = [];
Object.keys(map).forEach(function(val) {
  Graph[val] = new Node(val);
});

Object.keys(map).forEach(function(val) {
  map[val].forEach(function(edge){
    Graph[val].addEdge(Graph[edge]);
  });
});

// Clear undefined and null
Graph = Graph.filter(function(value) {
  if (value && value !== null) {
    return value;
  }
});

var getFirstNode = function(graph) {
  var currentNode;
  graph.forEach(function(node) {
    if (node.edges.length === 0) {
      currentNode = node;
    }
  });
  return currentNode;
};

var resolve = function(graph) {
  var resolved = [];
  var node = getFirstNode(graph);
  node.edges.forEach(function(edge) {
      console.log('edge');
      console.log(edge);
    });
};

resolve(Graph);

var n = [1,2,3,4];
var m = {
  1: [4],
  2: [],
  3: [],
  4: [2,3]
};


// validate
var validateJobQueue = function(jobQueue) {
  validateSelfDependency(jobQueue);
  validateDependencies(jobQueue);
};

var validateSelfDependency = function(queue) {
  Object.keys(queue).forEach(function(value){
    if (queue[value].indexOf(parseInt(value)) !== -1) {
      throw Error("validateSelfDependency - Points to itself");
    }
  });
};

var validateDependencies = function(queue) {
  Object.keys(queue).forEach(function(value){
    queue[value].forEach(function(node) {
      if (queue[node].indexOf(parseInt(value)) !== -1) {
        throw Error("validateDependencies - Points Recursively");
      }
    });
  });
};

var run = function(n,m) {
  validateJobQueue(m);
  orderList(m, []); 
}

function orderList(list, orderList) {
  if (Object.keys(list).length === 0) {
    return orderList;
  }
  Object.keys(list).forEach(function(index){
    if (list[index].length === 0) {
      orderList.unshift(index);
      list[index] = null;
    }
  });
}

run(n,m);
  


// console.log(Graph);

