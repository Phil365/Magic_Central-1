#pragma strict

/*
 * gameObject heros
 * @access public
 * @var heros
 */ 

public var heros:GameObject;

/*
 * Référence au script de gestion d'inventaire du hero
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

	if (autre.tag == "Hero" && scInventaireHeros.nbPotionsMana < 3) {
		scInventaireHeros.SendMessageUpwards("augmenterPotionMana", 1, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}

}
