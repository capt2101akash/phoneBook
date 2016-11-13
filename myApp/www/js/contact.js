var storage = 'Contacts';
function getElementObject(){
	try{
		var contact = JSON.parse(window.localStorage.getItem(storage));
		if(contact === null){
			return [];
		}
		else{
			return contact;
		}
	}catch (e){
		return [];
	}
}
function addContact(name,number,img){
	if(img===undefined){
		img = '../img/default.png';
	}
	//console.log(img);
	var contacts = window.localStorage.getItem(storage);
	if(contacts===null)
	{
		contacts = [];
	}
	else{
		try{
			contacts = JSON.parse(contacts);
		}catch (e){
			return [];
		}	
	}
	var contact = {
		name: name,
		number: number,
		img: img
	};
	contacts.push(contact);
	updateContact(contacts);
	return true;
}
function getContact(label,value){
	var contacts = getElementObject();
	//return contacts;
	for(var i=0;i<contacts.length;i++){
		if(contacts[i][label] ===value){
			return contacts[i];
			//updateContact(contacts);
		}
	}
	return null;
}
function getContactByName(name){
	return getContact('name',name);
}

function getContactByNumber(number){
	return getContact('number',number);
}
function updateContact(contacts){
	contacts = JSON.stringify(contacts);
	window.localStorage.setItem(storage,contacts);
	return true;
}
function deleteContact(label,value){
	var contacts = getElementObject();
	for(var i=0;i<contacts.length;i++){
		if(contacts[i][label] === value){
			contacts.splice(i,1);
			updateContact(contacts);
			return;
		}
		//return contacts[i];
	}
}

function deleteContactByName(name){
	return deleteContact('name',name);
}
function deleteContactByNumber(number){
	return deleteContact('number',number);
}
function updateContactByName(name,number){
	var contacts = getElementObject();
	for(var i=0;i<contacts.length;i++){
		if(contacts[i].name===name){
			contacts[i].number = number;
			updateContact(contacts);
			return true;
		}
	}
	return false;
}
function deleteAll(){
	delete localStorage.Contacts;
}