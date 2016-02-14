/*
 * Permet de seter le volume au max au debut du jeu
 * @access public
 * @var sliderVolume
 */          

public var sliderVolume: float = 1.0; 

function Start() {

	if (PlayerPrefs.HasKey("Volume")) //Vérifie si les playerprefs sont initialisées au départ
    {
   
        sliderVolume = PlayerPrefs.GetFloat("Volume"); //Place le niveau du volume des playerprefs dans la variable du slider

    }

}

function OnGUI() {

	sliderVolume = GUI.HorizontalSlider (Rect (1070,760,100, 60), sliderVolume, 0.0, 1.0); //Crée le slider du volume
	GetComponent.<AudioSource>().volume=sliderVolume; //Joins la valeur du volume de la musique dans la variable du slider

	PlayerPrefs.SetFloat("Volume", sliderVolume); //Met à jour les playerprefs au changement de volume du slider

}


