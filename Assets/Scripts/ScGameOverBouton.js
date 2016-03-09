/*
 * Pour rejouer au jeu
 */ 

#pragma strict


function Start () {

}

function Update () {


}
function Rejouez () {
Application.LoadLevel (2); //Charge la scène du menu
}

function Quitter () {
Application.Quit(); //Ferme le jeu
}

function Credits () {
Application.LoadLevel (12); //Charge la scène du menu
}
