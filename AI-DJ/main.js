seng="";
rightWristY=0;
leftWristY=0;
rightWristX=0;
leftWristX=0;
function preload()
{
  seng=loadSound("music.mp3");
}
function setup()
{
   canvas=createCanvas(600,500);
   canvas.position(500,250);
   video=createCapture(VIDEO);
   video.hide();
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("Model has loaded the pizzaria gamer pro yes monkey");
}
function draw()
{
   image(video,0,0,600,500);
}
function play_song()
{
    seng.play();
    seng.setVolume(1);
    seng.rate(2);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristY=results[0].pose.rightWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
        console.log("Right Wrist x is equal to"+rightWristX);
        console.log("Left Wrist y is equal to"+leftWristY);
        console.log("Right Wrist y is equal to"+rightWristY);
        console.log("Left Wrist x is equal to"+leftWristX);
    }
}