noseX = 0;
noseY = 0;
function preload(){
 img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    image(video, 0, 0, 300, 300);
    image(img, noseX-30, noseY-10, 50, 50);
}
function take_snapshot(){
    save('filter.png');
}

function modelLoaded(){
    console.log('Model is loaded');
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log('nose_x = ' + result[0].pose.nose.x);
        console.log('nose_y = ' + result[0].pose.nose.y);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
    }
    
}