const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms * 1000));

const getStackTrace = (start = null, end = null) =>
{
	let stack = new Error().stack || '';

	stack = stack.split('\n').map((line) => line.trim());
	stack = stack.splice(stack[0] === 'Error' ? 2 : 1);

	if(start && end)
	{
		for(let i = start; i <= end; i += 1)
		{
			console.log(stack[i]);
		}
	}
	else if(start)
	{
		console.log(stack[start]);
	}
	else
	{
		console.log(stack);
	}
};

module.exports = {
	sleep,
	getStackTrace
};
