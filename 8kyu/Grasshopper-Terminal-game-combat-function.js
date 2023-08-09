//problem 

//Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.



//answer 1

function combat(health, damage) { 
    let remainingHealth = health - damage;
    
    return  remainingHealth > 0 ? remainingHealth 
    : remainingHealth <= 0 ? 0
    :'deceased'
  }

//answer 2

function combat(health, damage) {
	return health < damage ? 0 : health - damage
}

//answer 3

function combat(health, damage) {
    return Math.max(health - damage, 0);
  }