var Porte : GameObject;
var nbClefs:int;
//
// function Start() {
//
// 	nbClefs =  PlayerPrefs.GetInt('Clefs');
//
// }
// 
// function Update() {
//
// 
// }
// 
// function OnTriggerEnter (Other : Collider) {
//  
//	  if (PlayerPrefs.HasKey("Clefs") && nbClefs == 4) {
//		 	if(Other.gameObject.tag == "Hero") {
//		  
//		  		Porte.GetComponent.<Animation>().Play();
//		  		Debug.Log ("porte ouverte");
//		 		Destroy(this);
//		 	}
//
//	  }
//  
// }





function Start() {

   if (PlayerPrefs.HasKey("Clefs")) 
   {

       nbClefs =  PlayerPrefs.GetInt('Clefs');
   }
   else 
   {
       nbClefs = 0;
   }
}


function OnTriggerEnter (Other : Collider) {

           if(Other.gameObject.tag == "Hero") 
           {
         
               if  (nbClefs == 4 ) 
               {
         		 Debug.Log("Test");
                 Porte.GetComponent.<Animation>().Play();
                 Debug.Log ("porte ouverte");
                 Destroy(this);
               }

           }

}