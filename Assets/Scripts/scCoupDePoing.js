#pragma strict

 /*
 * degat appliqué
 * @access public
 * @var degat
 */

public var degat:float = 25f;

function Start () {

}

function Update () {
	// Verifications des niveaux dans le update pour set les dmgs du coup de poing
	if (PlayerPrefs.HasKey("niveau"))
	{
		if (PlayerPrefs.GetInt('niveau') == 2)
		{
			degat = 30; 
		}
		if (PlayerPrefs.GetInt('niveau') == 3) 
		{
			degat = 50;
		}

	}
	else 
	{
		degat = 25; 
	}

}

function OnTriggerEnter (autre : Collider) {
	
	if (autre.gameObject.tag == 'ennemi') {

		autre.gameObject.SendMessageUpwards("diminuerVie", degat, SendMessageOptions.DontRequireReceiver);


	}


	if (autre.gameObject.tag == 'boss') {

		autre.gameObject.SendMessageUpwards("diminuerVieBoss", degat, SendMessageOptions.DontRequireReceiver);

	}


}