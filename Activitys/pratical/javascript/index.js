function change_text(new_string, ID){

	var html_tag = document.getElementById(ID) 
	if(html_tag!== null){html_tag.innerHTML = new_string;
		return true} else{
			console.log("no output made")
	return false
}} // if there is html element then return true

console.log("there is output")