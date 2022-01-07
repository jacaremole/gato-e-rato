var gato,rato;
var img1gato,img2gato,img3gato,img4gato;
var bgimg;
var ratoimg1,ratoimg2,ratoimg3,ratoimg4;
//acho que fiz tudo certo mas quando clico em go live fica em um loading infinito

function preload() {
    //load the images here
    bgimg = loadImage("garden.png");
    img1gato = loadImage("cat1.png");
    img2gato = loadAnimation("cat2.png","cat3.png");
    img4gato = loadImage("cat4.png");
    ratoimg1 = loadImage("mouse1.png");
    ratoimg2 = loadImage("mouse2.png");
    ratoimg3 = loadImage("mouse3.png");
    ratoimg4 = loadImage("mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     rato = createSprite(20,20,300,600);
     gato = createSprite(20,20,700,600);

     gato.addAnimation("gato sentado", img1gato);
     rato.addImage(ratoimg1);

     gato.scale=0.2
}

function draw() {

    background(255);
    if (gato.x - rato.x < rato.width/2 + gato.width/2
        && rato.x - gato.x < rato.width/2 + gato.width/2
        && gato.y - rato.y < rato.height/2 + gato.height/2
        && rato.y - gato.y < rato.height/2 + gato.height/2) {
        
        rato.addAnimation("ratofeliz",ratoimg4);
        rato.changeAnimation("ratofeliz");
        gato.velocityX=0;
        gato.addAnimation("gatofeliz",img4gato);
        gato.changeAnimation("gatofeliz")
    
    }

    drawSprites();
}


function keyPressed(){
    
  //For moving and changing animation write code here
  if(keyCode == LEFT_ARROW){
    mouse.addAnimation ("ratoProvocando", ratoimg2);
    mouse.changeAnimation ("ratoProvocando");
    mouse.frameDelay = 25;

    gato.addAnimation("gatocorrendo",img2gato);
    gato.changeAnimation("gatocorrendo");
    gato.velocityX=-25;
  }

}
