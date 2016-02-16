#pragma strict

 /*
 * degat appliqué
 * @access public
 * @var degat
 */

public var degat:float = 10f;

function Start () {

}

function Update () {
	// Verifications des niveaux dans le update pour set les dmgs du coup de poing
	if (PlayerPrefs.HasKey("niveau"))
	{
		if (PlayerPrefs.GetInt('niveau') == 2)
		{
			degat = 20; 
		}
		if (PlayerPrefs.GetInt('niveau') == 3) 
		{
			degat = 40;
		}

	}
	else 
	{
		degat = 10; 
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