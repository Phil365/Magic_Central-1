#pragma strict

/*
 * GameObject correspondant au hero choisi
 * @access public
 * @var Nakiya
 */   

public var Nakiya: GameObject;

/*
 *  GameObject correspondant au hero choisi
 * @access public
 * @var Kaseem
 */   

public var Kaseem: GameObject;

/*
 *  GameObject correspondant au hero choisi
 * @access public
 * @var Kayden
 */   

public var Kayden: GameObject;
var heroEnregistrer : int =1; // si le joueur ne sélectionne personne il à par defaut le héros 1
function Start () {

}

function Awake () {
heroEnregistrer = PlayerPrefs.GetInt('heroChoisi'); //va cherhcer le héros choisi dans le menu


if (heroEnregistrer == 1){
	
	Destroy(Kaseem); // détruit les héros inutile dans le gameobject pour optimiser le jeu
	Destroy(Kayden);
}

if (heroEnregistrer == 2){
	Destroy(Nakiya);
	Destroy(Kayden);


}

if (heroEnregistrer == 3){
	Destroy(Nakiya);
	Destroy(Kaseem);
}





}