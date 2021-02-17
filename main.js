video="";
status="";
object=[];


function setup(){
canvas=createCanvas(450,375);
canvas.center();
video=createCapture(VIDEO);
video.size(450,375);
video.hide();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("number_of_objects").innerHTML="Number of Objects :-"+ object.length;
}
function modelLoaded(){
console.log(modelLoaded);
status=true;

}

function gotResult(error,results){
if (error) {
console.error();  
}
console.log(results);
object=results;
}

function draw(){
image(video,0,0,450,375);


if (status !="") {
    objectDetector.detect(video,gotResult);
    r=random(255);
    g=random(255);
    b=random(255);
for (i = 0; i < object.length; i++) {
    document.getElementById("status").innerHTML="Status:- Detecting Objects";
    
    fill(r,g,b);
    percent= floor(object[i].confidence * 100);
    text(object[i].label+""+percent+"%", object[i].x, object[i].y);
    noFill();
    stroke(r,g,b);
    rect(object[i].x, object[i].y, object[i].width, object[i].height);
}    
}
}