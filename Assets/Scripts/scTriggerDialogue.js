 /* @access public
 * @var panneauDialogue
 */

import UnityEngine.UI;


public var panneauDialogue:GameObject;

public var textDialogue : Text;

var numMessage : int;
var nmbMax : int;


var messageUn : String;
var messageDeux : String;
var messageTrois : String;
var messageQuatre : String;
var messageCinq : String;
var messageSix : String;
var messageSept : String;
var messageHuit : String;





function OnTriggerEnter(trigger:Collider) 
{
	if (trigger.gameObject.name == 'Hero') { //Ouverture du panneau de dialogue
	  panneauDialogue.SetActive(true);
      //Time.timeScale = 0;

	}	

}


function Start () {

	panneauDialogue.SetActive(false);

	numMessage = 0;


	if (Application.loadedLevel == 3) {
	messageUn = "Personnage: Euh… T’es qui, au juste?";
	messageDeux = "Minion blanc: Nous sommes les espions secrets de Magic Central. Nous sommes ici pour trouver de l’information sur la mort du grand chef!";
	messageTrois = "Personnage: Comment se fait-il que je ne vous ai jamais vus?";
	messageQuatre = "Minion Blanc: On est secrets!";
	messageCinq = "Personnage: Je vois. Avez-vous une piste?";
	messageSix = "Minion Blanc: Tout ce qu’on sait, c’est que le coupable s’est enfui par un des téléporteurs. Il connaissait donc l’existence de Magic Central… Possiblement une connaissance de l’un des membres. Puisque c’était très secret…";
	messageSept = "Personnage: On trouvera bien ce meurtrier. Il paiera pour son crime!";
	nmbMax = 7;
	}

	else if (Application.loadedLevel == 4) {
	messageUn = "Minion Blanc: Nom de code! Nom de code! GrizzlyJaune07!";
	messageDeux = "Personnage: En tout cas, t’es moins brillant que le blanc de ta capuche.";
	messageTrois = "Minion Blanc: Ça doit être ça. Mais assez brillant pour savoir qu’un suspect est passé par là.";
	messageQuatre = "Personnage: Ah bon? Il ressemble à quoi?";
	messageCinq = "Minion Blanc: Je sais pas.";
	messageSix = "Personnage: Bravo, c’est bien.";
	messageSept = "Minion Blanc: Je veux dire, il portait une cagoule noire, un habit tout noir… J’ai pas vu son visage.";
	messageHuit = "Personnage: Je vois. Merci!";
	nmbMax = 8;
	}

	else if (Application.loadedLevel == 5) {
	messageUn = "Minion Blanc: C’est quoi cet endroit? C’est si humide et sale!";
	messageDeux = "Personnage: C’est la nature.";
	messageTrois = "Minion Blanc: Quelle idée de nous envoyer ici… Ma capuche est fichue!";
	messageQuatre = "Personnage: Une petite nature, dans la nature.";
	messageCinq = "Minion Blanc: Bon, ça va… Au moins elle n’est pas brûlée comme celle de mon collègue.";
	messageSix = "Personnage: Comment ça, brûlée?";
	messageSept = "Minion Blanc: J’en sais rien. Il était couvert d’une sorte de… Poussière. Et il toussait tellement qu’il n’arrivait pas à parler. Mais selon ses gesticulations, je crois qu’il a trouvé quelque chose. Il est revenu de cette direction!";
	messageHuit = "Personnage: J’y vais.";
	nmbMax = 9;
	}

	else if (Application.loadedLevel == 6) {
	messageUn = "Minion Blanc: Hé… C’est quoi ce bordel? Pourquoi ils m’engagent si c’est que pour me faire devancer à chaque coup? J’vais le coincer moi-même, ce mec!";
	messageDeux = "Personnage: Bah alors, vas-y.";
	messageTrois = "Minion Blanc: Après mûre réflexion… Je devrais… Rapporter cette information confidentielle à Magic Central. Je risquerais de me faire voir et tu sais… On est secrets.";
	messageQuatre = "Personnage: C’est bien ce que je pensais.";
	messageCinq = "Minion Blanc: Attends! J’ai vu quelqu’un rentrer ici, un peu plus tôt… Grand, cagoule noire… Tu sais, il a l’air très fort… Si j’étais toi, je m’assurerais d’être prêt, si tu vois ce que je veux dire.";
	messageSix = "Personnage: C’est bon, merci!";
	nmbMax = 6;
	}

	else if (Application.loadedLevel == 7) {
	messageUn = "Minion Blanc: Dong… Ding… Ding Dong… Bing… Mae…";
	messageDeux = "Personnage: Tu dis quoi?";
	messageTrois = "Minion Blanc: Chut…";
	messageQuatre = "Personnage: ...";
	messageCinq = "Minion Blanc: DONG MINH BAE!";
	nmbMax = 5;
	}

	textDialogue.text = messageUn;

}

function Update () {





	if (Input.GetKeyDown ("space")) {


		numMessage ++;



	   switch (numMessage) {

//	   	case 0:
//	   		textDialogue.text = messageUn;
//	   		break;

	   	case 1:
	   		textDialogue.text = messageDeux;
	   		break;

	   	case 2:
	   		textDialogue.text = messageTrois;
	   		break;

	    case 3:
	   		textDialogue.text = messageQuatre;
	   		break;

	   	case 4:
	   		textDialogue.text = messageCinq;
	   		break;

	    case 5:
	   		textDialogue.text = messageSix;
	   		break;

	   	case 6:
	   		textDialogue.text = messageSept;
	   		break;

	   	case 7:
	   		textDialogue.text = messageHuit;
	   		break;


	   }



	   if (numMessage >= nmbMax) {

	   		panneauDialogue.SetActive(false);
	   		Destroy(this.gameObject);

	   }

	}

}