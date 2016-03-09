#pragma strict
/*
 * Source de  la musique d'ambiance
 * @access public
 * @var sourceAmbiance
 */

 public var sourceAmbiance:AudioSource;
function Start () {

if (PlayerPrefs.HasKey("Volume")) //Vérifie si les playerprefs sont initialisées au départ
    {
        sourceAmbiance.volume = PlayerPrefs.GetFloat("Volume"); //Place le niveau du volume des playerprefs dans la variable du slider
    } else {
    	sourceAmbiance.volume = 1;
    }

}

function Update () {

}