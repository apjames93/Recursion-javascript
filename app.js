let countDownFrom = (num) =>{
	// when the num is 0 stop the function return to break the function
	if(num === 0 ) return
	// log the num
	console.log(num);
	// once start from num and go down by 1
	countDownFrom(num -1);

}

countDownFrom(10)
