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
 * degatUp (augementation des dégats)
 * @access public
 * @var degatUp
 */   

private var degatUp:int;


/*
 * Référence au slider de VieSlider
 * @access public
 * @var VieSlider
 */                               
var XPSlider: Slider; 



                              
private var check: boolean = true;  
private var check2: boolean = true;  




function Start () {


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
	if ((experienceJoueur >= 100)&&(check==true)) 
	{
		for (var i = 0; i <=1; i++) {
			niveauJoueur=2;
			XPSlider.value = 0; 
			PlayerPrefs.SetInt("niveau", niveauJoueur);
			check = false;

		}
	}

	if ((experienceJoueur >= 400)&&(check2==true)) 
	{
		for (var y = 0; y <=1; y++) {
			niveauJoueur=3;
			XPSlider.value = 0; 
			PlayerPrefs.SetInt("niveau", niveauJoueur);
			check2 = false;

		}
	}

}

function augmenterExperience(xpGagnee:int)
{
	experienceJoueur = experienceJoueur+xpGagnee;
	PlayerPrefs.SetInt("experienceJoueur", experienceJoueur);
	XPSlider.value = experienceJoueur;

}