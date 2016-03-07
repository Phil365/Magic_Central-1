 /* @access public
 * @var panneauDialogue
 */

import UnityEngine.UI;


public var panneauDialogue:GameObject;

public var textDialogue : Text;

public var spriteMinion : Sprite;
public var spriteKayden : Sprite;
public var spriteKaseem : Sprite;
public var spriteNakiya : Sprite;

private var spriteHero : Sprite;

var imageDialogue : Image;

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
      Time.timeScale = 0;

	}	

}


function Start () {

	panneauDialogue.SetActive(false);

	numMessage = 0;


	if (Application.loadedLevel == 3) {
	messageUn = "Hop!";
	messageDeux = "Euh… T’es qui, au juste?";
	messageTrois = "Nous sommes les espions secrets de Magic Central. Nous sommes ici pour trouver de l’information sur la mort du grand chef!";
	messageQuatre = "Comment se fait-il que je ne vous ai jamais vus?";
	messageCinq = "On est secrets!";
	messageSix = "Je vois. Avez-vous une piste?";
	messageSept = "Tout ce qu’on sait, c’est que le coupable s’est enfui par un des teleporteurs. Il connaissait donc l’existence de Magic Central… Possiblement une connaissance de l’un des membres. Puisque c’etait tres secret…";
	messageHuit = "On trouvera bien ce meurtrier. Il paiera pour son crime!";
	nmbMax = 8;
	}

	else if (Application.loadedLevel == 4) {
	messageUn = "Nom de code! Nom de code! GrizzlyJaune07!";
	messageDeux = "En tout cas, t’es moins brillant que le blanc de ta capuche.";
	messageTrois = "Ça doit être ça. Mais assez brillant pour savoir qu’un suspect est passe par là.";
	messageQuatre = "Ah bon? Il ressemble à quoi?";
	messageCinq = "Je sais pas.";
	messageSix = "Bravo, c’est bien.";
	messageSept = "Je veux dire, il portait une cagoule noire, un habit tout noir… J’ai pas vu son visage.";
	messageHuit = "Je vois. Merci!";
	nmbMax = 8;
	}

	else if (Application.loadedLevel == 5) {
	messageUn = "C’est quoi cet endroit? C’est si humide et sale!";
	messageDeux = "C’est la nature.";
	messageTrois = "Quelle idee de nous envoyer ici… Ma capuche est fichue!";
	messageQuatre = "Une petite nature, dans la nature.";
	messageCinq = "Bon, ça va… Au moins elle n’est pas brulee comme celle de mon collegue.";
	messageSix = "Comment ça, brulee?";
	messageSept = "J’en sais rien. Il etait couvert d’une sorte de… Poussiere. Et il toussait tellement qu’il n’arrivait pas à parler. Mais selon ses gesticulations, je crois qu’il a trouve quelque chose. Il est revenu de cette direction!";
	messageHuit = "J’y vais.";
	nmbMax = 9;
	}

	else if (Application.loadedLevel == 6) {
	messageUn = "He… C’est quoi ce bordel? Pourquoi ils m’engagent si c’est que pour me faire devancer à chaque coup? J’vais le coincer moi-même, ce mec!";
	messageDeux = "Bah alors, vas-y.";
	messageTrois = "Apres mure reflexion… Je devrais… Rapporter cette information confidentielle à Magic Central. Je risquerais de me faire voir et tu sais… On est secrets.";
	messageQuatre = "C’est bien ce que je pensais.";
	messageCinq = "Attends! J’ai vu quelqu’un rentrer ici, un peu plus tôt… Grand, cagoule noire… Tu sais, il a l’air tres fort… Si j’etais toi, je m’assurerais d’être prêt, si tu vois ce que je veux dire.";
	messageSix = "C’est bon, merci!";
	nmbMax = 6;
	}

	else if (Application.loadedLevel == 7) {
	messageUn = "Dong… Ding… Ding Dong… Bing… Mae…";
	messageDeux = "Tu dis quoi?";
	messageTrois = "Chut…";
	messageQuatre = "...";
	messageCinq = "DONG MINH BAE!";
	nmbMax = 5;
	}


	 if ((PlayerPrefs.HasKey("heroChoisi"))) 
 	 {
 	 	heroEnregistrer = PlayerPrefs.GetInt('heroChoisi');
 	 }


 	 switch (heroEnregistrer) {

 	 	   	case 1:
			spriteHero = spriteNakiya;
	   		break;

	   		case 2:
			spriteHero = spriteKaseem;
	   		break;

	   		case 3:
			spriteHero = spriteKayden;
	   		break;

 	 }


	textDialogue.text = messageUn;

	imageDialogue.sprite = spriteMinion;

}

function Update () {

	if (Input.GetKeyDown ("space")) {


		numMessage ++;



	   switch (numMessage) {


	   	case 1:
	   		textDialogue.text = messageDeux;
	   		imageDialogue.sprite =  spriteHero;
	   		break;

	   	case 2:
	   		textDialogue.text = messageTrois;
	   		imageDialogue.sprite = spriteMinion;
	   		break;

	    case 3:
	   		textDialogue.text = messageQuatre;
	   		imageDialogue.sprite =  spriteHero;
	   		break;

	   	case 4:
	   		textDialogue.text = messageCinq;
	   		imageDialogue.sprite = spriteMinion;
	   		break;

	    case 5:
	   		textDialogue.text = messageSix;
	   		imageDialogue.sprite =  spriteHero;
	   		break;

	   	case 6:
	   		textDialogue.text = messageSept;
	   		imageDialogue.sprite = spriteMinion;
	   		break;

	   	case 7:
	   		textDialogue.text = messageHuit;
			imageDialogue.sprite =  spriteHero;
	   		break;


	   }

	   if (numMessage >= nmbMax) {

	   		panneauDialogue.SetActive(false);
	   		Time.timeScale = 1;
	   		Destroy(this.gameObject);

	   }

	}

}