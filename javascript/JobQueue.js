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
	}, {
		name: 5,
		dependencies: [4]
	}];

// @input: collection of jobs
// @output: array [Int] - should be [2,3,4,1,0]
function run(jobQueue) {
	// Validate
	validateJobQueue(jobQueue);
	
	
	jobQueue.sort(sortByDependencies);
	var completeJobs = Object.keys(jobQueue).map(function(val){
		if (jobQueue[val].dependencies.length === 0) {
			return jobQueue[val].name;
		}
	}, []).filter(function(x) {
		if (x && x !== null) {
			return x;
		}
	});
	
	isComplete = false;
	while(!isComplete) {
		Object.keys(jobQueue).forEach(function(index) {
			if (completeJobs.indexOf(parseInt(jobQueue[index].name)) === -1 && 
					baseContainsArray(completeJobs, jobQueue[index].dependencies)
				){
					completeJobs.push(parseInt(jobQueue[index].name));
			}
			if (Object.keys(jobQueue).length === completeJobs.length){
				isComplete = true;
			}
		});
	}
	

	console.log(completeJobs);
}

var sortByDependencies = function(a,b) {
	if (a.dependencies.length > b.dependencies.length) {
		return 1;
	} else if (a.dependencies.length < b.dependencies.length) {
		return -1;
	} else {
		return 0;
	}
};

var baseContainsArray = function(base, compare) {
	var contains = true;
	compare.forEach(function(val) {
		if (base.indexOf(val) === -1) {
			contains = false;
		}
	});
	return contains;
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
