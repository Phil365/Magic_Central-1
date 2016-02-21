/*
 * Contient le gameobject de la porte
 * @access public
 * @var Porte
 */

var Porte : GameObject;

/*
 * Contient le nombre de clefs
 * @access private
 * @var nbClefs
 */

var nbClefs:int;

/*
 * Contient le UI du panneau affichant les clefs
 * @access public
 * @var panneauClefs
 */

public var panneauClefs:GameObject;



function Start() {

   if (PlayerPrefs.HasKey("Clefs")) //Si des clefs ont été ramassées...
   {

       nbClefs =  PlayerPrefs.GetInt('Clefs'); //Stocke le nombre de clefs déjà ramassées dans nbClefs
   }
   else 
   {
       nbClefs = 0; //Sinon, aucune clef
   }
}

// Ouverture du teleport du niveau 5
function OnTriggerEnter (Other : Collider) {

           if(Other.gameObject.tag == "Hero") // Si mon perso approche la porte
           {
         
               if  (nbClefs == 4 ) //Et que mon perso possède 4 clefs
               {
                 Porte.GetComponent.<Animation>().Play(); // Joue l'animation d'ouverture de porte
                 Debug.Log ("porte ouverte");
                 Destroy(this);
               }

               else {
               		panneauClefs.SetActive(true); //Sinon, ouvre le panneau indiquant l'objectif à accomplir
               }

           }

}

function OnTriggerExit (Other : Collider) {

	       if(Other.gameObject.tag == "Hero") //Si mon perso s'éloigne de la porte
           {
           		panneauClefs.SetActive(false); //Le panneau d'objectifs se ferme.
           }
}