using UnityEngine;

public class Obstacle : MonoBehaviour
{
	public Vector2 velocity = new Vector2(-4, 0);
	public float range = 1;
	int counter = 0;
	
	// Use this for initialization
	void Start()
	{
		GetComponent<Rigidbody2D>().velocity = velocity;
		transform.position = new Vector3(transform.position.x, transform.position.y - range * Random.value, transform.position.z);

		InvokeRepeating("playSound", 1f, 1.5f);
	}

	void playSound(){
		if(counter > 2)
		{
			AudioSource audio = GetComponent<AudioSource>();
        	audio.Play();
		}
		else
		{
			counter++;
		}
	}
}