#pragma strict

var textureFilm : MovieTexture;

function Start () {

	GetComponent.<Renderer>().material.mainTexture = textureFilm;
	textureFilm.Play();


}

function Update () {

if (textureFilm.isPlaying == false) // si la video est terminée
{
	Application.LoadLevel (0); //Charge la scène du menu
}

}