#pragma strict

/*
 * Cible de la caméra
 * @access public
 * @var cible
 */ 

public var cible:GameObject;

/*
 * Distance de la caméra
 * @access private
 * @var distance
 */ 

private var distance:float=1;

function Start () {

}


 function Update(){
 
     transform.position.z = cible.transform.position.z -distance;
     transform.position.y = cible.transform.position.y;
     transform.position.x = cible.transform.position.x;
 
 }