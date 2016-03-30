var compute;
compute = function(x,y){
	var count = 0;

	if (x.length !== y.length) throw new Error('DNA strands must be of equal length.');

	for (var i = x.length - 1; i >= 0; i-- ){

		if (x.charAt(i) !== y.charAt(i)) count ++;
	};

	return count;
	};

module.exports = {
	compute: compute,
};

Code example from: github.com/molovo/exercism/blob/master/javascript/hammming/
