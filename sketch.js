/*

The Game Project

Week 1 - part b

Use p5 drawing functions such as rect, ellipse, line, triangle and point to draw the scenery as set out in the comments below. The items should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = You've used lots of shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to imaginatively modify these and interpret the scenery titles loosely to match your game theme.


*/
var gameChar_x = 0;
var clouds = 0
var moutains = 0 
var trees = 0
var houseXs = 0
var floorPos_y = 0;

function setup() 
{
    createCanvas(1000,400);
}

function draw() 
{    
    background(255,218,185); //fill the sky blue
    
    
     //2. a mountain in the distance
    //... add your code here
    
   
    
   
    noStroke();
    fill(222,184,135);
    triangle(moutains + 400, floorPos_y+350,moutains + 500,floorPos_y+100,moutains + 600,floorPos_y+350);
    fill(255,255,255);
    strokeWeight(2);
    stroke(255,255,255);
    beginShape();
    vertex(moutains + 480,floorPos_y+150);
    vertex(moutains + 490,floorPos_y+155);
    vertex(moutains + 500,floorPos_y+150);
    vertex(moutains + 510,floorPos_y+155);
    vertex(moutains + 519,floorPos_y+150);
    vertex(moutains + 500,floorPos_y+100);
    endShape(CLOSE);
    
    noStroke()
    fill(222,184,135);
    triangle(moutains + 580,floorPos_y+350,moutains + 680,floorPos_y+100,moutains + 780,floorPos_y+350)
    fill(255)
    strokeWeight(2);
    stroke(255,255,255);
    beginShape();
    vertex(moutains+660,floorPos_y+150);
    vertex(moutains+680,floorPos_y+100);
    vertex(moutains+699,floorPos_y+150);
    vertex(moutains+690,floorPos_y+155);
    vertex(moutains+680,floorPos_y+150);
    vertex(moutains+670,floorPos_y+155);
    vertex(moutains+660,floorPos_y+150);
    endShape(CLOSE);
    
    
    
    
    
    
    noStroke();
    fill(192,192,192); 
    rect(0, height * 3/4,width, height/4); //draw some green ground

    
    //1. a cloud in the sky 
    //... add your code here
    
    
    fill(255,180,203);
    stroke(245,170,195);
    ellipse(clouds+180,floorPos_y+80,60,70)
    ellipse(clouds+210,floorPos_y+90,60,70)
    noStroke();
    ellipse(clouds+220,floorPos_y+100,80,60)
    ellipse(clouds+165,floorPos_y+100,80,60)
    
    
    //3. a tree 
    //... add your code here
    
    noStroke();
    fill(255);
    rect(trees+800,150,10,200);
    fill(255,192,203,);
    ellipse(trees+770,floorPos_y+150,40,40);
    ellipse(trees+800,floorPos_y+150,40,40);
    ellipse(trees+750,floorPos_y+120,40,40);
    ellipse(trees+760,floorPos_y+100,40,40);
    ellipse(trees+780,floorPos_y+100,40,40);
    ellipse(trees+780,floorPos_y+80,40,40);
    ellipse(trees+800,floorPos_y+120,100,100);
    ellipse(trees+800,floorPos_y+80,40,40)
    ellipse(trees+820,floorPos_y+85,40,40)
    ellipse(trees+835,floorPos_y+100,40,40)
    ellipse(trees+840,floorPos_y+115,40,40)
    ellipse(trees+845,floorPos_y+115,40,40)
    ellipse(trees+843,floorPos_y+130,40,40)
    ellipse(trees+840,floorPos_y+140,40,40)
    ellipse(trees+835,floorPos_y+150,40,40)
    //4. a house
    //... add your code here
    
    noStroke();
    
    fill(176,224,230);
    rect(houseXs+100,floorPos_y+200,150,140);
    fill(230,230,250);
    quad(houseXs+80,floorPos_y+210,houseXs+130,floorPos_y+150,houseXs+220,floorPos_y+150,houseXs+270,floorPos_y+210);
    
    fill(105,105,105);
    strokeWeight(3);
    stroke(135,206,235);
    ellipse(houseXs+175,floorPos_y+230,30,30);
    
    fill(230,230,250);
    rect(houseXs+150,floorPos_y+250,50,88);
    
    
    //5. another foreground item of your choice
    //... add your code here
   
    noStroke();
    fill(218,165,32);
    ellipse(499,305,60,60)
    fill(255,215,0);
    ellipse(500,300,60,60)
  
   
    
}