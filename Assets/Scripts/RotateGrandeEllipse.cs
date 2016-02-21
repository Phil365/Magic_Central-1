/*
 * Pour faire une rotation de l'ellipse dans le menu
 * @access private
 * @class RotateGrandeEllipse
 * http://answers.unity3d.com/questions/580001/trying-to-rotate-a-2d-sprite.html
 */   

using UnityEngine;
using System.Collections;

public class RotateGrandeEllipse : MonoBehaviour {


	void Start () {

	}


	void Update () {

		transform.Rotate (0,0,-5*Time.deltaTime); //Fait une rotation du transform de l'objet à une vitesse de -5 sur chaque frame.

	}
}
