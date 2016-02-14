#pragma strict

/*
 * Référence à l'audioSource
 * @access public
 * @var musique
 */   

public var musique:AudioSource;

function Start () {
	
}

function Update () {

}

function Mute () {

	if(musique.mute) { //Si la musique est assourdie

		musique.mute = false; //La musique n'est plus assourdie

	}

	else {

		musique.mute = true; //Sinon, la musique est assourdie.

	}

}