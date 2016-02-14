#pragma strict

/*
 * GameObject hero
 * @access public
 * @var heros
 */   

public var heros:GameObject;

/*
 * nombre de pièces d'or
 * @access public
 * @var nbOr
 */   

public var nbOr:int;

/*
 * Référence au script de gestion d'inventaire
 * @access private
 * @var scInventaireHeros
 */   

private var scInventaireHeros:scGestionInventaire;

function Start () {
	scInventaireHeros = heros.GetComponent.<scGestionInventaire>();
}

function Update () {
	
}

function OnTriggerEnter (autre : Collider) {

	if (autre.gameObject.tag == "Hero") {
		scInventaireHeros.SendMessageUpwards("augmenterOr", nbOr, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}

}