#pragma strict
@script RequireComponent(Animator)

/*
 * vie des Minions
 * @access public
 * @var vieMinion
 */   

public var vieMinion:float;

/*
 * mana des minions
 * @access public
 * @var manaMinion
 */   

public var manaMinion:float;

/*
 * Degats des minions
 * @access public
 * @var degatMinion
 */   

public var degatMinion:float;

/*
 * Référence au script de gestion des objets
 * @access public
 * @var scObjetRamasse
 */   

private var scObjetRamasse:scObjetRamasse;

/*
 * Variable d'expérience gagnée
 * @access public
 * @var xpGagnee
 */   

public var xpGagnee:int = 10;

/*
 * Hero
 * @access public
 * @var Hero
 */   

public var Hero:GameObject;

/*
 * Référence au script de gestion d'expérience
 * @access public
 * @var scGestionXP
 */   
 private var scGestionXP:scGestionXP;

 /*
 * Animateur
 * @access public
 * @var animateur
 */   
public var animateur:Animator;



function Start () {

	scObjetRamasse = GetComponent.<scObjetRamasse>();
	scGestionXP = Hero.GetComponent.<scGestionXP>();



		 if (Application.loadedLevel == 3) 
		 {
		 	xpGagnee = 10;
		 }
		 if (Application.loadedLevel == 4) 
		 {
		 	xpGagnee = 20;
		 }
		 if (Application.loadedLevel == 5) 
		 {
		 	xpGagnee = 30;
		 }
		 if (Application.loadedLevel == 6) 
		 {
		 	xpGagnee = 40;
		 }
		 if (Application.loadedLevel == 7) 
		 {
		 	xpGagnee = 50;
		 }

}

function Update () {
	if (vieMinion <=0) {

		scGestionXP.SendMessageUpwards("augmenterExperience", xpGagnee , SendMessageOptions.DontRequireReceiver);

		animateur.SetBool('mort', true);
		Destroy(this.gameObject);

		//Si l'ennemi meurt on définit l'objet gagné aléatoirement
		var hasard = Random.Range(1, 6);
		switch (hasard) {
			case 1:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "potionVie", SendMessageOptions.DontRequireReceiver);
			break;
			case 2:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 3:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 4:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 5:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "tasOr", SendMessageOptions.DontRequireReceiver);
			break;
			case 6:
			scObjetRamasse.SendMessageUpwards("InstancierObjet", "potionMana", SendMessageOptions.DontRequireReceiver);
			break;
		}

	}
}

function diminuerVie(nbDegat:float) {
	vieMinion-=nbDegat;
}