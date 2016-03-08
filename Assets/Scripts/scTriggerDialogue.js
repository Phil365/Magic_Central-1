import UnityEngine.UI;

/*
 * Contient le panneau du dialogue
 * @access public
 * @var panneauDialogue
 */
public var panneauDialogue:GameObject;

/*
 * Contient le texte du dialogue
 * @access public
 * @var textDialogue
 */
public var textDialogue : Text;

/*
 * Contient le sprite du minion
 * @access public
 * @var spriteMinion
 */
public var spriteMinion : Sprite;

/*
 * Contient le sprite de Kayden
 * @access public
 * @var spriteKayden
 */
public var spriteKayden : Sprite;

/*
 * Contient le sprite de Kaseem
 * @access public
 * @var spriteKaseem
 */
public var spriteKaseem : Sprite;

/*
 * Contient le sprite de Nakiya
 * @access public
 * @var spriteNakiya
 */
public var spriteNakiya : Sprite;

/*
 * Contient le sprite choisi
 * @access private
 * @var spriteHero
 */
private var spriteHero : Sprite;

/*
 * Fait office d'un placeholder pour l'avatar
 * @access public
 * @var imageDialogue
 */
var imageDialogue : Image;

/*
 * Contient l'ordre des messages
 * @access private
 * @var numMessage 
 */
var numMessage : int;

/*
 * Contient le nombre maximum de messages
 * @access private
 * @var nmbMax
 */
var nmbMax : int;

/*
 * Contient les messages du dialogue
 * @access private
 * @var messageUn
 * @var messageDeux
 * @var messageTrois
 * @var messageQuatre
 * @var messageCinq
 * @var messageSix
 * @var messageSept
 * @var messageHuit
 */
var messageUn : String;
var messageDeux : String;
var messageTrois : String;
var messageQuatre : String;
var messageCinq : String;
var messageSix : String;
var messageSept : String;
var messageHuit : String;





function OnTriggerEnter(trigger:Collider) // Si le personnage s'approche du minion...
{
	if (trigger.gameObject.name == 'Hero') { 
	  panneauDialogue.SetActive(true); // Ouverture du panneau de dialogue
      Time.timeScale = 0; // Met le jeu sur pause

	}	

}


function Start () {

	panneauDialogue.SetActive(false); // Panneau fermé au lancement de jeu

	numMessage = 0; // Initialise le numero d'ordre du message à 0


	if (Application.loadedLevel == 3) { // Si nous sommes au niveau 1...
	messageUn = "Hop!";
	messageDeux = "Euh… T’es qui, au juste?";
	messageTrois = "Nous sommes les espions secrets de Magic Central. Nous sommes ici pour trouver de l’information sur la mort du grand chef!";
	messageQuatre = "Comment se fait-il que je ne vous ai jamais vus?";
	messageCinq = "On est secrets!";
	messageSix = "Je vois. Avez-vous une piste?";
	messageSept = "Tout ce qu’on sait, c’est que le coupable s’est enfui par un des teleporteurs. Il connaissait donc l’existence de Magic Central… Possiblement une connaissance de l’un des membres. Puisque c’etait tres secret…";
	messageHuit = "On trouvera bien ce meurtrier. Il paiera pour son crime!";
	nmbMax = 8; // Il n'y a pas plus de 8 messages, donc le maximum de messages possible est 8.
	}

	else if (Application.loadedLevel == 4) { // Si nous sommes au niveau 2...
	messageUn = "Nom de code! Nom de code! GrizzlyJaune07!";
	messageDeux = "En tout cas, t’es moins brillant que le blanc de ta capuche.";
	messageTrois = "Ça doit être ça. Mais assez brillant pour savoir qu’un suspect est passe par là.";
	messageQuatre = "Ah bon? Il ressemble à quoi?";
	messageCinq = "Je sais pas.";
	messageSix = "Bravo, c’est bien.";
	messageSept = "Je veux dire, il portait une cagoule noire, un habit tout noir… J’ai pas vu son visage.";
	messageHuit = "Je vois. Merci!";
	nmbMax = 8; // Il n'y a pas plus de 8 messages, donc le maximum de messages possible est 8.
	}

	else if (Application.loadedLevel == 5) { // Si nous sommes au niveau 3...
	messageUn = "C’est quoi cet endroit? C’est si humide et sale!";
	messageDeux = "C’est la nature.";
	messageTrois = "Quelle idee de nous envoyer ici… Ma capuche est fichue!";
	messageQuatre = "Une petite nature, dans la nature.";
	messageCinq = "Bon, ça va… Au moins elle n’est pas brulee comme celle de mon collegue.";
	messageSix = "Comment ça, brulee?";
	messageSept = "J’en sais rien. Il etait couvert d’une sorte de… Poussiere. Et il toussait tellement qu’il n’arrivait pas à parler. Mais selon ses gesticulations, je crois qu’il a trouve quelque chose. Il est revenu de cette direction!";
	messageHuit = "J’y vais.";
	nmbMax = 8; // Il n'y a pas plus de 8 messages, donc le maximum de messages possible est 8.
	}

	else if (Application.loadedLevel == 6) { // Si nous sommes au niveau 4...
	messageUn = "He… C’est quoi ce bordel? Pourquoi ils m’engagent si c’est que pour me faire devancer à chaque coup? J’vais le coincer moi-même, ce mec!";
	messageDeux = "Bah alors, vas-y.";
	messageTrois = "Apres mure reflexion… Je devrais… Rapporter cette information confidentielle à Magic Central. Je risquerais de me faire voir et tu sais… On est secrets.";
	messageQuatre = "C’est bien ce que je pensais.";
	messageCinq = "Attends! J’ai vu quelqu’un rentrer ici, un peu plus tôt… Grand, cagoule noire… Tu sais, il a l’air tres fort… Si j’etais toi, je m’assurerais d’être prêt, si tu vois ce que je veux dire.";
	messageSix = "C’est bon, merci!";
	nmbMax = 6; // Il n'y a pas plus de 6 messages, donc le maximum de messages possible est 6.
	}

	else if (Application.loadedLevel == 7) { // Si nous sommes au niveau 5...
	messageUn = "Dong… Ding… Ding Dong… Bing… Mae…";
	messageDeux = "Tu dis quoi?";
	messageTrois = "Chut…";
	messageQuatre = "...";
	messageCinq = "DONG MINH BAE!";
	nmbMax = 5; // Il n'y a pas plus de 5 messages, donc le maximum de messages possible est 5.
	}


	 if ((PlayerPrefs.HasKey("heroChoisi"))) // Si des PlayerPrefs existent pour le héros...
 	 {
 	 	heroEnregistrer = PlayerPrefs.GetInt('heroChoisi'); // Son numéro est stocké dans la variable heroEnregistrer.
 	 }


 	 switch (heroEnregistrer) { // Détermine quel personnage a été préalablement choisi, donc quel avatar il faut placer.

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


	textDialogue.text = messageUn; // Le premier message doit être écris en premier, donc initialisé au lancement.

	imageDialogue.sprite = spriteMinion; // Le minion est toujours celui qui parle en premier, donc c'est le premier avatar lancé.

}

function Update () {

	if (Input.GetKeyDown ("space")) { // Si on appuie sur space...


		numMessage ++; // l'ordre des messages s'incrémente



	   switch (numMessage) { // Appelle les différents messages du dialogue en ordre, et alterne les avatars dans la discussion


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

	   if (numMessage >= nmbMax) { // Si l'ordre du message est à son maximum...

	   		panneauDialogue.SetActive(false); // On ferme le panneau
	   		Time.timeScale = 1; // Le jeu reprend
	   		Destroy(this.gameObject); // On ne peut plus parler au minion, car le panneau se détruit.

	   }

	}

}