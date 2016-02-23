#pragma strict

 /*
 * degat appliqué<
 * @access public
 * @var degat
 */

public var degat:float = 10f;

 /*
 * projectile
 * @access public
 * @var anObject
 */

public var projectile : GameObject; 

/*
 * collider du projectile
 * @access public
 * @var projectileCollider
 */

public var projectileCollider : Collider;

 /*
 * main camera
 * @access private
 * @var cam
 */

private var cam : Camera;

 /*
 * tableau de planes
 * @access private
 * @var planes
 */

private var planes : Plane[];






// Source du code ayant servit de modele  : http://docs.unity3d.com/ScriptReference/GeometryUtility.TestPlanesAABB.html

function Start () {

	cam = Camera.main;
	planes = GeometryUtility.CalculateFrustumPlanes(cam);
	projectileCollider = GetComponent.<Collider>();


}

function Update () {

	if (GeometryUtility.TestPlanesAABB(planes, projectileCollider.bounds)) 
	{
		//Debug.Log("trouvé");
	}

	else 
	{
		Destroy(this.gameObject);

	}

	// Verifications des niveaux dans le update pour set les dmgs de la boule
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

	Debug.Log(degat);

}

function OnTriggerEnter (autre : Collider) {
	
	if (autre.gameObject.tag == 'ennemi') {

		autre.gameObject.SendMessageUpwards("diminuerVie", degat, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);

	}


	if (autre.gameObject.tag == 'boss') {

		autre.gameObject.SendMessageUpwards("diminuerVieBoss", degat, SendMessageOptions.DontRequireReceiver);
		Destroy(this.gameObject);
	}


}
