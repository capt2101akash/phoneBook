function checkAndAdd(){
	var nameObj = document.getElementById('userName'),
		numberObj = document.getElementById('userNumber'),
		imageObj = document.getElementById('userImage');
	//console.log(number);
	var name = nameObj.value,
		number = numberObj.value,
		image = imageObj.value;
	//alert(image);
	if(!name || !number){
		alert("Enter Valid Name and Number");
	}
	else{
		addContact(name,number,image);
		alert ("Contact with name "+name+" added successfully");
		nameObj.value = "";
		numberObj.value = "";
		imageObj.value = "";
	}
}
function reload(){
	location.reload();
}
function deleteContact(){
	
}