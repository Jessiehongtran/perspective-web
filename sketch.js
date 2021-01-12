var img;

function preload(){
    img = loadImage('https://res.cloudinary.com/dfulxq7so/image/upload/v1610488276/CoolMap_irfdae.png')
    createCanvas(720, 400);
}

function setup(){
    image(img, 0, 0);
}

function draw(){
    background(img)
}
