#pragma strict

/*
 * Vérification de montée sur le pont
 * @access public
 * @var pontOK
 */

 public var pontOK:boolean = true;

function Start () {

}

function Update () {

}

/*fonction pour surélever le perso lorquil traverse un pont*/

function OnTriggerEnter(heros:Collider) {
	if (heros.tag == "Hero" && pontOK) {
		heros.transform.position.y+= 2.09;
	}
}

function OnTriggerExit(heros:Collider) {
	if (heros.tag == "Hero" && pontOK) {
		heros.transform.position.y-= 2.09;
	}
}