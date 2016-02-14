import UnityEngine.UI;
 /*
 * Viedisponible pour le heros
 * @access public
 * @var Viedisponible
 */                          
var Viedisponible : int;      
/*
 * Manadisponible pour le heros
 * @access public
 * @var Manadisponible
 */                          
var Manadisponible : int;     
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
 * Vitesse de déplacement du hero 
 * @access public
 * @var vitesse
 */

public var vitesse:float = 3; 

 /*
 * Vector3 direction du déplacement
 * @access private
 * @var deplacement
 */

private var deplacement:Vector3;

 /*
 * Accès au rigidbody du joueur
 * @access private
 * @var joueurRigidbody
 */
private var joueurRigidbody:Rigidbody;

 /*
 * Récupération du layer du sol
 * @access private
 * @var masqueSol
 */

private var masqueSol:int;

 /*
 * Définition de la longueur du rayon de la caméra
 * @access private
 * @var camRayLength
 */

private var camRayLength:float = 100;
/*
 * Définition de la reserve de vie du joueur
 * @access public
 * @var vie
 */

public var vie:int = 100;
 /*
 * Définition de la reserve de mana du joueur
 * @access public
 * @var mana
 */

public var mana:int = 60;


 /*
 * Projectile (attaque magique du personnage)
 * @access public
 * @var projectile
 */

public var projectile:GameObject;

 /*
 * Projectile (attaque magique du personnage)
 * @access public
 * @var nouveauProjectile
 */

private var nouveauProjectile:GameObject;

 /*
 * force appliquée au projectile
 * @access public
 * @var force
 */

private var force:int=100;

 /*
 * Qte de mana utilisé pour le Pouvoir
 * @access public
 * @var force
 */

private var coupPouvoir:int=10;
private var loopHandle: boolean = true;
private var saut= false;
private var gestionPotion:scGestionInventaire;
private var manatotal:int=0;
private var vieTotal:int=0;
var DamageImage:UI.Image;
//var deathclip : AudioClip;
var flashSpeed : float=5f;
var flashColour : Color = new Color(1f,0f,0f,0.1f);
//private var playerAudio:AudioSource;
private var estMort: boolean;
private var endommage : boolean;

 /*
 * Source : https://unity3d.com/learn/tutorials/projects/survival-shooter/player-character?playlist=17144
 * Rotation suivant l'endroit du curseur de la souris
 */

function Start ()
 {//Time.timeScale = 1;
	 while(loopHandle){
	 regenMana();
	
	  yield WaitForSeconds(2);
	 }
 }

function Awake ()
{//playerAudio = GetComponent(AudioSource);	
	gestionPotion = GetComponent(scGestionInventaire);
    // On récupere le layer qui corresponds au sol
    masqueSol = LayerMask.GetMask ("sol");
    // On récupere le ridigbody du joueur
    joueurRigidbody = GetComponent (Rigidbody);
    Manadisponible=mana;
    Viedisponible=vie;
}


function FixedUpdate ()
{
    //Récuperation des touches permettant de deplacer le hero
    var haut:float = Input.GetAxisRaw ("Horizontal");
    var bas:float = Input.GetAxisRaw ("Vertical");

    
    Deplacer(haut, bas);


}

function Update(){

  Tourner();


  if(endommage)
  {
  	DamageImage.color = flashColour;
  }else {
  	DamageImage.color = Color.Lerp(DamageImage.color, Color.clear, flashSpeed * Time.deltaTime);
  }
 if(Input.GetKeyDown (KeyCode.E) && manatotal>0 && Manadisponible<60){
    Manadisponible+=20;
   	gestionPotion.augmenterPotionMana(-1);
    }
     if(Input.GetKeyDown (KeyCode.Q) && vieTotal>0 && Viedisponible<100){
    Viedisponible+=20;
   	gestionPotion.augmenterPotionVie(-1);
    }
    ManaSlider.value = Manadisponible;
    VieSlider.value = Viedisponible;
    endommage= false;
    if(Input.GetKeyDown (KeyCode.P)){ // pour reset les player pref pour test
    PlayerPrefs.DeleteAll();
    }
}


function Deplacer (haut : float, bas : float)
{
	// On set le vecteur en ce basant sur les axes Horizontaux et Verticaux
    deplacement.Set (haut, 0f, bas);

    deplacement = deplacement.normalized * vitesse * Time.deltaTime;

    // Déplacement du hero
    joueurRigidbody.MovePosition (transform.position + deplacement);



}


function Tourner ()
{
    // Création du rayon partant de la position de la position de la caméra vers la souris
    var camRay : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);

    // Création d'une variable permettant de vérifier si le sol a été touché
    var solTouche : RaycastHit;

 
    if(Physics.Raycast (camRay, solTouche, camRayLength, masqueSol))
    {
       
        var joueurSouris : Vector3  = solTouche.point - transform.position;


        joueurSouris.y = 0f;

        
        var nouvelleRotation : Quaternion = Quaternion.LookRotation (joueurSouris);

        // Set the player's rotation to this new rotation.
        joueurRigidbody.MoveRotation(nouvelleRotation);
   if (Input.GetButtonDown('Fire1'))
        {
			if(Manadisponible>=10){
				if(this.projectile){					// Vecteur qui part de la position du joueur
					var position:Vector3=transform.position;
					position.y +=0.75;
					Debug.Log("joueurSouris:" + joueurSouris);
					//Instantiation des projectiles 
					nouveauProjectile = Instantiate(projectile, position, transform.rotation);
					nouveauProjectile.GetComponent.<Rigidbody>().AddForce(joueurSouris * force);
					Manadisponible-=10;
	        		if(Manadisponible <=0)
		        	{
		       			 Manadisponible = 0;
		        	}
		        	ManaSlider.value = Manadisponible;
				}	
			}
		}


    }
}
function regenMana(){
	if(Manadisponible < 60){

	Manadisponible += 10;
	}

	else if(Manadisponible >= 61){

	Manadisponible = 60;
	}

}

function MettreAJourTotal(nbPotionsMana:uint)
{
	manatotal=nbPotionsMana;

}

function MettreAJourTotalVie(nbPotionsVie:uint)
{
	vieTotal=nbPotionsVie;

}
public function PrendDamage(quantite:int)
{	
	
	endommage = true;

	Viedisponible -= quantite;
	VieSlider.value = Viedisponible;
//playerAudio.play();

	if(Viedisponible <= 0 && !estMort)
	{
		Mort();
	}


}

function Mort()
{
Application.LoadLevel (8);
estMort=true;
//playerAudio.clip = deathclip;
//playerAudio.Play ();
}