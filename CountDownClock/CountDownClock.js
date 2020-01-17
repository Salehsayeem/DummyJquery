var countDownDate =  new Date("Jan 1, 2021 0:0:0").getTime();
var interval = setInterval(function(){

	var nowDate =  new Date().getTime();
	var distanceOfDate = countDownDate - nowDate;

	var days= Math.floor(distanceOfDate/(1000 * 60 * 60 *24));
	var hours = Math.floor((distanceOfDate%(1000 * 60 * 60 *24))/(1000 * 60 * 60));
	var minutes = Math.floor((distanceOfDate%(1000 * 60 * 60 ))/(1000*60));
	var seconds = Math.floor((distanceOfDate%(1000 * 60))/1000);

	document.getElementById("Timer").innerHTML = days+" d <br />" + hours + " h <br />" + minutes +" m <br />" + seconds +" s";

	if(distanceOfDate < 0 ){
		clearInterval(interval);

		document.getElementById("Timer").innerHTML ="Expired";
	} 
}
,1000);