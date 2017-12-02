var fromstat= document.getElementById("from");
var tostat= document.getElementById("to");
var date= document.getElementById("date");
var aadhaar= document.getElementById("aadhaar");
var berth= $('#bersel').dropdown('get value');
var coach= $('#coachsel').dropdown('get value');
//var firebaseHeadingRef = firebase.database().ref().child("Heading/hello");

/*firebaseHeadingRef.on('value', function(datasnapshot){   //snapshot just not only keynames, but also iterators
	fireHeading.innerText = datasnapshot.val();			 //innerText is changing the heading everytime there is a change in a fireHeading id 
});*/
window.alert(coach);

function berth(n){
	berth = n;
}

function coachClass(x){
	cClass = x;
}

var passengerData = {
	"aadhaar": aadhaar,
	"berth_type":berth,
	"coach_type":coach,
	"date_of_journey":date,
	"from":fromstat,
	"to":tostat,
	"boarded":"false"
}
/*firebaseHeadingRef.on('value',snap => {
	fireHeading.innerText = JSON.stringfy(snap.val()), null, 3);
});*/
function submitClick(){

	var firebaseRef = firebase.database().ref().child('train');

	//var messageText = passengerData.value;

	firebaseRef.push('train').set(passengerData);  				//push() creates an new object everytime we click on submit button
}

database = firebase.database();

var ref = database.ref().child("train");
ref.on('value', getdata);

function getdata(data){
	/*var trainData = data.val();
	var keys = Object.keys("passanger");
	console.log(keys);
	//console.log(data.val());*/
	console.log(data.val());
}
