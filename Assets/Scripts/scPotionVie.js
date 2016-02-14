#pragma strict

/*
 * GameObject heros
 * @access private
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

	if (autre.tag == "Hero" && scInventaireHeros.nbPotionsVie < 3) {
		scInventaireHeros.SendMessageUpwards("augmenterPotionVie", 1, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}

}
