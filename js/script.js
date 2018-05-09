//alert("hi");

var numOfPhotos = 7;
var currentPic = 0;

function hidePhotos() {

	var numOfPhotos = 7;

	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "img" + p;
		document.getElementById(photoID).style.display = "none";
	}
}

function doRightClick()
{ 
	//alert("you clicked the right arrow");
	var photoID = "img" + currentPic;
	document.getElementById(photoID).style.display = "none";

	currentPic--;
	if(currentPic < 0)
	{	currentPic = numOfPhotos-1;}

	photoID = "img" + currentPic;
	document.getElementById(photoID).style.display = "block";
}

function doLeftClick()
{ 
	//alert("you clicked the left arrow");
	var photoID = "img" + currentPic;
	document.getElementById(photoID).style.display = "none";

	currentPic++;
	if(currentPic >= numOfPhotos)
	{	currentPic = 0;}

	photoID = "img" + currentPic;
	document.getElementById(photoID).style.display = "block";
}


hidePhotos();