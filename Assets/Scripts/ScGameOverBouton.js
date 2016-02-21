/*
 * Pour rejouer au jeu
 */ 

#pragma strict

function Start () {

}

function Update () {

}
function Rejouez () {
Application.LoadLevel (0); //Charge la scène du menu
}

function Quitter () {
Application.Quit(); //Ferme le jeu
}