function load(){
    Webcam.set({
        width : 350,
        height : 350,
        image_format : 'png',
    });
    Webcam.attach(document.getElementById("camera"));
}
function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capture' src='"+data_uri+"'>";
    });
}

console.log("Your Ml5 Version :" + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-LqsUALoB/model.json", modelloaded);

function modelloaded(){
    console.log("Model Loaded");
}

function check(){
    img = document.getElementById("capture");
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }else{
        console.log(results);
    }
}

var prediction = "Happy";
    var  synth = window.speechSynthesis;
    speak_data = "I Guess The Prediction Of Your Hand Gesture is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
