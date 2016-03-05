#pragma strict
/*
 * Source de  la musique d'ambiance
 * @access public
 * @var sourceAmbiance
 */

 public var sourceAmbiance:AudioSource;
function Start () {
sourceAmbiance.volume= PlayerPrefs.GetFloat("Volume"); //Place le niveau du volume des playerprefs dans la variable du slider
}

function Update () {

}