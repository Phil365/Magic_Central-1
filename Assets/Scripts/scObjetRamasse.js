#pragma strict

/*
 * GameObject des potions de vie
 * @access public
 * @var potionVie
 */   

public var potionVie: GameObject;

/*
 * GameObject des potions de mana
 * @access public
 * @var potionMana
 */   

public var potionMana: GameObject;

/*
 * GameObject d'or
 * @access public
 * @var tasOr
 */   

public var tasOr: GameObject;

function Start () {

}

function Update () {

}

function InstancierObjet (type) {

	switch (type) {

		case "potionVie":
		Instantiate(this.potionVie, transform.position, transform.rotation);
		break;

		case "potionMana":
		Instantiate(this.potionVie, transform.position, transform.rotation);
		break;

		case "tasOr" :
		Instantiate(this.tasOr, transform.position, transform.rotation);
		break;
	}


}