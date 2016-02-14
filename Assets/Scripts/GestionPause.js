#pragma strict

function Start () {
	Pause();
}

function Update () {


}


function Pause()
{
	Time.timeScale = (Time.timeScale == 1 ? 0 : 1);
	Debug.Log(Time.timeScale);
}