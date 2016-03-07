#pragma strict
private var hasCollided : boolean = false;
private var labelText : String = "";
private var variableBool:boolean = true; 
function Start () {

}

function Update () {

}

function OnGUI(){
	if(hasCollided == true){

	GUI.Box(Rect(400,Screen.height-50,Screen.width-800,120),(labelText));

	}
}
 function OnTriggerEnter(c:Collider)
     {
         if(c.gameObject.name =="Hero") 
     
     {

         hasCollided = true;
         labelText = "Niveau 5 Boss Final, vous devez avoir les quatres clefs";
       variableBool=false;
         
 }
 }
 
 function OnTriggerExit( other : Collider ){
      hasCollided = false;
  
 }