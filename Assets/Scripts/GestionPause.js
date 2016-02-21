/*
 * Permet de gérer la fonction de pause du jeu
 * @access private
 */  

#pragma strict

function Start () {
	Pause(); //Appelle la fonction en début de jeu
}

function Update () {


}


function Pause()
{
	Time.timeScale = (Time.timeScale == 1 ? 0 : 1); //Met le jeu sur pause
	Debug.Log(Time.timeScale);
}