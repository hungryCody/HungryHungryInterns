using UnityEngine;
using System.Collections;

public class Player : MonoBehaviour
{
	// The force which is added when the player jumps
	// This can be changed in the Inspector window
	public Vector2 jumpForce = new Vector2(0, 300);
	
	// Update is called once per frame
	void Update ()
	{
		// Jump
		if (Input.GetKeyUp("space"))
		{
			GetComponent<Rigidbody2D>().velocity = Vector2.zero;
			GetComponent<Rigidbody2D>().AddForce(jumpForce);
		}
		
		// Die by being off screen
		Vector2 screenPosition = Camera.main.WorldToScreenPoint(transform.position);
		if (screenPosition.y > Screen.height || screenPosition.y < 0)
		{
			Die();
		}
	}
	
	// Die by collision
	void OnCollisionEnter2D(Collision2D other)
	{
		Die();
	}
	
	void Die()
	{
		AudioSource audio = GetComponent<AudioSource>();
        audio.Play();

        Time.timeScale = 0;

        if(Input.GetKeyDown("space")){
         	GameObject[] GameObjects = (FindObjectsOfType<GameObject>() as GameObject[]);
 
	    	for (int i = 0; i < GameObjects.Length; i++)
	     	{
	       		Destroy(GameObjects[i]);
	    	}

	    	Time.timeScale = 1;

			Application.LoadLevel(Application.loadedLevel);
        }
	}
}