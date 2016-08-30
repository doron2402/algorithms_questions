/*
	You have a collection of jobs,
	return an array with the order that the jobs need to run
*/

var jobs = [
	{
		name: 0,
		dependencies: [1,2]
	},{
		name: 1,
		dependencies: [4]
	},{
		name: 2,
		dependencies: []
	},{
		name: 3,
		dependencies: []
	},{
		name: 4,
		dependencies: [2,3]
	}];

// @input: collection of jobs
// @output: array [Int] - should be [2,3,4,1,0]
function run(jobQueue) {
	// Validate
	validateJobQueue(jobQueue);
	var orderArray = [];
	console.log(jobQueue);
	jobQueue.sort(orderByDependencies);
	console.log(jobQueue);
}

var orderByDependencies = function(a,b) {
	if (a.dependencies.length === 0) {
		return -1;
	} else if (b.dependencies.length === 0) {
		return 1;
	} else {
		if (a.dependencies.indexOf(b.name) !== -1) {
			return -1;
		} else {
			return 1;
		}
	}
}

var validateJobQueue = function(jobQueue) {
	validateSelfDependency(jobQueue);
	validateDependencies(jobQueue);
};

var validateDependencies = function(jobQueue) {
	Object.keys(jobQueue).forEach(function(val) {
		var currentJob = jobQueue[val].name;
		jobQueue[val].dependencies.forEach(function(jobName){
			if (jobQueue[jobName].dependencies.indexOf(currentJob) !== -1) {
				console.error('\n\nJob: ' + currentJob + ' AND Job: ' + jobQueue[jobName].name + '\nPoints to each other.\n\n');
				throw new Error("Recursive reference");
			}
		});
	});
};

var validateSelfDependency = function(jobQueue) {
	Object.keys(jobQueue).forEach(function(val) {
		if (jobQueue[val].dependencies.indexOf(jobQueue[val].name) !== -1) {
			console.error('\n\nJob name: ' + jobQueue[val].name + ' Point to itself!!\n\n');
			throw new Error("Job can't points to itself!");
		}
	});
};

run(jobs);
