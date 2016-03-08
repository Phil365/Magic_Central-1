#pragma strict

/*
 * acces à l'objet Pont
 * @access public
 * @var pont
 */

public var pont:GameObject;

 /*
 * acces au script gestion inventaire
 * @access private
 * @var scPont
 */

private var scPont:scPont;

function Start () {
	// Recuperation du script de gestion de l'inventaire du personnage
	scPont = pont.GetComponent.<scPont>();
}

function Update () {

}

/*fonction pour éviter que le perso monte sur le pont lorsqu'il passe en dessous */

function OnTriggerEnter(heros:Collider) {
	if (heros.tag == "Hero") {
		scPont.pontOK = false;
	}
}

function OnTriggerExit(heros:Collider) {
	if (heros.tag == "Hero") {
		scPont.pontOK = true;
	}
}