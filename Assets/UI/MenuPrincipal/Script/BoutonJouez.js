#pragma strict
/*
 *  Bouton Cotinuer
 * @access public
 * @var ContinuerBouton
 */   
public var continuerBouton:Button;
/*
 *  GameObject pour choisir option de choisir perso
 * @access public
 * @var ChoisirPerso
 */   
public var ChoisirPerso: GameObject;
/*
 *  Bouton lancer la partie
 * @access public
 * @var lancerBouton
 */   
public var lancerBouton: Button;

function Start () {
//Time.timeScale = 1;
ChoisirPerso.SetActive(false); // on ne peut pas choisir de perso sans avoir fait nouvelle partit
lancerBouton.interactable=false; //lancer est a false on ne peut démarrer sans avoir choisi
}

function Update () {
	if (PlayerPrefs.HasKey("nbPotionsVie") || PlayerPrefs.HasKey("nbPotionsMana") ||  PlayerPrefs.HasKey("Or") ){ // si le joueur a des playerPrefs il peut continuer
	continuerBouton.interactable=true; //il peut lancer la partit 
	ChoisirPerso.SetActive(false); //il ne peut pas choisir d'autre perso
	}else{continuerBouton.interactable=false;} // il ne peut pas continuer
	if (PlayerPrefs.HasKey("heroChoisi")){ // si le joueur a des playerPrefs il peut continuer
	lancerBouton.interactable=true;// le bouton lancer est  sélectionnable
	}else lancerBouton.interactable=false; // le bouton lancer n'est pas sélectionnable
}

function Jouez () {
ChoisirPerso.SetActive(true);
PlayerPrefs.DeleteAll();//suprime tout les playerpref


}

function Rejouez () {
Application.LoadLevel (0);
}

function Quitter () {
Application.Quit();
}

function Continuer () {
Application.LoadLevel (1);
}

function Lancer () {
Application.LoadLevel (1);
}
