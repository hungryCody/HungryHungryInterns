using UnityEngine;

public class Generate : MonoBehaviour
{
	public GameObject rocks;
	int score = 0;
	int counter = 0;
	
	// Use this for initialization
	void Start()
	{
		InvokeRepeating("CreateObstacle", 1f, 1.5f);
	}
	
	// Update is called once per frame
	void OnGUI () 
	{
		GUI.color = Color.black;
		GUILayout.Label(" Score: " + score.ToString());
	}
	
	void CreateObstacle()
	{
		counter++;
		Instantiate(rocks);
		if(counter < 5)
		{
			score = 0;
		}
		else
		{
			score++;;
		}
	}
}