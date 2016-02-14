#pragma strict

 /*
 * Expérience du joueur
 * @access private
 * @var experienceJoueur
 */   

public var experienceJoueur:int;

 /*
 * niveau du joueur
 * @access public
 * @var niveauJoueur
 */   

public var niveauJoueur:int;


/*
 * Référence au script des dmgs de la boule
 * @access public
 * @var scBouleElectrique
 */   

public var prefabBouleElec:GameObject;

/*
 * Référence au script des dmgs de la boule
 * @access public
 * @var scBouleElectrique
 */   

private var scBouleElectrique:scBouleElectrique;

/*
 * degatUp (augementation des dégats)
 * @access public
 * @var degatUp
 */   

private var degatUp:int;



function Start () {

	scBouleElectrique = prefabBouleElec.GetComponent.<scBouleElectrique>();

	if (PlayerPrefs.HasKey("experienceJoueur"))
	{
		experienceJoueur = PlayerPrefs.GetInt('experienceJoueur'); 
	}
	else 
	{
		experienceJoueur = 0; 
	}

}

function Update () 
{
	if (experienceJoueur == 10) 
	{
		for (var i = 0; i <=1; i++) {
			niveauJoueur=1;
			degatUp = 10; 
			scBouleElectrique.SendMessageUpwards("augmenterDegats", degatUp , SendMessageOptions.DontRequireReceiver);
		}
	}

}

function augmenterExperience(xpGagnee:int)
{
	experienceJoueur = experienceJoueur+xpGagnee;
	PlayerPrefs.SetInt("experienceJoueur", experienceJoueur);

}