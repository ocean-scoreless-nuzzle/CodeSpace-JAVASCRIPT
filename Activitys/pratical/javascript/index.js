function change_text(new_string, ID){

	 html_tag = document.getElementById(ID) 
	if(html_tag!== null){html_tag.innerHTML += new_string;
		return true} else{
			console.log("no output made")
	return false
}} // if there is html element then return true

console.log("there is output")



let player1 = ""
function get_player1_input() {
	let player1 = prompt("enter your hand, 'R' for rock, 'P' for paper, and 'S' for scisors")
	if(player1 != null){
		return player1
		change_text("player 2 choose "+ player1)
		}
}

let player2 = ""
function get_player2_input() {
	let player2 = prompt("enter your hand, 'R' for rock, 'P' for paper, and 'S' for scisors")
	if(player2 != null){
		return player2
		change_text("player 2 choose "+ player2)
		}
}


function checkwin() {
	let P1 = get_player1_input()
	let P2 = get_player2_input()
	change_text("player 1 choose "+P1+"<br>"+"player 2 choose "+P2,"debug_item")
	if (did_Player1_win(P1,P2)) {
		change_text("player 1 has won","result")
	}

	if(did_Player1_lose(P1,P2)) {
		change_text("player 1 lost","result")
	}

	if(did_Player1_draw(P1,P2)){
		change_text("player 1 has entered a draw","result")
	}
}


function did_Player1_win(P1,P2){
	if (((P1 == "R") && (P2 == "S"))
		 || ((P1=="P")&&(P2=="R"))
		 || ((P1 == "S")&&(P2=="P"))
	)
	 {
	 	return true
	 }
	  else{
	  	return false
	  }	
}

function did_Player1_lose(P1,P2){
	if (((P1 == "R") && (P2 == "P"))
		 || ((P1=="P")&&(P2=="S"))
		 || ((P1 == "S")&&(P2=="R"))
		 )
		{
		 	return true
		 } else{
		 	return false
		 }
}

function did_Player1_draw(P1,P2) {
	if (P1 === P2) {return true} else {return false}
}