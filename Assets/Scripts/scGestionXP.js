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


/*
 * GameObject de level up
 * @access public
 * @var fxlevelup
 */   

public var fxlevelup: GameObject;
                              
private var check: boolean; 
private var check2: boolean;  

private var positionModif:Vector3;
function Awake() 
{
	check = true;
	check2 = true;
}
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
	if ((experienceJoueur >= 200)&&(check==true)) 
	{
		for (var i = 0; i <=1; i++) {
			niveauJoueur=2;
			positionModif = Vector3(transform.position.x, 0, transform.position.z);
			XPSlider.value = 0;
			XPSlider.maxValue = 400; 
			PlayerPrefs.SetInt("niveau", niveauJoueur);
			check = false;
			if ((experienceJoueur >= 100)&&(experienceJoueur <= 120))
			{
				Instantiate(this.fxlevelup, positionModif, fxlevelup.transform.rotation);
			}

		}
	}

	if ((experienceJoueur >= 500)&&(check2==true)) 
	{
		for (var y = 0; y <=1; y++) {
			niveauJoueur=3;
			positionModif = Vector3(transform.position.x, 0, transform.position.z);
			Instantiate(this.fxlevelup, positionModif, fxlevelup.transform.rotation);
			XPSlider.value = 0; 
			PlayerPrefs.SetInt("niveau", niveauJoueur);
			check2 = false;
			if ((experienceJoueur >= 400)&&(experienceJoueur <= 420))
			{
				Instantiate(this.fxlevelup, positionModif, fxlevelup.transform.rotation);
			}

		}
	}

}

function augmenterExperience(xpGagnee:int)
{
	experienceJoueur = experienceJoueur+xpGagnee;
	PlayerPrefs.SetInt("experienceJoueur", experienceJoueur);
	XPSlider.value = experienceJoueur;

}