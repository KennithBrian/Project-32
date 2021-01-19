const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  backgroundImg,bg;

function preload(){
    getBackgroundImage();
}

function setup() {
	createCanvas(800,350);
	engine = Engine.create();
	world = engine.world;

    ground = new Ground(390,300,215,10);
    ploygon = new Polygon(100,250,6,20);
    slingShot = new Slingshot(ploygon.body,{x: 100,y: 250});

    block1 = new Box(300,275,30,40,135,206,234);
    block2 = new Box(330,275,30,40,135,206,234);
    block3 = new Box(360,275,30,40,135,206,234);
    block4 = new Box(390,275,30,40,135,206,234);
    block5 = new Box(420,275,30,40,135,206,234);
    block6 = new Box(450,275,30,40,135,206,234);
    block7 = new Box(480,275,30,40,135,206,234);

    block8 = new Box(330,235,30,40,255,192,203);
    block9 = new Box(360,235,30,40,255,192,203);
    block10 = new Box(390,235,30,40,255,192,203);
    block11 = new Box(420,235,30,40,255,192,203);
    block12 = new Box(450,235,30,40,255,192,203);

    block13 = new Box(360,195,30,40,63,224,208);
    block14 = new Box(390,195,30,40,63,224,208);
    block15 = new Box(420,195,30,40,63,224,208);

    block16 = new Box(390,155,30,40,128,128,128)

	Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(backgroundImg);
    text(score,50,50);
    stroke('red');
    fill('red')
    textSize(20);
    text('Drag the Hexagon Stone, and release it to hit the blocks',50,50);
    
    ground.display();
    ploygon.display();
    slingShot.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
}

function mouseDragged(){
    Matter.Body.setPosition(ploygon.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(ploygon.body);
    }
}

async function getBackgroundImage(){
    var collectData = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var collectDataJson = await collectData.json();
    var getDateTime = collectDataJson.datetime;
    console.log(getDateTime);
    var hourTime = getDateTime.slice(11,13);
    if(hourTime >= 06 && hourTime <= 20){
        bg = 'sprites/download.jfif';
    }
    else{
        bg = 'sprites/download (1).jfif';
    }
    backgroundImg = loadImage(bg);
}