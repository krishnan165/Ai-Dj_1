Song1="";
Song2="";

LeftWristx=0;
LeftWristy=0;
RightWristx=0;
RightWristy=0;
function preload()
{
  Song1=loadSound("Song1.mp3");
  Song2=loadSound("Song2.mp3");
}

function setup()
{
   video=createCapture(VIDEO);
   video.position(500,100);
   video.size(600,600);

   canvas=createCanvas(600,500);
   canvas.position(500,150);

   posenet=ml5.poseNet(video,modelLoaded);
   posenet.on("pose",gotposes);
}

function modelLoaded()
{
    console.log("PoseNet is working");
}

function gotposes(results)
{
if(results.length>0)
{
    console.log(results);
    LeftWristx=results[0].pose.leftWrist.x;
    LeftWristy=results[0].pose.leftWrist.y;
    RightWristx=results[0].pose.rightWrist.x;
    RightWristy=results[0].pose.rightWrist.y;

    console.log("Left Wrist x="+LeftWristx);
    console.log("Left Wrist y="+LeftWristy);
    console.log("right Wrist x="+RightWristx);
    console.log("right Wrist y="+RightWristy);
    
}
}

function draw()
{

}