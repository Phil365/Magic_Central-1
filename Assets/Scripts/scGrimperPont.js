#pragma strict

function Start () {

}

function Update () {

}

/* fonction pour faire une rotation du personnage en X lorsqu'il traverse le pont final au niveau 4 */

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