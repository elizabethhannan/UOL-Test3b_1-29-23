/*

The Game Project

3b - 


*/

// Declare variables for interaction
var LeftPressed = false;
var RightPressed = false;


var floorPos_y;

var gameChar_x;
var gameChar_y;


  //Variables for canyon
var canyon;


  //Variables for mountains
var mountainPos_a_x;
var mountainPos_a_y;
var mountainPos_b_x;
var mountainPos_b_y;
var mountain_c;


  //Variables for tree
  var treePos_x = 100;
  var treePos_y = 100;


  //Variables for clouds
var cloudPos_x;
var cloudPos_y;

    //Variables for canyon
var canyonPos_x = 100;
var canyonPos_y = 400;

  //Variables for collectables
var collectablePos_a_x;
var collectablePos_a_y;
var collectablePos_b_x;
var collectablePos_b_y;

var collectable = {
    x: collectablePos_a_x,
    y: collectablePos_a_y,
    size: 50,
    isFound: false
}



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; 
    //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
    //Initalise variables
  
    //Variables for game character
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

    //Variables for tree
	treePos_x = width/2;
	treePos_y = height/2;

    //Variables for canyon
    canyonPos = width/2;
    canyonPos = floorPos_y;
  
    //Variables for mountains  
    mountainPos_a_x = width/2;
    mountainPos_a_y = floorPos_y;
  
    mountainPos_a_x = width/2;
    mountainPos_b_y = floorPos_y;
  
    //Variables for clouds
    cloudPos_x = width/2;
    cloudPos_y = floorPos_y;
  
    //Variables for collectables
    collectable.x = width/2;
    collectable.y = floorPos_y;
    collectablePos_b_x = width/2;
    collectablePos_b_y = floorPos_y;
      
    
}

function draw()
{
        console.log("Draw function called");


	//fill the sky blue
    background(100, 155, 255); 

    //collectable
    if (!collectable.isFound) {
        fill(255, 0, 0);
        ellipse(collectable.x, collectable.y, collectable.size, collectable.size);
    }

    collectable

    collectable.x = width/10;
    collectable.y = floorPos_y - collectable.size;


    //draw some green ground
	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y);
    if (gameChar_x >= width - 50) {
        floorPos_y += 10;
    }
    
  
    //Draw cloud_a ORIGINAL
    //fill(255,255,255)
    //ellipse(200,50,80,80);
    //ellipse(160,50,60,60);
    //ellipse(240,50,60,60);
    //describe('white cloud left cloud_a');
  
      
    //Draw cloud_a
    fill(255,255,255)
    ellipse(cloudPos_x = +200,cloudPos_y = 50,80,80);
    ellipse(cloudPos_x = +160, cloudPos_y = 50, 60, 60);
    ellipse(cloudPos_x = +240, cloudPos_y = 50, 60, 60);
    describe('white cloud left cloud_a');

    console.log("cloud_a drawn");
}


    //draw cloud_b_grey ORIGINAL
    //fill(220,220,220)
    //ellipse(875,60,80,80);
    //ellipse(840,60,60,60);
    //ellipse(800,60,40,40);
    //describe('grey cloud white cloud right cloud_b');

    //draw cloud_b_white ORIGINAL
    //fill(255,255,255)
    //ellipse(920,60,80,80);
    //describe('grey cloud white cloud right cloud_c');
  
    //draw cloud_b_grey
    fill(220,220,220)
    ellipse(cloudPos_x = +875,cloudPos_y = 60,80,80);
    ellipse(cloudPos_x = 840, cloudPos_y = 60, 60, 60);
    ellipse(cloudPos_x = 800,cloudPos_y = 60,40,40);
    describe('grey cloud white cloud right cloud_b');

    console.log("cloud_b_grey drawn");


    //draw cloud_b_white 
    fill(255,255,255)
    ellipse(cloudPos_x = + 920,cloudPos_y = 60,80,80);
    describe('grey cloud white cloud right cloud_c');  

    console.log("cloud_b_white drawn");

  
    //draw cloud_c ORIGINAL
    //fill(255,255,255)
    //ellipse(400,200,80,80);
    //ellipse(450,200,60,60);
    //ellipse(500,200,60,60);
    //describe('grey cloud white cloud right cloud_c');

    //draw cloud_c 
    fill(255,255,255)
    ellipse(cloudPos_x = 400,cloudPos_y = 80,80,80);
    ellipse(cloudPos_x = 450, cloudPos_y = 80, 60, 60);
    ellipse(cloudPos_x = 500, cloudPos_y = 80, 60, 60);
    describe('grey cloud white cloud right cloud_c');

    console.log("cloud_c drawn");

  
    //draw mountain_a ORIGINAL
    //draw mountain_a
    fill(120,100,140); 
    triangle(mountainPos_x + 100, mountainPos_y - 4,
         mountainPos_x + 400, mountainPos_y - 282,
         mountainPos_x + 500, mountainPos_y - 4);
    describe('purple mountain_a right');

    console.log("mountain_a drawn");

  
    //draw mountain_b
    //fill(255,150,0);
    //triangle(400, 432, 530, 132, 910, 432);
    //describe('orange mountain right');
  
    //draw mountain_b
    fill(255,150,0);
    triangle(mountainPos_x + 300, mountainPos_y - 4, 
         mountainPos_x + 500, mountainPos_y - 250, 
         mountainPos_x + 700, mountainPos_y - 4);
    describe('orange mountain_b right');
    
    console.log("mountain_b drawn");

    
    

    //fill(120,100,140); 
    //triangle(300, 432, 430, 182, 700, 432);
    //describe('orange mountain right'); 

    //draw mountain_c
    //fill(12,100,14); 
    //triangle(350, 432, 450, 182, 600, 432);
    //describe('green mountain right');
  
    //draw mountain_c
    fill(12,100,14);
    triangle(mountainPos_x + 200, mountainPos_y - 4,
             mountainPos_x + 225, mountainPos_y - 282, 
             mountainPos_x + 500, mountainPos_y - 4)
   describe('green mountain right');


   console.log("mountain_c drawn");
  

  
    //draw first tree 1
    
    //trunk_1 - original
    //fill(120,100,40);
    //rect(treePos_x, treePos_y, 50, 150)
  
    //trunk_1
    fill(120,100,40);
    rect(treePos_x, treePos_y, 50, 150)
    noStroke();


    //first branches tree 1
    fill(0,155,0);
    //triangle(850, 332, 930, 232,1010, 332);
    triangle(treePos_x - 55, treePos_y + 50,
             treePos_x + 30, treePos_y - 50, 
             treePos_x + 110, treePos_y + 50,)
    describe('green bottom triangle branch');
  
    //second branches tree 1
    fill(107, 142,  35);
    //triangle(850, 332, 930, 232,1010, 332);
    triangle(treePos_x - 55, treePos_y + 1,
             treePos_x + 30, treePos_y - 150, 
             treePos_x + 110, treePos_y + 1,)
    describe('olive top triangle branch');
  
    noStroke();
  
    //draw second tree 2
    fill(120,100,140); 
    rect(200, 282, 55,150);
    
    //rect(treePos_x, treePos_y, -40, 150)
    describe('purple tree trunk right');
  
	//noStroke();
	//fill(255);
	//text("tree", 800, 346);
  
    //draw second Branches tree 2
    fill(0,155,0);
    //triangle(850, 332, 930, 232, 1010, 332);
    triangle(treePos_x - 420, treePos_y + 10,
             treePos_x + - 290, treePos_y - 175, 
             treePos_x - 146, treePos_y + 7,)
    describe('green bottom triangle branch');
    
     
    //draw third Branches tree 2 
    fill(60, 179, 113);
    //triangle(850, 282, 930, 182, 1010, 282);
    triangle(treePos_x -420, treePos_y + 50,
              treePos_x -290, treePos_y - 90, 
              treePos_x -146, treePos_y + 50,)
    describe('mediumseagreen top triangle branch');
  
    //draw third tree
	//... add your code here
    fill(139,  69,  19,); 
    rect(treePos_x - 80, treePos_y, - 40, 150)
    noStroke();
    

  
    //draw first Branches tree 3
    fill(124, 252, 0);
    //triangle(590, 332, 630, 232, 650, 332);
    //triangle(590, 332, 630, 182, 630, 300);
    triangle(treePos_x - 50, treePos_y + 90,
             treePos_x + -97, treePos_y - 120, 
             treePos_x - 146, treePos_y + 7,)
    describe('LawnGreen top triangle branch');
  
  
    //draw second Branches tree 3
    fill(46, 139, 87);
    //triangle(590, 332, 630, 232, 650, 332);
    //triangle(590, 332, 630, 182, 630, 300);
    triangle(treePos_x -50, treePos_y + 7,
             treePos_x -97, treePos_y -120, 
             treePos_x -146, treePos_y + 90,)
    describe('green top triangle branch');
  
    
    //draw canyon
    fill(139,  69,  19); 
    rect(canyonPos_x - 575, canyonPos_y, 205);

    fill(244, 164, 96); 
    rect(canyonPos_x - 400, canyonPos_y, 80, 180);

   //('brown, canyon center');
  
    // draw canyon 
    fill(244, 164, 96); 
    //rect(125, 432, 70, 125);
    rect(canyonPos_x -400, 
         canyonPos_y, -80,+180)
    describe('sandybrown, light canyon edges');

    //draw canyon
    function draw() {
        background(220);
  

        // character movement
        if (keyIsDown(LEFT_ARROW)) {
            x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            x += 5;
        }
        if (keyIsDown(UP_ARROW)) {
            y -= 5;
        }
        if (keyIsDown(DOWN_ARROW)) {
            y += 5;
        }
    
        let gravity = 0.5;
        let yVelocity = 0;

        yVelocity -= gravity;
        
// Initialize LeftPressed variable with default value of false
let LeftPressed = false;

// Add event listener for keydown event
document.addEventListener("keydown", event => {
  if (event.code === "ArrowLeft") {
    LeftPressed = true;
  }
});

let RightPressed = false;

document.addEventListener("keydown", event => {
  if (event.code === "ArrowRight") {
    RightPressed = true;
  }
});

        // Test to see if movement and jumping are working
       console.log("Left Pressed: " + leftPressed);
       console.log("Right Pressed: " + rightPressed);
       console.log("Jump Pressed: " + jumpPressed);
       console.log("Y Velocity: " + yVelocity);




        // check if character is in range of collectable item
        if (dist(x, y, collectable.x, collectable.y) < collectable.size) {
            collectable.isFound = true;
        }
    
        // draw collectable item if not found
        if (!collectable.isFound) {
            fill(255, 0, 0);
            ellipse(collectable.x, collectable.y, collectable.size, collectable.size);
        }
    
        // draw character
        fill(255);
        ellipse(x, y, 20, 20);

        // Declare variables for movement
        let moveSpeed = 5.0;
        let leftPressed = false;
        let rightPressed = false;


    
        // draw canyon
        fill(100);
        rect(canyon.x, canyon.y, canyon.width, canyon.height);
}
  
    
    //draw collectable_a ORIGINAL
    //fill(255, 0, 0)
    //ellipse(collectablePos_x = 600, collectablePos_y = 430, 60, 60);
    //ellipse(collectablePos_x = -300, collectablePos_y = 430);
    //ellipse(collectablePos_y = +5, collectablePos_y +430);
    //describe('red, jewel center');
  
    //fill(255, 255, 0)
    //stroke('rgb(0,255,255)');
    //strokeWeight(4);
    //ellipse(600, 430, 60, 20);
  
    //fill(255, 255, 0)
    //ellipse(600, 430, 20, 60);
  
    //fill(255, 255, 0)
    //ellipse(600, 430, 20, 60);
  
    //fill(255, 0, 255)
    //ellipse(600, 430, 20, 20);
    //describe('purple jewel center');
  
  
    //draw collectable_a_gem
    fill(255, 0, 0)
    ellipse(collectablePos_x = 100, collectablePos_y = 100, 50, 50);
    describe('red, jewel center');
  
    fill(255, 255, 0)
    stroke('rgb(0,255,255)');
    strokeWeight(4);
    ellipse(collectablePos_x = 100, collectablePos_y = 100, 50, 20);
  
    fill(255, 255, 0)
    ellipse(collectablePos_x = 100, collectablePos_y = 100, 20, 50);
  
    fill(255, 255, 0)
    ellipse(collectablePos_x = 100, collectablePos_y = 100, 20, 50);
  
    fill(255, 0, 255)
    ellipse(collectablePos_x = 100, collectablePos_y = 100, 20, 20);
    describe('purple jewel center');
  
  
    //draw collectable_b ORIGINAL
    //Pink Bunny
    //stroke('rgb(255, 240, 245)');
    //strokeWeight(2);
    //fill(255,150,255)
    //ellipse(775, 410, 80, 80);
    //describe('pink body');

    //fill(255,150,255)
    //ellipse(790, 365, 40, 40);
    //describe('pink head');

    //fill(255,80,255)
    //ellipse(790, 370, 15, 15);
    //describe('pink nose');

    //fill(199, 21, 133)
    //ellipse(775, 450, 40, 25);
    //describe('pink bunny foot');

    //fill(255,100,255)
    //ellipse(760, 425, 60, 60);
    //describe('pink bunny hip');

    //fill(255,80,255)
    //ellipse(780, 305, 10, 90, 90);
    //describe('pink left ear');

    //fill(255,80,255)
    //ellipse(800, 305, 10, 90, 90);
    //describe('pink bunny right ear');
  
  
  
    //draw collectable_b 
    //Pink Bunny
    stroke('rgb(255, 240, 245)');
    strokeWeight(2);
    fill(255,150,255)
    ellipse(collectablePos_a_x = +275, collectablePos_a_y = +410, 60, 60);
    describe('pink body');
  
    fill(255,80,255)
    ellipse(collectablePos_a_x = +275, collectablePos_a_y = +335, 10, 50);
    describe('pink left ear');

    fill(255,80,255)
    ellipse(collectablePos_a_x = +302, collectablePos_a_y = +335, 10, 50);
    describe('pink bunny right ear');

    fill(255,150,255)
    ellipse(collectablePos_a_x = +290, collectablePos_a_y = +365, 40, 40);
    describe('pink head');

    fill(255,80,255)
    ellipse(collectablePos_a_x = +290, collectablePos_a_y = +373, 18, 19);
    describe('pink nose');

    fill(199, 21, 133)
    ellipse(collectablePos_a_x = 275, collectablePos_a_y = 440, 30, 15);
    describe('pink bunny foot');

    fill(255,100,255)
    ellipse(collectablePos_a_x = 255, collectablePos_a_y = 425, 45, 45);
    describe('pink bunny hip');

  
    //draw game character ORIGINAL
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y - 50, - 50, 35);
    describe('beige head');
  
    fill(0,255,255);
    ellipse(gameChar_x - 9, gameChar_y - 55, 10, 10);
    describe('cyan left eye');
  
    fill(0,255,255);
    ellipse(gameChar_x + 9, gameChar_y - 55, 10, 10);
    describe('cyan right eye');
  
    fill(255,20,147);
    ellipse(gameChar_x, gameChar_y - 70, 10, 10);
    describe('pink hair');
  
    fill(255,20,147);
    ellipse(gameChar_x + 8, gameChar_y - 70, 10, 10);
    describe('pink hair right');
  
    fill(255,20,147);
    ellipse(gameChar_x - 8, gameChar_y - 70, 10, 10);
    describe('pink hair left');
    
    fill(2,255,0);
    rect(gameChar_x - 13, gameChar_y - 35, 26, 30);
    describe('lime green body');
  
    fill(255,255,0);
    rect(gameChar_x - 7.5, gameChar_y - 30, 16, 20);
    describe('yellow body');  
  
    fill(0);
    rect(gameChar_x + 13, gameChar_y - 30, 10, 10);
    describe('black right arm');
  
    fill(0);
    rect(gameChar_x -23, gameChar_y - 30, 10, 10);
    describe('black left arm');
    
    fill(0)
    rect(gameChar_x - 15, gameChar_y - 5, 10, 10);
    describe('black left leg');
  
    fill(0)
    rect(gameChar_x + 5, gameChar_y - 5, 10, 10);
    describe('black right leg');

    //Collectable item interaction:
     {
        background(220);
    
        // character movement
        if (keyIsDown(LEFT_ARROW)) {
            x -= 5;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            x += 5;
        }
        if (keyIsDown(UP_ARROW)) {
            y -= 5;
        }
        if (keyIsDown(DOWN_ARROW)) {
            y += 5;
        }
    
        // check if character is in range of collectable item
        if (dist(x, y, collectable.x, collectable.y) < collectable.size) {
            collectable.isFound = true;
        }
    
        // draw collectable item if not found
        if (!collectable.isFound) {
            fill(255, 0, 0);
            ellipse(collectable.x, collectable.y, collectable.size, collectable.size);
        }
    
        // draw character
        fill(255);
        ellipse(x, y, 20, 20);
    }
    


//falling down the canyon
        if(gameChar_x > canyon.x && gameChar_x < canyon.x + canyon.width)
{
        isPlummeting = true;
}

        if(isPlummeting)
{
        gameChar_y += 10;
}

    //Jumping over the canyon
    if(gameChar_x > canyon.x && gameChar_x < canyon.x + canyon.width && gameChar_y >= floorPos_y)
{
    isPlummeting = true;
}
 {
    // collectable_found
    if (!collectable.isFound) {
      fill(255, 0, 0);
      ellipse(collectable.x, collectable.y, collectable.size);
    }
  }

  //Collectable item interaction:
  if (dist(character.x, character.y, collectable.x, collectable.y) < character.size/2 + collectable.size/2) {
    collectable.isFound = true;
}

  //Draw the canyon
    rect(canyon.x, canyon.y, canyon.width, canyon.height);

  //iFalling down the canyon
if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width)
{
    isPlummeting = true;
}
if(isPlummeting)
{
    gameChar_y +=10;
}

//Jumping over the canyon
if(gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width && gameChar_y >= floorPos_y)
{
    isPlummeting = true;
}

  function mousePressed() {
    let d = dist(mouseX, mouseY, collectable.x, collectable.y);
    if (d < collectable.size/2) {
      collectable.isFound = true;
    }
  }
  
  function update() {
    if (gameChar_world_x > canyon.x && gameChar_world_x < canyon.x + canyon.width && gameChar_y >= floorPos_y) {
        isFalling = true;
    }
  
    if (isJumping && gameChar_world_x > canyon.x && gameChar_world_x < canyon.x + canyon.width) {
      isFalling = false;
    }  
}


// keyPressed method
//Left right key press
function keyPressed() {
    if (key == 'a' || key == 'A') {
      LeftPressed = true;
    }
    if (key == 'd' || key == 'D') {
      RightPressed = true;
    }
  }
  
    let jumpSpeed = 10.0;
    let jumpPressed = false;
    let yVelocity = 0;


if (jumpPressed) {
    yVelocity += jumpSpeed;
    jumpPressed = false;
}

  
// keyReleased method
//release left right key press
function keyReleased() {
    if (key == 'a' || key == 'A') {
      LeftPressed = false;
    }
    if (key == 'd' || key == 'D') {
      RightPressed = false;
    }
  }
  
  

function mousePressed()
{

    gameChar_x = mouseX;
    gameChar_y = mouseY;
  

}
