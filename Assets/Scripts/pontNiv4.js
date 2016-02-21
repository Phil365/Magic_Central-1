/*
 * Pour surélever un personnage s'il traverse un pont au niveau 4
 * @access public
 * @var tempEntreAttaque
 */   

#pragma strict

function Start () {

}

function Update () {

}


//Si le héro rentre dans le trigger du pont, il s'élève.
function OnTriggerEnter(heros:Collider) {
	if (heros.tag == "Hero") {
		heros.transform.position.y+= 1;
	}
}

//Si le héro rentre dans le trigger du pont, il s'abaisse.
function OnTriggerExit(heros:Collider) {
	if (heros.tag == "Hero") {
		heros.transform.position.y-= 1;
	}
}