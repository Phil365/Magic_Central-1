/*
 * Pour faire une rotation du design dans le menu
 * @access private
 * @class RotateDesign
 * http://answers.unity3d.com/questions/580001/trying-to-rotate-a-2d-sprite.html
 */   




using UnityEngine;
using System.Collections;

public class RotateDesign : MonoBehaviour {


	void Start () {
	
	}
	

	void Update () {
	
		transform.Rotate (0,0,30*Time.deltaTime); //Fait une rotation du transform de l'objet à une vitesse de 30 sur chaque frame.

	}
}
