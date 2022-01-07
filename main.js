var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    speek()
}

function speak() {
    var synth = window.SpeechSynthesis;
    speek_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speechSynthesis);
    synth.speak(utterThis);
    webcam.attach(camera);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

