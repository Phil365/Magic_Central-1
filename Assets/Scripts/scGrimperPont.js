#pragma strict

function Start () {

}

function Update () {

}

/*fonction pour surélever le perso lorsqu'il traverse un pont au niveau 3*/

function OnTriggerEnter(heros:Collider) {
	if (heros.tag == "Hero") {
		heros.transform.rotation.x+= 3;
	}
}

function OnTriggerExit(heros:Collider) {
	if (heros.tag == "Hero") {
		heros.transform.rotation.x-= 3;
	}
}