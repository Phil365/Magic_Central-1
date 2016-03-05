/*
 * Permet de seter le volume au max au debut du jeu
 * @access public
 * @var sliderVolume
 */          

 /*
 * Référence au slider de mana
 * @access public
 * @var ManaSlider
 */                               
var SonSlider: Slider;    
/*
 * Référence à l'audioSource
 * @access public
 * @var musique
 */   
public var musique:AudioSource;

function Start() {

	if (PlayerPrefs.HasKey("Volume")) //Vérifie si les playerprefs sont initialisées au départ
    {
        SonSlider.value = PlayerPrefs.GetFloat("Volume"); //Place le niveau du volume des playerprefs dans la variable du slider
    }
}

function Volume() {
	musique.mute = false;
	volume=SonSlider.value;
	PlayerPrefs.SetFloat("Volume", volume); //Met à jour les playerprefs au changement de volume du slider
}
function Mute () {

	if(musique.mute) { //Si la musique est assourdie
		musique.mute = false; //La musique n'est plus assourdie
	}

	else {
		musique.mute = true; //Sinon, la musique est assourdie.
		PlayerPrefs.SetFloat("Volume", 0); //Met à jour les playerprefs au changement de volume du slider
	}

}


