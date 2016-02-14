#pragma strict

/*
 * Contient le UI panneau de vente de potions
 * @access public
 * @var panneauPotions
 */
public var panneauTuto:GameObject;

/*
 * variable qui verifie l'entrée dans le magasin 
 * @access private
 * @var trig init à false
 */
private var trig=false;

/*
 * variable qui fait en sorte que l'on active une seule fois la bulle de tuto
 * @access private
 * @var trig init à false
 */
private var activer=false;

/*
 * variable qui fait en sorte que l'on active une seule fois la bulle de tuto
 * @access private
 * @var trig init à false
 */
private var deuxiemefois=true;

/*
 * gameObject magasin
 * @access public
 * @var magasinPotion
 */

public var personnage:GameObject;


 /*
 * Contient le script pour accéder au tir du héros pour désactiver lorsque canvas actif
 * @access private
 * @var tirHero
 */
private var tirHero:scDeplacementTirHero;


function OnTriggerEnter(trigger:Collider) 
{
			trig = true;
			activer = true;
			//tirHero.enabled=false;//désactive le tir du héro
}


function Start () {
	
	// Recuperation du script de tir du personnage
	tirHero = personnage.GetComponent.<scDeplacementTirHero>(); 
}

function Update () {
	if (trig == true && activer== true && deuxiemefois ==true && (gameObject.name == "trig_tuto1" || gameObject.name == "trig_tuto1 (1)")) 
	{
		ouvrirPanneauTuto();
	}
}

//Ouverture du panneau de vente de potions
function ouvrirPanneauTuto() 
{
    panneauTuto.SetActive(true);
    Time.timeScale = 0;
    activer = false;
    deuxiemefois = false;
    tirHero.enabled=false;//désactive le tir du héro
}

//fermer le panneau de vente de potions
function fermerPanneauTuto() 
{
    panneauTuto.SetActive(false);
     Time.timeScale = 1;
     trig = false;
     tirHero.enabled=true;//active le tir du héro
    
}



