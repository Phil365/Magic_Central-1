#pragma strict

/*
 * Selection des personnages hero 1
 * @access public
 * @var hero1
 */   

public var hero1: GameObject;

/*
 * Selection des personnages hero2
 * @access public
 * @var hero2
 */   

public var hero2: GameObject;

/*
 * Selection des personnages hero3
 * @access public
 * @var hero3
 */   

public var hero3: GameObject;

/*
 * Affichage particule feu
 * @access public
 * @var particuleFeu
 */   

public var particuleFeu: GameObject;

/*
 * Affichage particule Électrique
 * @access public
 * @var particuleÉlectrique
 */   

public var particuleElectrique: GameObject;

/*
 * Affichage particule Combat
 * @access public
 * @var particuleCombat
 */   

public var particuleCombat: GameObject;

/*
 * Référence au slider de mana
 * @access public
 * @var ManaSlider
 */                               
var ManaSlider: Slider;    
/*
 * Référence au slider de VieSlider
 * @access public
 * @var VieSlider
 */                               
var VieSlider: Slider;    
/*
 * Référence au slider de VitesseSlider
 * @access public
 * @var VitsseSlider
 */                               
var VitesseSlider: Slider;    
/*
 * Référence au slider de DifficulteSlider
 * @access public
 * @var DifficulteSlider
 */                               
var DifficulteSlider: Slider;
/*
 * Texte décrivant l'attaque
 * @access public
 * @var attaqueTexte
 */       
public var attaqueTexte: Text;


private var heroChoisi : int = 1; // par défaut le héros 1 est sélectionner si utilisateur ne sélectionne personne 
function Start () {
	if (PlayerPrefs.HasKey("heroChoisi")){

	if(PlayerPrefs.GetInt('heroChoisi')==1){ChoisiHero1();}
	if(PlayerPrefs.GetInt('heroChoisi')==2){ChoisiHero2();}
	if(PlayerPrefs.GetInt('heroChoisi')==3){ChoisiHero3();}
	}else{hero1.SetActive(true);}
	ManaSlider.value = 5;
    VieSlider.value = 10;
    VitesseSlider.value = 10;
    DifficulteSlider.value = 6;
    particuleFeu.SetActive(true); //particule qui correspond au boule de feu
    particuleElectrique.SetActive(false); //particule qui correspond aux éclairs
    particuleCombat.SetActive(false); //particule qui correspond au corps a corps
    attaqueTexte.text = 'Boule de feu';
}

function Update () {
	if(Input.GetMouseButton(0)){
	transform.Rotate(new Vector3(0.0f,Input.GetAxis('Mouse X'),0.0f)); //permet de faire une rotation sur le héros 
	}
}

function ChoisiHero1(){ //choisi le premier héro et désactive les autres
//	Debug.Log('Hero 1');
	heroChoisi = 1;
	PlayerPrefs.SetInt('heroChoisi',heroChoisi); // enregistre le héros dans les préférences pour récupérer dans les autres scenes
	hero1.SetActive(true);
	hero2.SetActive(false);
	hero3.SetActive(false);
	ManaSlider.value = 5;
    VieSlider.value = 10;
    VitesseSlider.value = 10;
    DifficulteSlider.value = 6;
    particuleFeu.SetActive(true); //particule qui correspond au boule de feu
    particuleElectrique.SetActive(false); //particule qui correspond aux éclairs
    particuleCombat.SetActive(false); //particule qui correspond au corps a corps
    attaqueTexte.text = 'Boule de feu';
}

function ChoisiHero2(){
//	Debug.Log('Hero 2');
	heroChoisi = 2;
	PlayerPrefs.SetInt('heroChoisi',heroChoisi);
	hero1.SetActive(false);
	hero2.SetActive(true);
	hero3.SetActive(false);
	ManaSlider.value = 2;
    VieSlider.value = 6;
    VitesseSlider.value = 8;
    DifficulteSlider.value = 8;
    particuleFeu.SetActive(false); //particule qui correspond au boule de feu
    particuleElectrique.SetActive(true); //particule qui correspond aux éclairs
    particuleCombat.SetActive(false); //particule qui correspond au corps a corps
    attaqueTexte.text = 'Boule electrique';
}

function ChoisiHero3(){
//	Debug.Log('Hero 3');
	heroChoisi = 3;
	PlayerPrefs.SetInt('heroChoisi',heroChoisi);
	hero1.SetActive(false);
	hero2.SetActive(false);
	hero3.SetActive(true);
	ManaSlider.value = 8;
    VieSlider.value = 6;
    VitesseSlider.value = 4;
    DifficulteSlider.value = 10;
    particuleFeu.SetActive(false); //particule qui correspond au boule de feu
    particuleElectrique.SetActive(false); //particule qui correspond aux éclairs
    particuleCombat.SetActive(true); //particule qui correspond au corps a corps
    attaqueTexte.text = 'Corps a corps';
}
