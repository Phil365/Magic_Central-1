import UnityEngine.UI;
@script RequireComponent(Animator)

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

public var projectileElectrique:GameObject;

 /*
 * Projectile (attaque magique du personnage)
 * @access public
 * @var projectile
 */

public var projectileFeu:GameObject;

 /*
 * Projectile (attaque magique du personnage)
 * @access public
 * @var nouveauProjectile
 */

private var nouveauProjectile:GameObject;

/*
 * animator des héros
 * @access public
 * @var animateur
 */

public var animateur:Animator; 

/*
 * Fait référence au script de Gestion des persos
 * @access public
 * @var scGestionPerso
 */

 private var scGestionPerso:scGestionPersonnageChoisi;

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

private var loopHandle: boolean = true;


 /*
 * Vérification du niveau
 * @access public
 * @var verifNiveau
 */

private var verifNiveau: boolean;

 /*
 * Référence au script de gestion d'inventaire
 * @access public
 * @var gestionPotion
 */

private var gestionPotion:scGestionInventaire;

 /*
 * Nombre de potions de mana
 * @access public
 * @var manatotal
 */

private var manatotal:int=0;

 /*
 * Nombre de potions de vie
 * @access public
 * @var vieTotal
 */

private var vieTotal:int=0;

 /*
 * Image des dégats
 * @access public
 * @var DamageImage
 */

var DamageImage:UI.Image;

 /*
 * Vitesse du clignotement des dégats
 * @access public
 * @var flashSpeed
 */

var flashSpeed : float=5f;

 /*
 * Couleur des dmgs
 * @access public
 * @var flashColour
 */

var flashColour : Color = new Color(1f,0f,0f,0.1f);

 /*
 * Vérification de la vie du hero
 * @access public
 * @var estMort
 */

private var estMort: boolean = false;

 /*
 * Vérification des dmgs
 * @access public
 * @var endommage
 */

private var endommage : boolean;

 /*
 * playerPrefs du héros enregistré
 * @access public
 * @var heroEnregistrer
 */

private var heroEnregistrer:int;

/*
 * hitbox du coup de poing de Kayden
 * @access public
 * @var coupDePoing
 */

public var coupDePoing:GameObject;
/*
 * Verifie le heroActif
 * @access private
 * @var checkHeroActif
 */
private var checkHeroActif : boolean = true; 
 /*
 * Particule quand le personnage apparait dans un niveau
 * @access public
 * @var effetspawn
 */

public var effetspawn:GameObject;
/*
 * Curseur d'attaque
 * @access public
 * @var AttaqueCurseur
 */       
public var AttaqueCurseur: Texture2D;
/*
 * offset pour le curseur
 * @access public
 * @var decalage
 */       
public var decalage: Vector2 = Vector2.zero;
/*
 * Variable pour la caméra a utiliser pour le raycast du curseur
 * @access public
 * @var maCamera
 */       
public var maCamera: Camera;
 /*
 * Source : https://unity3d.com/learn/tutorials/projects/survival-shooter/player-character?playlist=17144
 * Rotation suivant l'endroit du curseur de la souris
 */

 /*
 * Source des effets sonores 
 * @access public
 * @var sourceSonore
 */

 public var sourceSonore:AudioSource;

 /*
 * Effets sonores 
 * @access public
 * @var sonOr sonBoire
 */

public var sonBoire:AudioClip;
/*
 * Contient le UI panneau quand on presse Escape
 * @access public
 * @var panneauEscape
 */
public var panneauEscape:GameObject;
/*
 * Si menu escape est ouvert on ne peut pas tirer
 * @access private
 * @var peutTirer
 */
private var peutTirer : boolean = true; 

function Start ()
 {	Instantiate(effetspawn, transform.position, effetspawn.transform.rotation);//instantie particule quand le personnage spawn dans un niveau
	scGestionPerso = GetComponent.<scGestionPersonnageChoisi>();
	verifNiveau = true;

 	 if ((PlayerPrefs.HasKey("heroChoisi"))) 
 	 {
 	 	heroEnregistrer = PlayerPrefs.GetInt('heroChoisi');
 	 }

 //Time.timeScale = 1;
	 while(loopHandle)
	 {
	 regenMana();
	  yield WaitForSeconds(2);
	 }

	  // Mise en place des HP et points de mana en fonction du niveau au Start.
	 if (PlayerPrefs.HasKey("niveau"))
	 {
		if (PlayerPrefs.GetInt('niveau') == 2)
		{
			Viedisponible = 200;
			Manadisponible = 120;
			ManaSlider.MaxValue = Manadisponible;
            VieSlider.MaxValue = Viedisponible;

		}

		// lvl 3
		if (PlayerPrefs.GetInt('niveau') == 3) 
		{
			Viedisponible = 300;
			Manadisponible = 200;
			ManaSlider.MaxValue = Manadisponible;
            VieSlider.MaxValue = Viedisponible;
		}

	 }

	 	this.maCamera = GetComponent.<Camera>();//ajout de la camera dans la variable 
 }

function Awake ()
{
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

	//if(checkHeroActif == true) 
	//{	
	//	Debug.Log(this.gameObject.GetComponentInChildren(Animator));
		animateur = this.gameObject.GetComponentInChildren(Animator);
		checkHeroActif = false;
	//}



  Tourner();


  if(endommage)
  {
  	DamageImage.color = flashColour;
  }else {
  	DamageImage.color = Color.Lerp(DamageImage.color, Color.clear, flashSpeed * Time.deltaTime);
  }
 if(Input.GetKeyDown (KeyCode.E) && manatotal>0 && Manadisponible < ManaSlider.maxValue){
 	sourceSonore.clip = sonBoire;
	sourceSonore.Play();
    Manadisponible+=20;
   	gestionPotion.augmenterPotionMana(-1);
    }
     if(Input.GetKeyDown (KeyCode.Q) && vieTotal>0 && Viedisponible < VieSlider.maxValue){
     sourceSonore.clip = sonBoire;
	 sourceSonore.Play();
    Viedisponible+=20;
   	gestionPotion.augmenterPotionVie(-1);
    }
    ManaSlider.value = Manadisponible;
    VieSlider.value = Viedisponible;
    endommage= false;
    if(Input.GetKeyDown (KeyCode.P)){ // pour reset les player pref pour test
    PlayerPrefs.DeleteAll();
    }


     // Mise en place des HP et points de mana en fonction du niveau dans le update au cas ou 
     // le hero lvl up dans le niveau
	 if (PlayerPrefs.HasKey("niveau"))
	 {
		if ((PlayerPrefs.GetInt('niveau') == 2)&&(verifNiveau == true))
		{
			Viedisponible = 200;
			Manadisponible = 120;
			ManaSlider.maxValue = Manadisponible;
            VieSlider.maxValue = Viedisponible;
			verifNiveau = false; 
		}

		// lvl 3
		if ((PlayerPrefs.GetInt('niveau') == 3)&&(verifNiveau == true)) 
		{
			Viedisponible = 300;
			Manadisponible = 200;
			ManaSlider.maxValue = Manadisponible;
            VieSlider.maxValue = Viedisponible;
			verifNiveau = false; 
		}

	 }
	 	var ray: Ray = maCamera.ScreenPointToRay(Input.mousePosition);//variable pour le raycast et la souris
		var layerMask = 1 << 10; // inclusion des layers des ennemis
		var infoCible:RaycastHit;// info de la cible
		if(Physics.Raycast(ray, infoCible, Mathf.Infinity, layerMask)){//si le curseur est sur l'ennemis
			Cursor.SetCursor(AttaqueCurseur,decalage, CursorMode.Auto);//change le curseur en arme
			}else{
			Cursor.SetCursor(null,decalage, CursorMode.Auto);//curseur deviens par défaut
			}
			if(Input.GetKeyDown (KeyCode.Escape)){
			//Application.LoadLevel (0);
			Time.timeScale = 0;
			panneauEscape.SetActive(true);
    		peutTirer=false;//désactive le tir du héro Si menu escape est ouvert
			}
		}


function Deplacer (haut : float, bas : float)
{
	// On set le vecteur en ce basant sur les axes Horizontaux et Verticaux
    deplacement.Set (haut, 0f, bas);

    deplacement = deplacement.normalized * vitesse * Time.deltaTime;
    var vitessePerso:float = deplacement.magnitude;
    // Déplacement du hero
    animateur.SetFloat('court', vitessePerso);

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
        {if(peutTirer==true){
			if(Manadisponible>=10){
				if(this.projectileElectrique){
					// Vecteur qui part de la position du joueur
					var position:Vector3=transform.position;
					position.y +=0.75;



					//Instantiation des projectiles en fonction des personnages
					// Nakiya
					if (heroEnregistrer == 1) 
					{
						
						nouveauProjectile = Instantiate(projectileFeu, position, projectileFeu.transform.rotation);
						nouveauProjectile.GetComponent.<Rigidbody>().AddForce(joueurSouris * force);
						bouleDeFeu();
					}
					//Kaseem
					if (heroEnregistrer == 2) 
					{
						
						nouveauProjectile = Instantiate(projectileElectrique, position, transform.rotation);
						nouveauProjectile.GetComponent.<Rigidbody>().AddForce(joueurSouris * force);
						electricite();

					}
					//Kayden
					if (heroEnregistrer == 3) 
					{
						
						coupPoing();
					}

					Manadisponible-=10;
	        		if(Manadisponible <=0)
		        	{
		       			 Manadisponible = 0;
		        	}
		        	ManaSlider.value = Manadisponible;
				}	
			}}else{}
		}


    }
}
function regenMana(){
	if(Manadisponible < ManaSlider.maxValue)
	{

		Manadisponible += 10;
	}

	else if(Manadisponible >= ManaSlider.maxValue)
	{
		Manadisponible = ManaSlider.maxValue;
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


	if(Viedisponible <= 0 && !estMort)
	{
		
		Mort();
	}
}

function Mort()
{
	animateur.SetBool('mort', true);
	yield WaitForSeconds (3);
	Application.LoadLevel (8);
	estMort=true;
	//playerAudio.clip = deathclip;
	//playerAudio.Play ();
}

function coupPoing()
{
	animateur.SetBool('attaque', true);
	yield WaitForSeconds(0.8); // le temps de l'animation divisé en 2
	//instancier la hitbox
	coupDePoing.SetActive(true);
	yield WaitForSeconds(0.4); // le temps de l'animation divisé en 2
	animateur.SetBool('attaque', false);
	//retire la hitbox
	coupDePoing.SetActive(false);
}

function electricite() {

	animateur.SetBool('attaque', true);
	yield WaitForSeconds(2); // le temps de l'animation
	animateur.SetBool('attaque', false);
}

function bouleDeFeu() {
	animateur.SetBool('attaque', true);
	yield WaitForSeconds(2); // le temps de l'animation
	animateur.SetBool('attaque', false);
}
//fermer le panneau de vente de potions
function retourneMenu() 
{		
			Time.timeScale = 1;
			panneauEscape.SetActive(false);
    		peutTirer=true;//désactive le tir du héro 
    		Application.LoadLevel (0);
}
function quitteJeux() 
{
Application.Quit();
}
function annuler() 
{
			Time.timeScale = 1;
			panneauEscape.SetActive(false);
    		peutTirer=true;//active le tir du héro
}